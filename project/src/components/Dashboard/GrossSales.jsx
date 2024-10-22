import PropTypes from 'prop-types';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

// StatCard Component
const StatCard = ({ label, value, change }) => {
  // Check if the required props are missing and log the error
  if (!label || !value || !change) {
    console.error('StatCard props are missing:', { label, value, change });
    return null;
  }

  return (
    <div className="p-4 rounded-lg space-y-1 bg-gray-100 dark:bg-[#090E1A]"> {/* Added shadow for light mode */}
      <div className={`text-xs font-medium inline-block px-2 py-1 rounded ${
        label === 'Sales' ? 'bg-green-100 text-green-800 dark:bg-green-100 dark:text-green-800' :
        label === 'Bookings' ? 'bg-blue-100 text-blue-800 dark:bg-blue-100 dark:text-blue-800' :
        label === 'Avg Booking Value' ? 'bg-green-100 text-green-800 dark:bg-green-100 dark:text-green-800' :
        label === 'Refunds' ? 'bg-red-100 text-red-800 dark:bg-red-100 dark:text-red-800' :
        label === 'Discounts' ? 'bg-green-100 text-green-800 dark:bg-green-100 dark:text-green-800' :
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-100 dark:text-yellow-800'
      }`}>
        {label}
      </div>
      <p className="text-lg font-bold text-gray-800 dark:text-white">{value}</p> {/* Light: gray text, Dark: white text */}
      <div className={`flex items-center text-sm ${parseFloat(change) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {parseFloat(change) >= 0 ? <ArrowUpIcon size={16} /> : <ArrowDownIcon size={16} />}
        <span className="ml-1">{change}</span>
      </div>
    </div>
  );
};

// Define PropTypes for StatCard
StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
};

// GrossSales Component
const GrossSales = ({ data }) => (
  <div className="shadow rounded-lg p-6 md:col-span-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1323] text-gray-800 dark:text-white"> {/* Light: white background, dark mode as is */}
    <h2 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Gross Sales</h2> {/* Light: gray text, Dark: white text */}
    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
      <span>
        01 Jun - 13 Jun 2024 &nbsp;<strong>$0.00</strong>
        &nbsp;&nbsp;&nbsp;&nbsp;01 May - 13 May 2024 &nbsp;<strong>$0.00</strong>
      </span>
    </div>

    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-[#1C2A44] dark:text-white rounded-md">
          This Month
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-500 dark:bg-[#090E1A] dark:text-gray-400 rounded-md">
          vs Same period previous month
        </button>
      </div>
      <button className="p-2 bg-gray-100 text-purple-500 dark:bg-[#090E1A] rounded-md">
        {/* SVG Icon here */}
      </button>
    </div>

    <hr className="border-gray-300 dark:border-gray-500 my-4" /> {/* Light: light gray border, Dark: dark gray border */}

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  </div>
);

// Define PropTypes for GrossSales
GrossSales.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      change: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Data to be integrated
export const GrossSalesData = () => {
  const data = [
    { label: 'Sales', value: '₹20.4K', change: '+10.02%' },
    { label: 'Bookings', value: '144', change: '+10.02%' },
    { label: 'Avg Booking Value', value: '₹120.4K', change: '+10.02%' },
    { label: 'Refunds', value: '22', change: '+10.02%' },
    { label: 'Discounts', value: '₹2.4K', change: '+10.02%' },
    { label: 'Abandonment Checkouts', value: '24', change: '+10.02%' },
  ];

  return <GrossSales data={data} />;
};

export default GrossSalesData;
