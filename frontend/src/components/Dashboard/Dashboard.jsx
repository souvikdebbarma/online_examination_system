const Dashboard = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-20">
        <h1 className="font-inter font-black text-5xl mb-6 text-deep-moss">
          Dashboard
        </h1>
        <p className="font-inter font-medium text-xl text-burnt-orange mb-8">
          Welcome to your dashboard. Here you can manage your exams and view your progress.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-enamel p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="font-inter font-bold text-xl mb-4 text-deep-moss">Upcoming Exams</h3>
          <p className="font-inter font-medium text-burnt-orange">
            View and manage your upcoming exams.
          </p>
        </div>
        <div className="bg-enamel p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="font-inter font-bold text-xl mb-4 text-deep-moss">Past Exams</h3>
          <p className="font-inter font-medium text-burnt-orange">
            Review your past exams and results.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-enamel p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="font-inter font-bold text-xl mb-4 text-deep-moss">Performance Analytics</h3>
          <p className="font-inter font-medium text-burnt-orange">
            Analyze your performance with detailed analytics.
          </p>
        </div>
        <div className="bg-enamel p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="font-inter font-bold text-xl mb-4 text-deep-moss">Account Settings</h3>
          <p className="font-inter font-medium text-burnt-orange">
            Manage your account settings and preferences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;