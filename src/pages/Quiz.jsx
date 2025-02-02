import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Confetti from "react-confetti";
import "./Quiz.css";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30);
    const [statusClass, setStatusClass] = useState("");
    const [showConfetti, setShowConfetti] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const timerRef = useRef(null);
    const answerSelectedRef = useRef(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(
                    "https://api.allorigins.win/raw?url=https://api.jsonserve.com/Uw5CrX"
                );
                const data = response.data;
                const transformedQuestions = data.questions.map((question) => ({
                    description: question.description,
                    answers: question.options.map((option) => ({
                        text: option.description,
                        isCorrect: option.is_correct,
                    })),
                }));
                setQuestions(transformedQuestions);
                setError(null);
            } catch (error) {
                console.error("Error fetching questions:", error);
                setError("Failed to load questions. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    const startQuiz = () => {
        setQuizStarted(true);
        setTimeLeft(30);
    };

    const handleAnswer = (isCorrect) => {
        if (answerSelectedRef.current) return; 
        answerSelectedRef.current = true;

        setSelectedAnswer(isCorrect);
        setStatusClass(isCorrect ? "correct" : "incorrect");

        setTimeout(() => {
            if (isCorrect) {
                setScore((prevScore) => prevScore + 1); 
            }
            moveToNextQuestion();
        }, 1000);
    };

    const moveToNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setTimeLeft(30);
            setSelectedAnswer(null);
            setStatusClass("");
            answerSelectedRef.current = false; 
        } else {
            setShowConfetti(true);
            setTimeout(() => {
                navigate("/result", { state: { score, total: questions.length } });
            }, 3000);
        }
    };

    useEffect(() => {
        if (quizStarted) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime > 0) return prevTime - 1;
                    moveToNextQuestion();
                    return 0;
                });
            }, 1000);
        }

        return () => clearInterval(timerRef.current);
    }, [quizStarted, currentQuestion]);

    if (loading) return <div className="loading">Loading questions...</div>;
    if (error) return <div className="error">{error} <button onClick={() => window.location.reload()}>Retry</button></div>;

    if (!quizStarted) {
        return (
            <div className="quiz-container">
                <div className="quiz-instructions">
                    <h2>Quiz Instructions</h2>
                    <ul>
                        <li>Each question carries <strong>1 score</strong>.</li>
                        <li>You have <strong>30 seconds</strong> to answer each question.</li>
                    </ul>
                </div>
                <button className="start-quiz-button" onClick={startQuiz}>
                    Start Quiz
                </button>
            </div>
        );
    }

    const question = questions[currentQuestion];
    if (!question || !question.description || !Array.isArray(question.answers)) {
        return <div className="error">Error: No valid question data</div>;
    }

    return (
        <div className={`quiz-container ${statusClass}`}>
            {showConfetti && (
                <Confetti
                    recycle={false}
                    numberOfPieces={500}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    gravity={0.3}
                />
            )}
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
            </div>
            <h2 className="quiz-title">{question.description}</h2>
            <div className="quiz-content">
                {question.answers.map((answer, index) => (
                    <button
                        key={index}
                        className={`quiz-button ${selectedAnswer !== null && answer.isCorrect ? "correct-answer" : ""}`}
                        onClick={() => handleAnswer(answer.isCorrect)}
                        disabled={selectedAnswer !== null}
                        aria-label={`Answer: ${answer.text}`}
                        role="button"
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
            <div className="timer-container">
                <div className="timer-bar" style={{ width: `${(timeLeft / 30) * 100}%` }}></div>
                <p className="quiz-timer">Time Left: {timeLeft} seconds</p>
            </div>
            <div className="quiz-info">
                <p className="quiz-score">Score: {score}</p>
                <p className="quiz-progress">
                    Question {currentQuestion + 1} of {questions.length}
                </p>
            </div>
        </div>
    );
};

export default Quiz;