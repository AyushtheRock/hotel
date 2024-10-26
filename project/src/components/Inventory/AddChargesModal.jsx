import React, { useState } from 'react';

const AddChargesModal = ({ handleChargesWindow,onClose, onSubmit }) => {
  const [chargeType, setChargeType] = useState('');
  const [amount, setAmount] = useState('');

  const chargeOptions = ["Food Charges", "Room Services", "Laundry", "Spa", "Mini Bar"]; // Example charge types

  const handleChargeSubmit = () => {
    if (chargeType && amount) {
      onSubmit({ chargeType, amount: parseFloat(amount) });
      onClose(); // Close the modal after submission
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-[#1a1a2e] p-6 rounded shadow-lg w-96">
        <div  className='flex justify-between'>
        <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">Add Charges</h2>
        <button onClick={handleChargesWindow} className='bg-gray-200 dark:bg-black  border-solid border-1 h-[30px] w-[30px] text-center border-light-blue-500 px-1 rounded hover:bg-white hover:text-black'>x</button > 
        
         </div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Select Charge Type</label>
        <select
          value={chargeType}
          onChange={(e) => setChargeType(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded dark:bg-[#0B1739] dark:text-white"
        >
          <option value="" disabled>Select Charge</option>
          {chargeOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <label className="block text-gray-700 dark:text-gray-300 mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded dark:bg-[#0B1739] dark:text-white"
          placeholder="Enter Amount"
        />

        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-200 px-3 py-1 rounded mr-2">Cancel</button>
          <button onClick={handleChargeSubmit} className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddChargesModal;
