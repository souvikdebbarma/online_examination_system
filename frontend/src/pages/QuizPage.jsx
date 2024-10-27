import { useState, useEffect } from "react";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [totalMarks, setTotalMarks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const storedQuizData = JSON.parse(localStorage.getItem("quizData"));
    if (storedQuizData) {
      setQuestions(storedQuizData.questions);
      setTotalMarks(storedQuizData.totalMarks);
      setTimeLeft(storedQuizData.timer * 60); // Convert minutes to seconds
      setAnswers(Array(storedQuizData.questions.length).fill(null));
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerChange = (questionIndex, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const submitQuiz = () => {
    console.log("Quiz submitted:", answers);
    alert("Quiz has been submitted.");
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Quiz</h1>

      <div className="flex justify-between items-center bg-white text-black p-4 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
        <div className="text-xl font-semibold">
          Total Marks: <span className="text-blue-600">{totalMarks}</span>
        </div>
        <div className="text-xl font-semibold">
          Time Left: <span className="text-red-600">{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="bg-white text-black p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        {questions.map((question, index) => (
          <div key={index} className="mb-6 border-b border-gray-300 pb-4">
            <h3 className="text-lg font-semibold mb-2">
              Question {index + 1}: {question.questionText}
            </h3>
            {question.options.map((option, optIndex) => (
              <div key={optIndex} className="flex items-center mb-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={optIndex}
                  checked={answers[index] === optIndex}
                  onChange={() => handleAnswerChange(index, optIndex)}
                  className="mr-2"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button
          onClick={submitQuiz}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full mt-4"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
