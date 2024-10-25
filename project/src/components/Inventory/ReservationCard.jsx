import React, { useState } from 'react';

const ReservationCard = ({ handleClose }) => {
  const [isOptionsDropdownOpen, setIsOptionsDropdownOpen] = useState(false);
  const [isPrintDropdownOpen, setIsPrintDropdownOpen] = useState(false);

  const toggleOptionsDropdown = () => {
    setIsOptionsDropdownOpen(!isOptionsDropdownOpen);
  };

  const togglePrintDropdown = () => {
    setIsPrintDropdownOpen(!isPrintDropdownOpen);
  };

  return (
    <section className="relative max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:bg-[#0B1739]">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center">
          <button
            className="bg-gray-300 dark:bg-black mr-2 text-white border-solid border-2 border-light-blue-500 px-2 py-1 rounded hover:bg-white hover:text-black"
            onClick={handleClose}
            aria-label="Close"
          >
            X
          </button>
          <h2 className="text-lg font-bold">Customer Name</h2>
        </div>
        <div className="mt-2">
          <button
            className="bg-gray-200  dark:bg-black text-black px-4 py-1 rounded hover:bg-gray-300"
            aria-label="Edit Reservation"
          >
            Edit Reservation
          </button>

          {/* More Options Dropdown */}
          <div className="inline-block relative ml-4">
            <button
              className="bg-gray-200 px-4 dark:bg-black py-1 rounded hover:bg-gray-300 flex items-center"
              aria-label="More Options"
              onClick={toggleOptionsDropdown}
            >
              <span>More Options</span>
              {/* Down arrow */}
              <span className="ml-2">▼</span>
            </button>

            {isOptionsDropdownOpen && (
              <div className="absolute dark:bg-black dark:text-white right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1">
                  <button
                    className="w-full text-left  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Check In"
                  >
                    Check-In
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Add Payment"
                  >
                    Add Payment (Folio)
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Send Email"
                  >
                    Send Email
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Room Move/Amend Stay"
                  >
                    Room Move/Amend Stay
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Cancel Reservation"
                  >
                    Cancel Reservation
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="No Show"
                  >
                    No Show
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Void Reservation"
                  >
                    Void Reservation
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Print/Send Dropdown */}
          <div className="inline-block relative ml-4">
            <button
              className="bg-gray-200 dark:bg-black px-4 py-1 rounded hover:bg-gray-300 flex items-center"
              aria-label="Print or Send Reservation"
              onClick={togglePrintDropdown}
            >
              <span>Print/Send</span>
              {/* Down arrow */}
              <span className="ml-2">▼</span>
            </button>

            {isPrintDropdownOpen && (
              <div className="absolute right-0 dark:bg-black dark:text-white mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1">
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Print Reservation"
                  >
                    Print Receipt
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Send by Email"
                  >
                    Print GRC
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Send by SMS"
                  >
                    Print Invoice
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reservation Details */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold">Reservation Number</p>
            <p>Rfb 01-1</p>
          </div>
          <div>
            <p className="font-semibold">Check In Date</p>
            <p>20-01-24; 11:15:12 AM</p>
          </div>
          <div>
            <p className="font-semibold">Check Out Date</p>
            <p>22-01-24; 12:00:00 PM</p>
          </div>
          <div>
            <p className="font-semibold">Booking Date</p>
            <p>12-01-24; 12:00:00 PM</p>
          </div>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-4 border-t">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold">Room Type</p>
            <p>Single Room</p>
          </div>
          <div>
            <p className="font-semibold">Room Number</p>
            <p>102</p>
          </div>
          <div>
            <p className="font-semibold">Rate Plan</p>
            <p>MAP</p>
          </div>
          <div>
            <p className="font-semibold">PAX</p>
            <div className="flex items-center">
              <span className="mr-2">1</span>
              <span className="mr-2" role="img" aria-label="Adults">
                👁️
              </span>
              <span>0</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Avg. Daily Rate</p>
            <p>Rs. 1200</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationCard;
