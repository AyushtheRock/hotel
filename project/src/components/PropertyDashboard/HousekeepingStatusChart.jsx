import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
} from 'chart.js';

// Import the datalabels plugin
import 'chartjs-plugin-datalabels'; // Add this line to use data labels in the chart

// Register Chart.js components
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale, Title);

const HousekeepingStatusChart = () => {
  // Data for the bar chart
  const housekeepingData = {
    labels: ['Clean', 'HA Assign', 'Dirty', 'Blocked'],
    datasets: [
      {
        label: 'Status',
        data: [10, 5, 3, 2], // Example values for each category
        backgroundColor: ['#A07D4F', '#FFA500', '#FFC0CB', '#8A2BE2'], // Brown, Orange, Pink, Violet
        borderWidth: 1, // Optional: Border width for bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides default legend
      },
      // Adding data labels on the bars
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: 'black',
        font: {
          weight: 'bold',
        },
        formatter: (value) => value, // Show value
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start y-axis at zero
        grid: {
          display: false, // Disable grid lines
        },
      },
      x: {
        grid: {
          display: false, // Disable grid lines for x-axis
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-xl">
      <h3 className="text-lg font-semibold mb-2">Housekeeping Status</h3>
      <hr className="my-2 border-gray-300" /> {/* Horizontal line */}
      <div>
        <Bar data={housekeepingData} options={options} />
      </div>
    </div>
  );
};

export default HousekeepingStatusChart;
