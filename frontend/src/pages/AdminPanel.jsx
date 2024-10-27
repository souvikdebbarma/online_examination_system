import { useState } from "react";

const AdminPanel = () => {
  const [questions, setQuestions] = useState(
    Array.from({ length: 10 }, () => ({
      questionText: "",
      options: ["", "", "", ""],
      correctAnswer: null,
      marks: ""
    }))
  );
  const [timer, setTimer] = useState(0);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === "questionText" || field === "marks") {
      updatedQuestions[index][field] = value;
    } else if (field === "correctAnswer") {
      updatedQuestions[index][field] = parseInt(value);
    } else if (field.startsWith("option")) {
      const optionIndex = parseInt(field.slice(-1), 10);
      updatedQuestions[index].options[optionIndex] = value;
    }
    setQuestions(updatedQuestions);
  };

  const handleTimerChange = (e) => {
    setTimer(e.target.value);
  };

  const saveQuiz = () => {
    const quizData = {
      questions,
      timer,
      totalMarks: questions.reduce((sum, q) => sum + (parseInt(q.marks) || 0), 0),
    };
    localStorage.setItem("quizData", JSON.stringify(quizData)); // Save to local storage
    alert("Quiz saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Panel - Set Quiz Questions</h1>
      <div className="bg-white text-black p-6 rounded-lg shadow-md mx-auto mb-8 w-full max-w-5xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Add Questions (10 Questions Maximum)</h2>

        {/* Timer Setting */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Set Quiz Duration (in minutes):</label>
          <input
            type="number"
            min="1"
            className="w-full p-2 border border-gray-300 rounded"
            value={timer}
            onChange={handleTimerChange}
            placeholder="Enter duration in minutes"
          />
        </div>

        {questions.map((question, index) => (
          <div key={index} className="mb-6 border-b border-gray-300 pb-4">
            <h3 className="text-lg font-semibold mb-2">Question {index + 1}</h3>
            <label className="block mb-2">Question:</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={question.questionText}
              onChange={(e) => handleQuestionChange(index, "questionText", e.target.value)}
              placeholder={`Enter question ${index + 1}`}
            />
            {question.options.map((option, optIndex) => (
              <div key={optIndex} className="mb-2">
                <label className="block mb-1">Option {optIndex + 1}:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={option}
                  onChange={(e) => handleQuestionChange(index, `option${optIndex}`, e.target.value)}
                  placeholder={`Enter option ${optIndex + 1}`}
                />
              </div>
            ))}
            <div className="mt-4 mb-4">
              <label className="block mb-2">Select Correct Answer:</label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={question.correctAnswer}
                onChange={(e) => handleQuestionChange(index, "correctAnswer", e.target.value)}
              >
                <option value="" disabled>Select the correct option</option>
                {question.options.map((_, optIndex) => (
                  <option key={optIndex} value={optIndex}>
                    Option {optIndex + 1}
                  </option>
                ))}
              </select>
            </div>
            <label className="block mb-2">Marks:</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              value={question.marks}
              onChange={(e) => handleQuestionChange(index, "marks", e.target.value)}
              placeholder="Enter marks for this question"
            />
          </div>
        ))}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full"
          onClick={saveQuiz}
        >
          Save Quiz
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
