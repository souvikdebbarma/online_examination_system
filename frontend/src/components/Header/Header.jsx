import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Update state based on token presence
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    setIsAuthenticated(false); // Update authentication state
    navigate('/login'); // Redirect to login page
  };

  return (
    <header className="bg-enamel shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-inter font-extrabold text-deep-moss">
            ExamPortal
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/exams" className="font-inter font-medium text-deep-moss hover:text-burnt-orange transition">
              Exams
            </Link>
            <Link to="/dashboard" className="font-inter font-medium text-deep-moss hover:text-burnt-orange transition">
              Dashboard
            </Link>

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="font-inter font-semibold bg-burnt-orange text-enamel px-6 py-2 rounded-lg hover:bg-deep-moss transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="font-inter font-semibold bg-burnt-orange text-enamel px-6 py-2 rounded-lg hover:bg-deep-moss transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
