import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// These questions would typically be stored in a database table called 'questions'
// with columns like:
//   - id (primary key)
//   - exam_id (foreign key to exams table)
//   - question_text 
//   - options (as JSON array)
//   - correct_answer
//
// Example SQL to create and insert:
/*
CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  exam_id INTEGER REFERENCES exams(id),
  question_text TEXT NOT NULL,
  options JSON NOT NULL,
  correct_answer TEXT NOT NULL
);

INSERT INTO questions (exam_id, question_text, options, correct_answer) 
VALUES (
  1,
  'What is React?',
  '["A JavaScript library", "A programming language", "A database", "An operating system"]',
  'A JavaScript library'
);
*/

const mockQuestions = [
  {
    id: 1,
    question: "What is React?",
    options: ["A JavaScript library", "A programming language", "A database", "An operating system"],
    correctAnswer: "A JavaScript library"
  },
  {
    id: 2,
    question: "What is JSX?",
    options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "JavaScript XHR"],
    correctAnswer: "JavaScript XML"
  },
  {
    id: 3,
    question: "What is the virtual DOM?",
    options: ["A direct copy of the real DOM", "A lightweight copy of the real DOM", "A browser feature", "A JavaScript engine"],
    correctAnswer: "A lightweight copy of the real DOM"
  },
  {
    id: 4,
    question: "What hook is used for side effects in React?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: "useEffect"
  },
  {
    id: 5,
    question: "What hook is used to maintain state in functional components?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    correctAnswer: "useState"
  },
  {
    id: 6,
    question: "What is a prop in React?",
    options: ["Input passed to components", "Internal component state", "Styling property", "HTML attribute"],
    correctAnswer: "Input passed to components"
  },
  {
    id: 7,
    question: "Which method is used to render React elements?",
    options: ["ReactDOM.render()", "React.createElement()", "React.mount()", "React.display()"],
    correctAnswer: "ReactDOM.render()"
  },
  {
    id: 8,
    question: "What is the default port for React development server?",
    options: ["3000", "8080", "5000", "4200"],
    correctAnswer: "3000"
  },
  {
    id: 9,
    question: "What tool is commonly used to create React applications?",
    options: ["Create React App", "React Builder", "React Creator", "React Init"],
    correctAnswer: "Create React App"
  },
  {
    id: 10,
    question: "Which lifecycle method is called after a component renders?",
    options: ["componentDidMount", "componentWillMount", "componentRender", "componentStart"],
    correctAnswer: "componentDidMount"
  }
];

const ExamTaking = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [examStarted, setExamStarted] = useState(false);

  // Timer logic
  useEffect(() => {
    if (examStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleSubmitExam();
    }
  }, [examStarted, timeLeft]);

  useEffect(() => {
    if (timeLeft === 300) { // 5 minutes remaining
      alert('5 minutes remaining!');
    } else if (timeLeft === 60) { // 1 minute remaining
      alert('1 minute remaining!');
    }
  }, [timeLeft]);

  const handleStartExam = () => {
    setExamStarted(true);
  };

  const handleAnswerSelect = (questionId, selectedAnswer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmitExam = () => {
    const unansweredCount = mockQuestions.length - Object.keys(answers).length;
    
    if (unansweredCount > 0) {
      const isConfirmed = window.confirm(
        `You have ${unansweredCount} unanswered questions. Do you still want to submit?`
      );
      if (!isConfirmed) return;
    }
    
    // Calculate score
    let score = 0;
    mockQuestions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });

    // Log the submission (for debugging)
    console.log('Exam submitted:', {
      answers,
      score: `${score}/${mockQuestions.length}`
    });
    
    // Navigate to results page with score data
    navigate('/exam-result', { 
      state: { 
        score,
        totalQuestions: mockQuestions.length 
      }
    });
  };

  if (!examStarted) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="bg-enamel p-6 rounded-lg shadow-lg">
          <h3 className="font-inter font-bold text-xl mb-4 text-deep-moss">Instructions</h3>
          <ul className="list-disc list-inside font-inter font-medium text-deep-moss mb-6">
            <li>You have 30 minutes to complete the exam</li>
            <li>There are {mockQuestions.length} multiple choice questions</li>
            <li>Each question has only one correct answer</li>
            <li>You can navigate between questions</li>
          </ul>
          <button 
            onClick={handleStartExam}
            className="w-full bg-burnt-orange text-enamel py-3 rounded-lg font-inter font-semibold hover:bg-deep-moss transition"
          >
            Start Exam
          </button>
        </div>
      </div>
    );
  }

  const currentQ = mockQuestions[currentQuestion];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-enamel p-6 rounded-lg shadow-lg">
        {/* Timer */}
        <div className="text-right mb-4 font-inter font-bold text-deep-moss">
          Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>

        {/* Question */}
        <div className="mb-6">
          <h3 className="font-inter font-bold text-xl mb-4 text-deep-moss">
            Question {currentQuestion + 1} of {mockQuestions.length}
          </h3>
          <p className="font-inter font-medium text-deep-moss mb-4">
            {currentQ.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(currentQ.id, option)}
              className={`w-full p-3 text-left rounded-lg font-inter font-medium transition
                ${answers[currentQ.id] === option 
                  ? 'bg-burnt-orange text-enamel' 
                  : 'bg-white text-deep-moss hover:bg-burnt-orange/10'}`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Question Overview */}
        <div className="mb-6 p-4 bg-white rounded-lg">
          <h4 className="font-inter font-bold text-deep-moss mb-2">Question Overview</h4>
          <div className="flex flex-wrap gap-2">
            {mockQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-full font-inter font-medium
                  ${answers[mockQuestions[index].id]
                    ? 'bg-burnt-orange text-enamel'
                    : 'bg-deep-moss/20 text-deep-moss'
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 0}
            className="px-6 py-2 bg-deep-moss text-enamel rounded-lg font-inter font-semibold hover:bg-burnt-orange transition disabled:opacity-50"
          >
            Previous
          </button>
          {currentQuestion === mockQuestions.length - 1 ? (
            <button
              onClick={handleSubmitExam}
              className="px-6 py-2 bg-burnt-orange text-enamel rounded-lg font-inter font-semibold hover:bg-deep-moss transition"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2 bg-deep-moss text-enamel rounded-lg font-inter font-semibold hover:bg-burnt-orange transition"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamTaking;