import React, { useState } from 'react';
import ReservationCard from './ReservationCard';

const rooms = {
  'Single Room': [
    { id: 1, type: 'Single Room', number: '101', status: Array(12).fill(4) },
    { id: 2, type: 'Single Room', number: '102', status: Array(12).fill(4) },
  ],
  'Double Room': [
    { id: 3, type: 'Double Room', number: '201', status: Array(12).fill(4) },
    { id: 4, type: 'Double Room', number: '202', status: Array(12).fill(4) },
  ],
};

const HotelInventory = () => {
  const [selectedRoomType, setSelectedRoomType] = useState('Single Room');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // New state for selected date
  const [isOpen, setIsOpen] = useState(false);

  const getDates = () => {
    const dates = [];
    for (let i = 0; i < 12; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const formatTime = (time) => {
    return time === 'NA' ? 'NA' : `${time}00`;
  };

  const handleRoomTypeChange = (type) => {
    setSelectedRoomType(type);
  };

  const handleDateChange = (event) => {
    setCurrentDate(new Date(event.target.value));
  };

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date); // Set the selected date
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 1:
        return 'bg-blue-100 text-blue-600';
      case 2:
        return 'bg-red-100 text-red-600';
      case 3:
        return 'bg-yellow-100 text-yellow-600';
      case 4:
      default:
        return 'bg-green-100 text-green-600';
    }
  };

  const isCurrentDate = (date) => {
    return date.toDateString() === currentDate.toDateString();
  };

  const isSelectedDate = (date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 dark:bg-[#0B1739] dark:text-white relative">
      {/* Reservation Popup */}
      {isOpen && (
        <div className="absolute w-full">
          <ReservationCard handleClose={handleClose} />
        </div>
      )}

      {/* Inventory Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Inventory</h1>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 border rounded-md text-sm bg-black text-white dark:bg-[#0B1739] dark:text-white">
            Calendar
          </button>
          <button
            onClick={handleButtonClick}
            className="px-4 py-2 border rounded-md text-sm bg-black text-white dark:bg-[#0B1739] dark:text-white"
          >
            + Add People
          </button>
        </div>
      </div>

      {/* Stats Bar with Date Picker */}
      <div className="flex gap-6 mb-4 text-sm border-b pb-3 items-center">
        {/* Date Picker */}
        <div className="w-[200px]">
          <input
            type="date"
            value={currentDate.toISOString().split('T')[0]}
            onChange={handleDateChange}
            className="px-3 py-2 border rounded-md w-full bg-white dark:bg-[#0B1739] dark:text-white"
          />
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-gray-600 dark:text-white">All:</span>
            <span className="font-medium">97</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-600 dark:text-white">Vacant:</span>
            <span className="font-medium">97</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-600 dark:text-white">Occupied:</span>
            <span className="font-medium">24</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-600 dark:text-white">Reserved:</span>
            <span className="font-medium">22</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-600 dark:text-white">Blocked:</span>
            <span className="font-medium">2</span>
          </div>
        </div>
      </div>

      {/* Table with Navigation */}
      <div className="overflow-x-auto w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 border-r w-[100px] border-b bg-gray-50 sticky top-0 z-10 dark:bg-[#0B1739] dark:text-white">
                <div className="relative">
                  <label className="text-sm block text-gray-600 mb-1 dark:text-white">Room Type</label>
                  <select
                    className="block w-full px-3 py-2 text-sm border rounded-md bg-white dark:bg-[#0B1739] dark:text-white"
                    value={selectedRoomType}
                    onChange={(e) => handleRoomTypeChange(e.target.value)}
                  >
                    {Object.keys(rooms).map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
              <th className="border-r border-b w-[80px]">
                <button
                  onClick={handlePrev}
                  className="top-7 w-[50px] h-[50px] p-2 bg-orange-300 text-2xl rounded-full hover:bg-yellow-300 z-20 dark:bg-white dark:text-white"
                >
                  🔙
                </button>
              </th>
              
              {getDates().map((date, index) => (
                <th
                  key={index}
                  onClick={() => handleDateClick(date)} // Handle date click
                  className={`p-2 border-r border-b min-w-[50px] cursor-pointer ${
                    isSelectedDate(date)
                      ? 'bg-green-200 dark:bg-green-800' // Highlight selected date
                      : null
                  }`}
                >
                  <div className="text-sm text-gray-600 dark:text-white">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                  <div className="font-medium">{date.getDate()}</div>
                </th>
              ))}
              <th>
                <button
                  onClick={handleNext}
                  className="top-7 w-[50px] h-[50px] p-2 bg-orange-300 text-2xl rounded-full hover:bg-yellow-300 z-20 dark:bg-white dark:text-white"
                >
                  🔜
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {rooms[selectedRoomType].map((room) => (
              <tr key={room.id} className="border-b dark:bg-[#0B1739] dark:text-white">
                <td className="p-2 border-r bg-white sticky left-0 dark:bg-[#0B1739] dark:text-white">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{room.type}</span>
                    <span className="text-gray-500">({room.number})</span>
                  </div>
                </td>
                <td></td>

                {room.status.map((status, index) => (
                  <td key={index} className="p-2 border-r text-center">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${getStatusColor(status)} font-medium`}>
                      {status}
                    </div>
                    <div className="text-xs mt-1 text-gray-600">{formatTime(index % 2 === 0 ? '12' : 'NA')}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelInventory;
