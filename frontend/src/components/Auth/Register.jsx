import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate registration success
    setTimeout(() => {
      console.log('Registration successful:', formData);
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-md mx-auto bg-enamel p-8 rounded-lg shadow-lg">
        <h2 className="font-inter font-bold text-3xl text-deep-moss mb-6 text-center">
          Create Account
        </h2>
        <p className="font-inter font-medium text-burnt-orange mb-8 text-center">
          Join ExamPortal to start your journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="font-inter font-medium text-deep-moss block mb-2">
                First Name
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                id="firstName"
                className="w-full px-4 py-3 rounded-lg bg-white border border-deep-moss/20 focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition font-inter"
                placeholder="First name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="font-inter font-medium text-deep-moss block mb-2">
                Last Name
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                id="lastName"
                className="w-full px-4 py-3 rounded-lg bg-white border border-deep-moss/20 focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition font-inter"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="font-inter font-medium text-deep-moss block mb-2">
              Email Address
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg bg-white border border-deep-moss/20 focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition font-inter"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="font-inter font-medium text-deep-moss block mb-2">
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg bg-white border border-deep-moss/20 focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition font-inter"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="font-inter font-medium text-deep-moss block mb-2">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-3 rounded-lg bg-white border border-deep-moss/20 focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition font-inter"
              placeholder="Confirm your password"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              type="checkbox"
              className="rounded text-burnt-orange focus:ring-burnt-orange"
            />
            <span className="font-inter font-medium text-deep-moss">
              I agree to the{' '}
              <Link to="/terms" className="text-burnt-orange hover:text-deep-moss transition">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-burnt-orange hover:text-deep-moss transition">
                Privacy Policy
              </Link>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-burnt-orange text-enamel py-3 rounded-lg font-inter font-semibold hover:bg-deep-moss transition"
          >
            Create Account
          </button>
        </form>

        <p className="font-inter font-medium text-deep-moss mt-6 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-burnt-orange hover:text-deep-moss transition">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;