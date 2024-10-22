// src/components/ThemeToggle.js
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved user preference in localStorage
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode === 'dark' : false; // Default to light mode
  });

  useEffect(() => {
    // Set the theme class on the body based on user preference
    const theme = isDarkMode ? 'dark' : 'light';
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', theme); // Save user preference
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
