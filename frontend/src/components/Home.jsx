import PropTypes from 'prop-types'; // Import PropTypes

const Home = ({ startQuiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-opacity-50 bg-black w-full">
        <div className="text-2xl md:text-3xl font-bold">Quiz Platform</div>
        <ul className="flex space-x-4 md:space-x-6">
          <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">Quizzes</li>
          <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">About</li>
        </ul>
      </nav>

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

        {/* Image with 3D Effect */}
        <div className="mt-8 md:mt-10 w-full flex justify-center">
          <img
            src="https://via.placeholder.com/400" // Replace with an actual image
            alt="Quiz Image"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:rotate-3 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

// Define propTypes for the Home component
Home.propTypes = {
  startQuiz: PropTypes.func.isRequired, // 'startQuiz' should be a required function
};

export default Home;
