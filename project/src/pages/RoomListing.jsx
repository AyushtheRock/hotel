import React from 'react';

const RoomRow = ({ image, title, description, property, roomType }) => { 
  return (
    <tr className='border-b'>
      <td className="p-4 flex items-center">
        <img src={image} alt="room" className="w-16 h-16 rounded-lg object-cover mr-4" />
        <div>
          <h3 className='font-medium text-gray-900 dark:text-white'>{title}</h3>
          <p className= 'text-gray-500 text-sm dark:bg-[#0B1739] dark:text-white'>{description}</p>
        </div>
      </td>
      <td className='p-4  text-gray-700 dark:bg-[#0B1739] dark:text-white'>{property}</td>
      <td className='p-4 flex items-center text-gray-700 dark:bg-[#0B1739] dark:text-white'>
        {/* Bed Icon */}
        <svg className='w-5 h-5 mr-1 text-gray-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M21 10a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7z" />
        </svg>
        {roomType}
      </td>
      <td className="p-4 text-right">
        {/* Replacing X button with vertical ellipsis button */}
        <button className='text-gray-500 hover:text-gray-700 dark:bg-[#0B1739] dark:text-white'>
          <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v.01M12 12v.01M12 18v.01" />
          </svg>
        </button>
      </td>
    </tr>
  );
};


const RoomsListing = () => {


  const rooms = [
    {
      image: 'https://via.placeholder.com/150x150.png?text=Room+1',
      title: 'Room Type 1',
      description: 'Room description...',
      property: 'Property 1',
      roomType: 'Single Bed',
    },
    {
      image: 'https://via.placeholder.com/150x150.png?text=Room+2',
      title: 'Room Type 1',
      description: 'Room description...',
      property: 'Property 1',
      roomType: 'Double Bed',
    },
  ];

  return (
    <div className='bg-gray-100 text-gray-900 min-h-screen p-6 dark:bg-gray-900 dark:text-white'>
      <div className="max-w-7xl mx-auto dark:bg-gray-900 dark:text-white ">
        <div className="flex justify-between items-center mb-6 dark:bg-gray-900 dark:text-white">
          <h1 className="text-3xl font-bold dark:bg-gray-900 dark:text-white">Rooms Listing</h1>
          
        </div>
        <div className='bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-900 dark:text-white'>
          <div className="p-4 flex  items-center dark:bg-[#0B1739]">
            <input
              type="text"
              placeholder=" 🔍 Search by room name"
              className='border rounded-lg px-4 py-2 text-sm w-1/3 bg-white text-gray-900 border-gray-300 dark:bg-[#0B1739]'
            />
            <div className="flex space-x-4 ">
              <select className='border rounded-lg px-4 py-2  text-sm ml-3 bg-white text-gray-900 border-gray-300 dark:bg-[#0B1739] dark:text-white'>
                <option>Property type</option>
              </select>
              <select className='border rounded-lg px-4 py-2 text-sm bg-white text-gray-900 border-gray-300 dark:bg-[#0B1739] dark:text-white'>
                <option>Room type</option>
              </select>
            </div>
          </div>
          <table className="w-full text-left dark:bg-[#0B1739]">
            <thead className='bg-gray-100  hidden lg:table-header-group'>
              <tr className='dark:bg-[#0B1739] dark:text-white'>
                <th className="p-4">Room Title</th>
                <th className="p-4">Property Type</th>
                <th className="p-4">Room Type</th>  
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className='bg-white dark:bg-[#0B1739] dark:text-white'>
              {rooms.map((room, index) => (
                
                  <RoomRow 
                  key={index}
                  image={room.image}
                  title={room.title}
                  description={room.description}
                  property={room.property}
                  roomType={room.roomType}
                  
                />
                
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoomsListing;
