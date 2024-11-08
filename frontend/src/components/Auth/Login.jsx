import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate login success
    setTimeout(() => {
      console.log('Login successful:', formData);
      navigate('/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-md mx-auto bg-enamel p-8 rounded-lg shadow-lg">
        <h2 className="font-inter font-bold text-3xl text-deep-moss mb-6 text-center">
          Welcome Back
        </h2>
        <p className="font-inter font-medium text-burnt-orange mb-8 text-center">
          Sign in to your ExamPortal account
        </p>

        {errors.submit && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="font-inter font-medium text-deep-moss block mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white border ${
                errors.email ? 'border-red-500' : 'border-deep-moss/20'
              } focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition font-inter`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="font-inter font-medium text-deep-moss block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-white border ${
                errors.password ? 'border-red-500' : 'border-deep-moss/20'
              } focus:border-burnt-orange focus:ring-2 focus:ring-burnt-orange/20 outline-none transition font-inter`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-burnt-orange text-enamel py-3 rounded-lg font-inter font-semibold hover:bg-deep-moss transition ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="font-inter font-medium text-deep-moss mt-6 text-center">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-burnt-orange hover:text-deep-moss transition">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;