import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import DarkBackground from '../Assets/darkbackground.jpg'
import Lightbackground from "../Assets/avatar2.jpg"

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Using placeholder images for demonstration
  const lightBackground = Lightbackground;
  const darkBackground = DarkBackground;

  const containerStyle = {
    backgroundImage: `url(${isDark ? darkBackground : lightBackground})`,
  };

  return (
    <div className="min-h-screen w-full relative bg-cover bg-center transition-all duration-500" style={containerStyle}>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDark ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800'
          } hover:scale-110`}
        >
          {isDark ? (
            <Sun className="h-6 w-6" />
          ) : (
            <Moon className="h-6 w-6" />
          )}
        </button>
      </div>
      
      <div className="flex items-center justify-center min-h-screen">
        <div className={`p-6 rounded-lg ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } transition-all duration-300`}>
          <h1 className="text-2xl font-bold">
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </h1>
          <p className="mt-2">
            Click the {isDark ? 'sun' : 'moon'} icon to toggle theme
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;