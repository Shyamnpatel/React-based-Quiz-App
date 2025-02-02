import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Welcome to the Ultimate Quiz Experience!</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '20px', color: '#555' }}>
        Test your knowledge, challenge yourself, and have fun!
      </p>
      <p style={{ fontSize: '1rem', marginTop: '10px', color: '#777' }}>
        Embark on an exciting journey filled with engaging questions. Whether you're here to learn something new 
        or prove you're a trivia master, you're in the right place!
      </p>
      <Link to="/quiz">
        <button className="start-quiz-button">Start Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
