import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const OverviewCard = ({ arrival, departure, guests }) => {
  // Data for Arrival Chart
  const arrivalData = {
    labels: ['Arrival', 'Remaining'],
    datasets: [
      {
        data: [arrival, 100 - arrival], // Assuming total is 100 for demo purposes
        backgroundColor: ['#A07D4F', '#F4F1E6'],
        borderWidth: 0,
      },
    ],
  };

  // Data for Departure Chart
  const departureData = {
    labels: ['Departure', 'Remaining'],
    datasets: [
      {
        data: [departure, 100 - departure], // Assuming total is 100 for demo purposes
        backgroundColor: ['#A07D4F', '#F4F1E6'],
        borderWidth: 0,
      },
    ],
  };

  // Data for Guests Chart
  const guestsData = {
    labels: ['Guests in House', 'Remaining'],
    datasets: [
      {
        data: [guests, 100 - guests], // Assuming total is 100 for demo purposes
        backgroundColor: ['#A07D4F', '#F4F1E6'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%', // Donut hole size
    plugins: {
      legend: {
        display: false, // Hides default legend
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Arrival Donut Chart */}
        <div className="bg-gray-100 p-4 rounded shadow flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Arrival</h3>
          {/* Line under the heading */}
          <div className="border-b border-gray-300 mb-2"></div>
          <div className="flex items-center">
            <div className="relative" style={{ width: '100px', height: '100px' }}>
              <Doughnut data={arrivalData} options={options} />
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                {arrival}
              </span>
            </div>
            {/* Legend for Arrival */}
            <div className="ml-4 flex flex-col">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#A07D4F' }}></span>
                <span className="ml-2">Arrival</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#F4F1E6' }}></span>
                <span className="ml-2">Remaining</span>
              </div>
            </div>
          </div>
        </div>

        {/* Departure Donut Chart */}
        <div className="bg-gray-100 p-4 rounded shadow flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Departure</h3>
          {/* Line under the heading */}
          <div className="border-b border-gray-300 mb-2"></div>
          <div className="flex items-center">
            <div className="relative" style={{ width: '100px', height: '100px' }}>
              <Doughnut data={departureData} options={options} />
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                {departure}
              </span>
            </div>
            {/* Legend for Departure */}
            <div className="ml-4 flex flex-col">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#A07D4F' }}></span>
                <span className="ml-2">Departure</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#F4F1E6' }}></span>
                <span className="ml-2">Remaining</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guests Donut Chart */}
        <div className="bg-gray-100 p-4 rounded shadow flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Guests in House</h3>
          {/* Line under the heading */}
          <div className="border-b border-gray-300 mb-2"></div>
          <div className="flex items-center">
            <div className="relative" style={{ width: '100px', height: '100px' }}>
              <Doughnut data={guestsData} options={options} />
              <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                {guests}
              </span>
            </div>
            {/* Legend for Guests */}
            <div className="ml-4 flex flex-col">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#A07D4F' }}></span>
                <span className="ml-2">Guests</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#F4F1E6' }}></span>
                <span className="ml-2">Remaining</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
