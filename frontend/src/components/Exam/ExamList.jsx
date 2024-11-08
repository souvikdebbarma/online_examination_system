import { useNavigate } from 'react-router-dom';

const exams = [
  { 
    id: 1, 
    name: 'React Fundamentals', 
    date: '2024-04-01',
    duration: '30 minutes',
    questions: 10,
    subject: 'Web Development',
    status: 'upcoming'
  },
  { 
    id: 2, 
    name: 'JavaScript Basics', 
    date: '2024-04-15',
    duration: '45 minutes',
    questions: 15,
    subject: 'Programming',
    status: 'upcoming'
  },
  { 
    id: 3, 
    name: 'Database Design', 
    date: '2024-04-20',
    duration: '60 minutes',
    questions: 20,
    subject: 'Database',
    status: 'upcoming'
  },
];

const ExamList = () => {
  const navigate = useNavigate();

  const handleStartExam = (examId) => {
    navigate(`/exam/${examId}`);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-inter font-bold text-3xl text-deep-moss">
          Available Exams
        </h2>
        <div className="flex gap-4">
          <select className="px-4 py-2 rounded-lg border border-deep-moss/20 font-inter">
            <option value="">All Subjects</option>
            <option value="web">Web Development</option>
            <option value="programming">Programming</option>
            <option value="database">Database</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-deep-moss/20 font-inter">
            <option value="">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {exams.map((exam) => (
          <div 
            key={exam.id} 
            className="bg-enamel p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-inter font-bold text-xl text-deep-moss">
                  {exam.name}
                </h3>
                <p className="font-inter text-sm text-burnt-orange">
                  {exam.subject}
                </p>
              </div>
              <span className="px-3 py-1 bg-deep-moss/10 text-deep-moss rounded-full text-sm font-medium">
                {exam.status}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="font-inter text-sm text-burnt-orange">Date</p>
                <p className="font-inter font-medium text-deep-moss">
                  {new Date(exam.date).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="font-inter text-sm text-burnt-orange">Duration</p>
                <p className="font-inter font-medium text-deep-moss">{exam.duration}</p>
              </div>
              <div>
                <p className="font-inter text-sm text-burnt-orange">Questions</p>
                <p className="font-inter font-medium text-deep-moss">{exam.questions}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button 
                onClick={() => handleStartExam(exam.id)}
                className="px-6 py-2 bg-burnt-orange text-enamel rounded-lg font-inter font-semibold hover:bg-deep-moss transition"
              >
                Start Exam
              </button>
              <button className="px-4 py-2 text-deep-moss font-inter font-medium hover:text-burnt-orange transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {exams.length === 0 && (
        <div className="text-center py-12">
          <p className="font-inter text-xl text-deep-moss">
            No exams available at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default ExamList;