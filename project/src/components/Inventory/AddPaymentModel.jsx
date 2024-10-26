import React, { useState } from 'react';

const AddPaymentModal = ({handleClose} ) => {
  const [paymentMode, setPaymentMode] = useState(''); // For payment mode selection
  const [amount, setAmount] = useState(''); // For payment amount

  // Handle form submission
  
  



  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#0B1739] p-6 rounded-lg shadow-lg">
        <div className='flex justify-between'>
          
           <h2 className="text-lg font-semibold mb-4">Add Payment</h2>
        <button onClick={handleClose} className='bg-gray-200 dark:bg-black  border-solid border-1 h-[30px] w-[30px] text-center border-light-blue-500 px-1 rounded hover:bg-gray-300 hover:text-black'>x</button > 
        
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white mb-2">Payment Mode</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
          >
            <option value="">Select Mode</option>
            <option value="Card">Card</option>
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white mb-2">Amount</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={handleClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">
            Cancel
          </button>
          <button onClick={handleClose} className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentModal;