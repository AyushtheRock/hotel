import React from 'react';
import { FaBox, FaCreditCard, FaTshirt, FaClipboardCheck, FaQuestionCircle, FaEnvelope, FaStar } from 'react-icons/fa'; // Importing icons from react-icons

const notificationsData = [
  { id: 1, text: 'Out of stock items', value: 0, icon: <FaBox /> },
  { id: 2, text: 'Due payments', value: 0, icon: <FaCreditCard /> },
  { id: 3, text: 'Laundry status', value: 0, icon: <FaTshirt /> },
  { id: 4, text: 'Tasks', value: 0, icon: <FaClipboardCheck /> },
  { id: 5, text: 'Booking inquiry', value: 0, icon: <FaQuestionCircle /> },
  { id: 6, text: 'Pending KOT', value: 0, icon: <FaClipboardCheck /> },
  { id: 7, text: 'Guest message', value: 0, icon: <FaEnvelope /> },
  { id: 8, text: 'Review', value: 0, icon: <FaStar /> },
];

const Notifications = () => {
  return (
    <div className="bg-white p-4 rounded shadow h-full">
      <h3 className="text-lg font-semibold mb-4">Notifications</h3>
      <div className="grid grid-cols-2 gap-4">
        {notificationsData.map((notification) => (
          <div key={notification.id} className="flex items-center">
            <span className="text-xl mr-2">{notification.icon}</span>
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold">{notification.value}</span> {/* Displaying value on top */}
              <span>{notification.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
