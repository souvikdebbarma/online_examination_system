import { useState } from 'react';
import PropTypes from 'prop-types';

const LongAnswer = ({ question, onNext, onBack, currentAnswer }) => {
  const [answer, setAnswer] = useState(currentAnswer || '');  // Initialize with currentAnswer if available

  const handleSubmit = () => {
    if (answer.trim()) {
      onNext(answer);  // Pass the answer to the next question
    } else {
      alert('Please provide an answer!');  // User-friendly validation
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
      <h2 className="text-xl font-bold text-gray-800">{question.question}</h2>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full p-4 mt-4 border-2 rounded-lg text-lg font-medium bg-gray-100 focus:bg-white border-gray-300 focus:border-blue-600 transition-colors duration-300 ease-in-out"
        rows="6"
        placeholder="Type your answer here..."
      ></textarea>
      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}  // Back button functionality
          className="bg-gray-400 text-white p-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 active:scale-95"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white p-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

LongAnswer.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
  }).isRequired,
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,  // Add back button validation
  currentAnswer: PropTypes.string,    // Optional prop to pre-fill answer
};

export default LongAnswer;
