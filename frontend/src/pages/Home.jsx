import PropTypes from 'prop-types'; // Import PropTypes

const Home = ({ startQuiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full">

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center text-center p-6 md:p-10 w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 animate-fadeInUp w-full">Welcome to the Quiz Platform</h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-md md:max-w-lg animate-fadeInUp delay-200">
          Test your knowledge with our 30-question quiz, including multiple-choice and long-answer questions.
        </p>

        <button
          onClick={startQuiz}
          className="bg-yellow-500 text-black py-2 px-6 md:py-3 md:px-8 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-600 shadow-lg animate-bounce"
        >
          Start Quiz
        </button>

      </div>
    </div>
  );
};

// Define propTypes for the Home component
Home.propTypes = {
  startQuiz: PropTypes.func.isRequired, // 'startQuiz' should be a required function
};

export default Home;
