import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ProgressBar = ({ current, total }) => {
  // Calculate progress percentage
  const progressPercentage = (current / total) * 100;

  // For animation and 3D effect
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Reset hover state on mount/unmount
    return () => setHovered(false);
  }, []);

  return (
    <div
      className="w-full bg-gray-300 rounded-full h-8 mb-6 relative shadow-lg overflow-hidden transform perspective-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`bg-gradient-to-r from-green-400 via-green-500 to-green-600 h-full rounded-full transition-all duration-700 ease-in-out shadow-xl transform-gpu 
          ${hovered ? 'scale-105' : 'scale-100'}`}
        style={{ width: `${progressPercentage}%` }}
      >
        <span
          className="text-white text-sm sm:text-base font-semibold absolute left-1/2 transform -translate-x-1/2"
          style={{ textShadow: '0 0 5px rgba(0,0,0,0.3)' }}
        >
          {`${current} / ${total}`}
        </span>
      </div>
      <div className="absolute inset-0 flex justify-center items-center text-gray-700 text-xs sm:text-sm font-semibold opacity-70">
        {/* Progress description on mobile */}
        <span>{`Question ${current} of ${total}`}</span>
      </div>

      {/* Adding a glowing effect and 3D shadow on hover */}
      <div
        className={`absolute top-0 left-0 w-full h-full rounded-full transition-all duration-500 ease-out 
          ${hovered ? 'shadow-[0_0_20px_rgba(0,255,0,0.6)]' : ''}`}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ProgressBar;
