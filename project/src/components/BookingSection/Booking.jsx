import React from "react";

const Booking = () => {
  return (
    <div className="p-4 md:p-6"> 
      {/* Booking Info */}
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        {/* Left column with booking details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-500">Status</p>
            <p>New</p>
          </div>
          <div>
            <p className="text-gray-500">Source / OTA</p>
            <p>RofabsWeb</p>
          </div>
          <div>
            <p className="text-gray-500">Reservation ID</p>
            <p>Rf002481</p>
          </div>
          <div>
            <p className="text-gray-500">Booking ID</p>
            <p>75b8d-ae3e</p>
          </div>
          <div>
            <p className="text-gray-500">Booked On</p>
            <p>Jan 11, 2024</p>
          </div>
        </div>

        {/* Right column with buttons */}
        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <button className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 dark:bg-white dark:text-black">
            Check In
          </button>
        </div>
      </div>

      {/* Check-In Details */}
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Check-In Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500">Check-In Date</p>
            <p>Jan 20, 2024</p>
          </div>
          <div>
            <p className="text-gray-500">Checkout Date</p>
            <p>Jan 22, 2024</p>
          </div>
          <div>
            <p className="text-gray-500">Arrival Time</p>
            <p>NA</p>
          </div>
          <div>
            <p className="text-gray-500">Nights</p>
            <p>2</p>
          </div>
          <div>
            <p className="text-gray-500">Rooms</p>
            <p>1</p>
          </div>
          <div>
            <p className="text-gray-500">Occupancy</p>
            <p>A: 2 C: 0 I: 0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
