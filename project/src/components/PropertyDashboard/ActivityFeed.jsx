import React from 'react';
import { FaSync } from 'react-icons/fa'; // Importing refresh icon

const ActivityFeed = () => {
  return (
    <div className="bg-white p-2 rounded shadow w-full mx-auto"> {/* Compact padding */}
      <div className="flex justify-between items-center mb-2"> {/* Flex container for heading and controls */}
        <h2 className="text-base font-semibold">Activity Feed</h2> {/* Heading */}
        
        <div className="flex items-center space-x-2"> {/* Flex container for dropdown and refresh */}
          <select className="border rounded p-1 text-sm">
            <option>All</option>
            {/* Add more options if needed */}
          </select>
          <FaSync className="text-blue-500 cursor-pointer" title="Refresh" /> {/* Refresh icon */}
        </div>
      </div>

      <hr className="my-2 border-gray-300" /> {/* Horizontal line separator */}

      <div className="space-y-2"> {/* Compact space between activities */}
        
        {/* First activity */}
        <div>
          <div className="flex justify-between items-center text-sm"> {/* Smaller text */}
            <span className="flex-grow flex items-center"> {/* Flexbox to align items */}
              <span>Package Applied to Booking</span>
              <span className="text-xs text-gray-600 ml-4">01 May - 13 May 2024</span> {/* Date with 2 letters gap */}
              <span className="text-xs text-gray-600 font-bold ml-2">$0.00</span> {/* Dollar amount in bold with 1 letter gap */}
            </span>

            {/* Adding gap before the button */}
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs ml-2"> {/* Button with gap */}
              Package Applied
            </button>
          </div>
          <div className="text-xs text-gray-500 font-bold"> {/* 29 hrs ago in bold */}
            29 hrs ago
          </div>
        </div>
        
        {/* Second activity */}
        <div>
          <div className="flex justify-between items-center text-sm">
            <span className="flex-grow flex items-center"> {/* Flexbox to align items */}
              <span>Package Applied to Booking</span>
              <span className="text-xs text-gray-600 ml-4">01 May - 13 May 2024</span> {/* Date with 2 letters gap */}
              <span className="text-xs text-gray-600 font-bold ml-2">$0.00</span> {/* Dollar amount in bold with 1 letter gap */}
            </span>

            {/* Adding gap before the button */}
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs ml-2"> {/* Button with gap */}
              Package Applied
            </button>
          </div>
          <div className="text-xs text-gray-500 font-bold"> {/* 29 hrs ago in bold */}
            29 hrs ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
