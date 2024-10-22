import React from 'react'
import { useState } from 'react';
import Booking from './Booking';
import GuestTab from './GuestTab';
import AdditionalDocuments from './AdditionalDocuments';
import { NavLink } from 'react-router-dom';


const BookingPage = () => {

    const [pageDisplay,setpageDisplay] =useState(<Booking />);
    const[BookingClass,setBookingClass]=useState(true);
    const[guestClass,setguestClass]=useState(false);
    const[AdditionalDetailClass,setAdditionalDetailClass]=useState(false);

    function showBookingdetails(){
        setpageDisplay(<Booking />);
        setBookingClass(true);
        setguestClass(false);
        setAdditionalDetailClass(false);

    }

    function showGuest(){
        setpageDisplay(<GuestTab />);
        setBookingClass(false);
        setguestClass(true);
        setAdditionalDetailClass(false);

    }


    function showAdditionalPage(){
        setpageDisplay(<AdditionalDocuments />);
        setBookingClass(false);
        setguestClass(false);
        setAdditionalDetailClass(true);

    }
  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg">
        <div className="border-b p-6 flex items-center justify-between">
          <div className="flex items-center">
            {/* Left Arrow Icon */}
            <NavLink to={'/bookings'}>
            <button className="mr-4">
              <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            </NavLink>
            <h2 className="text-xl font-semibold">Booking Details</h2>
          </div>
          <div>
          <button className="bg-gray-300 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400">
            Cancel
          </button>
          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Save
          </button>
          </div>
         
        </div>
        <div className="flex border-b mb-6">
            <button onClick={()=>showBookingdetails()} className={BookingClass? 'px-6 py-2 bg-gray-300' : 'px-6 py-2 '}>Booking Details</button>
            <button onClick={()=>showGuest()} className={guestClass? 'px-6 py-2 bg-gray-300' : 'px-6 py-2 '}>Guests</button>
            <button onClick={()=>showAdditionalPage()} className={AdditionalDetailClass? 'px-6 py-2 bg-gray-300' : 'px-6 py-2 '}>Additional Documents</button>
          </div>

          <div>
             {pageDisplay}
          </div>
    </div>
  )
}

export default BookingPage;