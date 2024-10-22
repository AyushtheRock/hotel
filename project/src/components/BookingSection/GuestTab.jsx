import React, { useState } from "react";

const GuestTab = () => {
  const [guests, setGuests] = useState([]); 

  return (
    <div className="p-4 md:p-6">
      <div>
        {/* Add Guest Button */}
        <div className="flex justify-end mb-4">
          <button className="bg-gray-300 text-black px-4 py-2 border-black rounded-lg hover:bg-gray-400 dark:bg-[#fff]">
            + Add Guest
          </button>
        </div>

        {/* Basic Details */}
        <h3 className="text-lg font-medium mb-4">Basic Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <input
            type="text"
            placeholder="Name"
            className="border rounded-lg p-2 w-full dark:bg-[#fff] text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-2 w-full dark:bg-[#fff] text-black"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border rounded-lg p-2 w-full dark:bg-[#fff] text-black"
          />
          <input
            type="date"
            className="border rounded-lg p-2 w-full dark:bg-[#fff] text-black"
          />
        </div>

        {/* Identity Details */}
        <h3 className="text-lg font-medium mb-4">Identity Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <input
            type="text"
            placeholder="ID Number"
            className="border rounded-lg p-2 w-full dark:bg-[#fff] text-black"
          />
          <select className="border rounded-lg p-2 w-full dark:bg-[#fff] text-black">
            <option>Select ID Type (passport, driving, etc.)</option>
            <option>Passport</option>
            <option>Driving License</option>
            <option>Other</option>
          </select>
          <input
            type="text"
            placeholder="Issuing Country"
            className="border rounded-lg p-2 w-full dark:bg-[#fff] text-black"
          />
          <input
            type="date"
            className="border rounded-lg p-2 w-full dark:bg-[#fff] text-black"
          />
        </div>

        {/* ID and Live Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="border rounded-lg p-6 text-center">
            <p className="text-gray-500 mb-4 dark:text-white">ID Image</p>
            <button className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 dark:bg-[#fff] text-black">
              Upload Image
            </button>
          </div>
          <div className="border rounded-lg p-6 text-center">
            <p className="text-gray-500 mb-4 dark:text-white">Live Image</p>
            <button className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 dark:bg-[#fff] text-black">
              Upload Image
            </button>
          </div>
        </div>

        {/* Guests List Table */}
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Guests</h3>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left dark:text-black">Name</th>
                  <th className="p-4 text-left dark:text-black">ID No.</th>
                  <th className="p-4 text-left dark:text-black">ID Type</th>
                  <th className="p-4 text-left dark:text-black">Primary Guest</th>
                  <th className="p-4 text-left dark:text-black">Options</th>
                </tr>
              </thead>
              <tbody>
                {guests.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center p-4 text-gray-500">
                      No data to show
                    </td>
                  </tr>
                ) : (
                  guests.map((guest, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-4">{guest.name}</td>
                      <td className="p-4">{guest.idNo}</td>
                      <td className="p-4">{guest.idType}</td>
                      <td className="p-4">{guest.primary ? "Yes" : "No"}</td>
                      <td className="p-4">
                        <button className="text-red-500">Remove</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestTab;
