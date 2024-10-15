import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Results = ({ responses, totalQuestions }) => {
  // Animation state
  const [animated, setAnimated] = useState(false);

  // Trigger animation once component is mounted
  useEffect(() => {
    setTimeout(() => {
      setAnimated(true);
    }, 300); // Add delay for a smoother effect
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-200 to-purple-300">
      {/* Large Container with 3D effect */}
      <div
        className={`relative bg-white rounded-3xl shadow-2xl transition-all duration-1000 ease-in-out transform overflow-hidden p-8 sm:p-12 w-full max-w-3xl ${
          animated ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={{
          boxShadow: '0 15px 45px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Header with 3D effect */}
        <h1
          className={`text-4xl sm:text-5xl font-extrabold text-center mb-8 transform transition-all duration-1000 ease-in-out ${
            animated ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
          style={{
            textShadow: '0px 5px 10px rgba(0,0,0,0.2)',
          }}
        >
          Quiz Completed!
        </h1>

        {/* Subheader */}
        <p
          className={`text-lg sm:text-xl text-center text-gray-600 mb-6 transition-opacity duration-1000 ease-in-out delay-500 ${
            animated ? 'opacity-100' : 'opacity-0'
          }`}
        >
          You have completed the quiz. Here are your responses:
        </p>

        {/* Response List */}
        <div
          className={`bg-gray-50 p-6 rounded-xl shadow-lg transition-transform duration-700 ease-in-out transform ${
            animated ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            Your Responses
          </h2>
          <ul className="list-disc list-inside text-left text-lg sm:text-xl space-y-3">
            {responses.map((response, index) => (
              <li key={index} className="text-gray-800">
                <strong>Question {index + 1}:</strong> {response || 'No answer'}
              </li>
            ))}
          </ul>
        </div>

        {/* Summary Text */}
        <p
          className={`text-lg sm:text-xl text-center text-gray-700 mt-6 transform transition-all duration-1000 ease-in-out ${
            animated ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          You answered <strong>{responses.length}</strong> out of{' '}
          <strong>{totalQuestions}</strong> questions.
        </p>

        {/* Floating glow effect for 3D look */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-1000"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent)',
            transform: animated ? 'scale(1.05)' : 'scale(1)',
            filter: 'blur(15px)',
          }}
        ></div>
      </div>
    </div>
  );
};

Results.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.string).isRequired, // Responses array (either answers or "No answer")
  totalQuestions: PropTypes.number.isRequired, // Total number of questions
};

export default Results;
