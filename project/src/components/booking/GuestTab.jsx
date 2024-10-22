import React, { useState } from "react";

const GuestTab = () => {
  const [guests, setGuests] = useState([]);

  return (
    <div >
      <div>
        {/* Tabs */}
        <div className="p-5">
          
          {/* Add Guest Button */}
          <div className="flex justify-end ">
            <button className="bg-gray-300 text-black px-4 py-2 border-black rounded-lg hover:bg-gray-400">
              + Add Guest
            </button>
          </div>

          {/* Basic Details */}
          <h3 className="text-lg font-medium mb-4">Basic Details</h3>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="date"
              className="border rounded-lg p-2 w-full col-span-1"
            />
          </div>

          {/* Identity Details */}
          <h3 className="text-lg font-medium mb-4">Identity Details</h3>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <input
              type="text"
              placeholder="ID Number"
              className="border rounded-lg p-2 w-full"
            />
            <select className="border rounded-lg p-2 w-full">
              <option>Select ID Type (passport, driving, etc.)</option>
              <option>Passport</option>
              <option>Driving License</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              placeholder="Issuing Country"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="date"
              className="border rounded-lg p-2 w-full col-span-1"
            />
          </div>

          {/* ID and Live Images */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border rounded-lg p-6 text-center">
              <p className="text-gray-500 mb-4">ID Image</p>
              <button className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400">
                Upload Image
              </button>
            </div>
            <div className="border rounded-lg p-6 text-center">
              <p className="text-gray-500 mb-4">Live Image</p>
              <button className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400">
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
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">ID No.</th>
                    <th className="p-4 text-left">ID Type</th>
                    <th className="p-4 text-left">Primary Guest</th>
                    <th className="p-4 text-left">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {guests.length === 0 ? (
                    <tr>
                      <td
                        colSpan="5"
                        className="text-center p-4 text-gray-500"
                      >
                        No data to show
                      </td>
                    </tr>
                  ) : (
                    guests.map((guest, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-4">{guest.name}</td>
                        <td className="p-4">{guest.idNo}</td>
                        <td className="p-4">{guest.idType}</td>
                        <td className="p-4">
                          {guest.primary ? "Yes" : "No"}
                        </td>
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
    </div>
  );
};

export default GuestTab;
