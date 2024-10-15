import { useState } from 'react';
import PropTypes from 'prop-types';

const MCQ = ({ question, onNext, onBack, currentAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(currentAnswer || '');  // Initialize with currentAnswer if available

  const handleSubmit = () => {
    if (selectedOption) {
      onNext(selectedOption); // Pass the selected answer to the next question
    } else {
      alert("Please select an option!"); // User-friendly validation
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
      <h2 className="text-xl font-bold text-gray-800">{question.question}</h2>
      <div className="space-y-4 mt-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedOption(option)}
            className={`w-full p-3 rounded-lg text-lg font-medium transition-colors duration-300 ease-in-out border-2 
              ${selectedOption === option ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300'}`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={onBack} // Back button functionality
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

MCQ.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,  // Add validation for the back functionality
  currentAnswer: PropTypes.string,    // Optional prop to pre-fill selected answer
};

export default MCQ;
