import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="font-inter font-black text-5xl mb-6 text-deep-moss">
          Welcome to ExamPortal
        </h1>
        <p className="font-inter font-medium text-xl text-burnt-orange mb-8">
          Your trusted platform for online examinations
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => navigate('/exam/:examId')}
            className="font-inter font-semibold bg-burnt-orange text-enamel px-8 py-3 rounded-lg hover:bg-deep-moss transition"
          >
            Take Exam
          </button>
          <button className="font-inter font-semibold bg-deep-moss text-enamel px-8 py-3 rounded-lg hover:bg-burnt-orange transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-enamel p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="font-inter font-bold text-xl mb-4 text-deep-moss">Secure Exams</h3>
          <p className="font-inter font-medium text-burnt-orange">
            Take exams in a secure environment with anti-cheating measures.
          </p>
        </div>
        <div className="bg-enamel p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="font-inter font-bold text-xl mb-4 text-deep-moss">Instant Results</h3>
          <p className="font-inter font-medium text-burnt-orange">
            Get your results immediately after completing the exam.
          </p>
        </div>
        <div className="bg-enamel p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="font-inter font-bold text-xl mb-4 text-deep-moss">Detailed Analytics</h3>
          <p className="font-inter font-medium text-burnt-orange">
            Track your progress with comprehensive performance analytics.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="font-inter font-bold text-3xl text-deep-moss text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-enamel p-8 rounded-lg shadow-lg">
            <p className="font-inter text-burnt-orange italic mb-4">
              "ExamPortal has revolutionized how we conduct our departmental assessments. 
              The platform is intuitive and the results analysis is exceptional."
            </p>
            <div className="flex items-center">
              <div className="ml-2">
                <p className="font-inter font-bold text-deep-moss">Dr. Sarah Johnson</p>
                <p className="font-inter text-sm text-burnt-orange">Professor, Computer Science</p>
              </div>
            </div>
          </div>

          <div className="bg-enamel p-8 rounded-lg shadow-lg">
            <p className="font-inter text-burnt-orange italic mb-4">
              "As a student, I love how easy it is to take exams on ExamPortal. 
              The instant feedback helps me understand my progress immediately."
            </p>
            <div className="flex items-center">
              <div className="ml-2">
                <p className="font-inter font-bold text-deep-moss">Michael Chen</p>
                <p className="font-inter text-sm text-burnt-orange">Engineering Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home; 