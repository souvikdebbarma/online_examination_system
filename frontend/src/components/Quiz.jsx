// components/Quiz.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import MCQ from './MCQ';
import LongAnswer from './LongAnswer';
import ProgressBar from './ProgressBar';         

// Updated questions array to include more variety and types
const questions = [
  { type: 'mcq', question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Rome'], correct: 'Paris' },
  { type: 'long', question: 'Explain the theory of relativity.' },
  { type: "mcq", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
  { type: "mcq", question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"] },
  // Add more questions as needed...
];

const Quiz = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState([]);

  const handleNext = (answer) => {
    const newResponses = [...responses];
    newResponses[currentIndex] = answer; // Store the answer for the current question
    setResponses(newResponses);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);  // Move to the next question
    } else {
      onComplete(newResponses); // Pass all answers to the onComplete function
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Go back to the previous question
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105">

        {/* Progress Bar */}
        <ProgressBar current={currentIndex + 1} total={questions.length} />

        {/* Question Component (MCQ or LongAnswer) */}
        {questions[currentIndex].type === 'mcq' ? (
          <MCQ
            question={questions[currentIndex]}
            currentAnswer={responses[currentIndex]} // Pass current answer
            onNext={handleNext}
            onBack={handleBack} // Pass the back function
          />
        ) : (
          <LongAnswer
            question={questions[currentIndex]}
            currentAnswer={responses[currentIndex]} // Pass current answer
            onNext={handleNext}
            onBack={handleBack} // Pass the back function
          />
        )}
      </div>
    </div>
  );
};

Quiz.propTypes = {
  onComplete: PropTypes.func.isRequired,  // Validates that onComplete is a required function
};

export default Quiz;
