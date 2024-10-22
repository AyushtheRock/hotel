import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const RoomStatusChart = () => {
  // Data for the doughnut chart
  const roomData = {
    labels: ['Vacant', 'Sold', 'Day Use', 'Complimentary', 'Blocked'],
    datasets: [
      {
        data: [20, 12, 5, 8, 3], // Example values for each category
        backgroundColor: ['#A07D4F', '#F4F1E6', '#F1C40F', '#2ECC71', '#E74C3C'], // Add colors for each category
        borderWidth: 0, // Removes border from chart slices
      },
    ],
  };

  const options = {
    cutout: '85%', // Adjusted to reduce thickness (increased cutout)
    plugins: {
      legend: {
        display: false, // Hides default legend
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow"> {/* Added card styling */}
      <h3 className="text-lg font-semibold mb-2">Room Status</h3>
      <hr className="my-2 border-gray-300" /> {/* Horizontal line */}
      <div className="flex items-center">
        <div className="mr-4">
          <Doughnut data={roomData} options={options} width={300} height={300} /> {/* Adjusted size */}
        </div>
        <div className="ml-4 space-y-2">
          <LegendItem color="#A07D4F" label="Vacant" value={20} />
          <LegendItem color="#F4F1E6" label="Sold" value={12} />
          <LegendItem color="#F1C40F" label="Day Use" value={5} />
          <LegendItem color="#2ECC71" label="Complimentary" value={8} />
          <LegendItem color="#E74C3C" label="Blocked" value={3} />
        </div>
      </div>
    </div>
  );
};

// Component for individual legend items
const LegendItem = ({ color, label, value }) => (
  <div className="flex items-center">
    <span
      className="w-4 h-4 rounded-full mr-2"
      style={{ backgroundColor: color }}
    ></span>
    <span className="text-sm">
      {label} ({value})
    </span>
  </div>
);

export default RoomStatusChart;
