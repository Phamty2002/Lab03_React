import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleAnswerClick = (correctAnswer) => {
    if (correctAnswer) {
      setCurrentScore((prevState) => prevState + 1);
    } else {
      setCurrentScore(0);
    }
  };

  const checkHighScore = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
      <hr />
      <h2>Question 1: What is the capital of France?</h2>
      <button onClick={() => handleAnswerClick(true)}>Paris</button>
      <button onClick={() => handleAnswerClick(false)}>Berlin</button>
      <button onClick={() => handleAnswerClick(false)}>London</button>
      <hr />
      <h2>Question 2: What is the largest country in the world?</h2>
      <button onClick={() => handleAnswerClick(false)}>Russia</button>
      <button onClick={() => handleAnswerClick(false)}>China</button>
      <button onClick={() => handleAnswerClick(true)}>Canada</button>
      <hr />
      <h2>Question 3: What is the name of the tallest mountain in the world?</h2>
      <button onClick={() => handleAnswerClick(false)}>Mount Everest</button>
      <button onClick={() => handleAnswerClick(false)}>Mount Kilimanjaro</button>
      <button onClick={() => handleAnswerClick(true)}>Mount K2</button>
      <hr />
      <button onClick={checkHighScore}>Check High Score</button>
    </div>
  );
};

export default App;
