import React, { useState } from 'react';

const AddDiscountModal = ({ onClose, onSubmit }) => {
  const [discountType, setDiscountType] = useState('');
  const [discountAmount, setDiscountAmount] = useState('');

  const handleDiscountSubmit = () => {
    if (discountType && discountAmount) {
      onSubmit({ discountType, discountAmount });
      onClose();
    } else {
      alert("Please select a discount and enter an amount.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <h2 className="text-xl font-semibold mb-4">Apply Discount</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Discount</label>
          <select
            value={discountType}
            onChange={(e) => setDiscountType(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select a discount</option>
            <option value="firstOrder">Add Discount on First Order</option>
            <option value="coupon">Add Coupon</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Discount Amount</label>
          <input
            type="number"
            value={discountAmount}
            onChange={(e) => setDiscountAmount(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleDiscountSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDiscountModal;
