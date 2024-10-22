import React from "react";

const Booking = () => {
  return (
   
      <div >
        

        <div className="p-6">
          {/* Tabs */}
          

          {/* Booking Info */}
          
          <div className="flex justify-between">
            <div className="grid grid-cols-2 gap-9 ">
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
               {/* Cancel and Save buttons for Booking Details */}
          <div className="flex  mt-6">
            <button className="bg-gray-300 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400 h-1/5">
              Check in
            </button>
          </div>
          </div>

         

          {/* Check-In Details */}
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Check-In Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">Check In Date</p>
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
      </div>
  
  );
};

export default Booking;
