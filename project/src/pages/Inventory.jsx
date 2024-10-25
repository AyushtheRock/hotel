import React, { useState } from 'react';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('Folio Operations');

  const tabs = ['Folio Operations', 'Booking Details', 'Guest Details', 'Room Charges'];

  const charges = [
    { day: "2024-01-20 Monday", refNo: "190", particulars: "UPI", description: "Qty 2", user: "Ayra", amount: 1200.00 },
    { day: "2024-01-21 Tuesday", refNo: "242", particulars: "Room Charges", description: "", user: "Ayra", amount: 1200.00 },
    { day: "2024-01-21 Tuesday", refNo: "122", particulars: "Laundry", description: "Qty 2", user: "Ayra", amount: 400.00 },
  ];

  return (
    <div className="bg-white text-black dark:text-white dark:bg-[#0B1739] rounded-lg shadow-md p-4">
      <div className="p-4 border rounded-lg shadow-md dark:bg-[#0B1739] bg-white dark:text-white  mx-auto ">
      <div className="flex items-center justify-between  px-4 gap-10">
        <div className='flex items-center gap-4'>
        <button className="text-gray-500 dark:text-white hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-lg font-semibold text-black dark:text-white">Ms. Erza Scarlet</div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center text-gray-600">
            <span className="mr-1">1</span>
            <svg className="w-4 h-4 text-gray-500 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
            </svg>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="mr-1">0</span>
            <svg className="w-4 h-4 text-gray-500 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
            </svg>
          </div>
        </div>
        </div>
      <div className='flex-1'>
      <div className="flex justify-between mt-4  items-center">
        <div className="text-sm text-gray-600">
          <div className="font-medium">Arrival</div>
          <div>2024-01-20 11:15 AM</div>
        </div>
        <div className="text-sm text-gray-600">
          <div className="font-medium">Departure</div>
          <div>2024-01-22 12:00 PM</div>
        </div>
        <div className="text-sm text-gray-600">
          <div className="font-medium">Nights</div>
          <div>2</div>
        </div>
        <div className="text-sm text-gray-600">
          <div className="font-medium">Room / Room Type</div>
          <div>102 / Double Room</div>
        </div>
        <div className="text-sm text-gray-600">
          <div className="font-medium">Res. No</div>
          <div>107</div>
        </div>
        <div>
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">Arrived</span>
        </div>
      </div>
      </div>
      </div>
    </div>
      <div className="flex border-b mt-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 dark:text-white'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex mb-4">
        <div className="w-1/4 pr-4 border-r">
          <h3 className="text-sm text-gray-500 dark:text-white mb-2">Room / Folio</h3>
          <div className="flex items-center justify-between mb-2">
            <span>Double Room(04)</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>102</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between">
            <span>Erza Scarlet</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        <div className="w-3/4 pl-4">
          <div className="flex space-x-2 mb-4">
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded">Add Payment</button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded">Add Charges</button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded">Apply Discount</button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded">Print Invoice</button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded flex items-center">
              More <MoreHorizontal className="w-4 h-4 ml-1" />
            </button>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-8"></th>
                <th className="text-left p-2">Day</th>
                <th className="text-left p-2">Ref No.</th>
                <th className="text-left p-2">Particulars</th>
                <th className="text-left p-2">Description</th>
                <th className="text-left p-2">User</th>
                <th className="text-right p-2">Amount</th>
                <th className="w-8"></th>
              </tr>
            </thead>
            <tbody>
              {charges.map((charge, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2"><input type="checkbox" /></td>
                  <td className="p-2">{charge.day}</td>
                  <td className="p-2">{charge.refNo}</td>
                  <td className="p-2">{charge.particulars}</td>
                  <td className="p-2">{charge.description}</td>
                  <td className="p-2">{charge.user}</td>
                  <td className="p-2 text-right">{charge.amount.toFixed(2)}</td>
                  <td className="p-2"><MoreHorizontal className="w-4 h-4" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
