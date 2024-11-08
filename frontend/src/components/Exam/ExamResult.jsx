import { useLocation, useNavigate } from 'react-router-dom';

const ExamResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-md mx-auto bg-enamel p-8 rounded-lg shadow-lg text-center">
        <h2 className="font-inter font-bold text-3xl text-deep-moss mb-6">
          Exam Complete!
        </h2>
        <div className="text-6xl font-bold text-burnt-orange mb-4">
          {percentage}%
        </div>
        <p className="font-inter font-medium text-deep-moss mb-8">
          You scored {score} out of {totalQuestions} questions correctly.
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full bg-burnt-orange text-enamel py-3 rounded-lg font-inter font-semibold hover:bg-deep-moss transition"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ExamResult; 