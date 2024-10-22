import React, { useEffect, useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';


const BookingCard = ({ guest, nights, checkIn, checkOut, bookingDate, roomType, total, paid }) => {
    const [showOptions, setShowOptions] = useState(false);
  
    // Function to handle closing the options menu
    const handleOptionClick = () => {
      // Logic to handle the option click goes here (e.g., Check In or Edit)
      setShowOptions(false); // Close the options menu
    };
  
  
    return (
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h3 className="font-semibold text-lg">{guest}</h3>
            <p className="text-sm text-gray-500">212 | NH23566-2/1</p>
          </div>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setShowOptions(!showOptions)}
            >
              <img src="/src/assets/og-goibibo.aba291ed.png" alt="goibibo" className="h-7 mr-5" />
              <span className="text-gray-400">⋮</span>
            </div>
            {showOptions && (
              <div className="absolute right-0 mt-1 bg-white border rounded shadow-lg z-10">
                <button
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                  onClick={handleOptionClick} // Close the menu on click
                >
                  Check In
                </button>
                <button
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                  onClick={handleOptionClick} // Close the menu on click
                >
                  Edit
                </button>
              </div> 
            )}
          </div>
        </div>
        
        {/* Check-in and Check-out Box */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Check In</span>
                <span className="text-sm">{checkIn}</span>
              </div>
              <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                {nights} Nights
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Check Out</span>
                <span className="text-sm">{checkOut}</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Booking Date */}
        <div className="flex items-center mb-2">
          <span className="text-gray-400 mr-2 text-sm">📅</span>
          <p className="text-sm text-gray-500">Booking Date</p>
          <p className="text-sm ml-2">{bookingDate}</p>
        </div>
  
        {/* Room Info */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-500">Room no | Type</p>
          <p className="text-sm text-purple-600">{roomType}</p>
        </div>
  
        {/* Total and Paid */}
        <div className="flex justify-between items-center text-sm">
          <div>
            <p>Total</p>
            <p>Paid</p>
            <p className="text-red-500">Balance</p>
          </div>
          <div className="text-right">
            <p>Rs {total}</p>
            <p>Rs {paid}</p>
            <p className="text-red-500">Rs 0.00</p>
          </div>
        </div>
      </div>
    );
  };
  

const BookingsDashboard = () => {
  const [activeTab, setActiveTab] = useState('Reservations');
  const tabs = ['Reservations', 'Arrivals', 'In House', 'Departures'];
  
 
  const bookings = [
    {
      guest: 'Ithachi Uchiha',
      nights: 3,
      checkIn: '28/08/2024 09:30 AM',
      checkOut: '31/08/2024 11:00 AM',
      bookingDate: '20/08/2024',
      roomType: 'Hotel',
      total: '4,200.00',
      paid: '4,200.00',
    },
    {
      guest: 'Ithachi Uchiha',
      nights: 3,
      checkIn: '28/08/2024 09:30 AM',
      checkOut: '31/08/2024 11:00 AM',
      bookingDate: '20/08/2024',
      roomType: 'Hotel',
      total: '4,200.00',
      paid: '4,200.00',
    },
    {
      guest: 'Ithachi Uchiha',
      nights: 3,
      checkIn: '28/08/2024 09:30 AM',
      checkOut: '31/08/2024 11:00 AM',
      bookingDate: '20/08/2024',
      roomType: 'Hotel',
      total: '4,200.00',
      paid: '4,200.00',
    },
  ];
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Bookings</h1>
        <NavLink to={'/bookings/add-booking'}className="bg-black text-white px-4 py-2 rounded text-sm">
          <button>Add Booking</button>
        </NavLink>
      </div>
 
      {/* Search and Check-in button */}
      <div className="flex mb-4 space-x-2 items-center">
        <div className="relative w-1/4"> {/* Decreased width of the search bar */}
          <input
            type="text"
            placeholder="Search by booking"
            className="w-full border rounded-md pl-10 pr-4 py-2 text-sm"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
        </div>
        <button className="border rounded-md px-4 py-2 flex items-center text-sm">
          <span className="mr-2">📅</span>
          Check In
        </button>
      </div>





      {/* Tabs */}

      
      <div className="flex border-x-slate-900">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm transition-all duration-200 ${
              activeTab === tab
                ? 'border-b-2 font-semibold border-x-2 border-t  border-l border-x-black border-t-black text-black border-b-green-700'
                : 'text-gray-500 hover:text-black'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Booking Cards */}
      <div className='border border-x-black border-b-black border-t-red-600'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map((booking, index) => (
          <BookingCard key={index} {...booking} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default BookingsDashboard;
