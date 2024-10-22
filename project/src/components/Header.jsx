// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import ThemeBtn from './ThemeBtn';

const Header = () => {
  const notificationCount = 3; // Set the number of notifications
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle property selection
  const handlePropertyChange = (event) => {
    const selectedProperty = event.target.value;
    navigate(`/property/${selectedProperty}`); // Navigate to the selected property
  };

  return (
    <header className="flex w-full justify-end  items-center  px-4 py-4 md:px-8 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0B1739]">
      
      <div className="grid grid-cols-[3fr_2fr_0.1fr_0.1fr_0.2fr] md:grid-cols-[5fr_1fr_0.2fr_0.5fr_0.7fr]  items-center space-x-3 md:space-x-4 lg:space-x-8">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 w-full  rounded border border-gray-300 dark:border-gray-700 dark:bg-[#080F26] dark:text-white"
        />
        
        {/* Select Property Dropdown */}
        <select
          onChange={handlePropertyChange}
          className="md:px-4 py-2 rounded border w-full text-xs  md:text-sm border-gray-300 dark:border-gray-700 dark:bg-[#080F26] dark:text-white "
        >
          <option value="">Select Property</option>
          <option value="1">Property 1</option>
          <option value="2">Property 2</option>
          <option value="3">Property 3</option>
        </select>

        {/* Notification Bell */}
        <div className="relative ">
          <button className="p-2 text-[#080F26] dark:text-white">
            <FontAwesomeIcon icon={faBell} />
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>
        </div>

        <ThemeBtn />

        {/* Login Link */}
        <Link to="/login" className="text-[#080F26] dark:text-white hover:underline w-full">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
