import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Result.css'; 

const Result = () => {
  const location = useLocation();

  if (!location.state) {
    return (
      <div className="result-container">
        <h1 className="result-header">Quiz Completed!</h1>
        <p className="score-text">No quiz data found. Please start the quiz again.</p>
        <Link to="/">
          <button className="try-again-button" aria-label="Try Again">
            Try Again
          </button>
        </Link>
      </div>
    );
  }

  const { score, total } = location.state;

  return (
    <div className="result-container">
      <h1 className="result-header">Quiz Completed!</h1>
      <p className="score-text">Your Score: {score} / {total}</p>
      <Link to="/">
        <button className="try-again-button" aria-label="Try Again">
          Try Again
        </button>
      </Link>
    </div>
  );
};

export default Result;