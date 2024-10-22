import React from 'react';
import { NavLink } from 'react-router-dom';
import { assests } from '../assets/assests';

const Sidebar = () => {
  return (
    
      <div className='hidden md:block md:w-[180px] lg:w-[230px]  bg-black pl-2 md:pl-3 lg:pl-4   py-4 text-white dark:bg-[#0B1739] dark:text-white shadow-md '>
        <div>
        <NavLink className={`flex items-center gap-3 pb-8 pl-2 md:px-2 lg:px-5  cursor-pointer `} to={'/'}>
            <img src={assests.logo} alt="" />
            <p className='font-sans font-semibold text-3xl text-white'>Rofabs</p>
          </NavLink>
        </div>
       <ul className=' text-white font-bold mt-3  border-red-500 w-full'>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/'}>
            <p>Dashboard</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`}  to={'/bookings'}>
            <p>Bookings</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/inventory'}>
            <p>Inventory</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/properties'}>
            <p>Properties</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 l  cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/roomtype'}>
            <p>Room Type</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/users'}>
            <p>Users</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings'}>
            <p>Material Management</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings'}>
            <p>KSR</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings'}>
            <p>Damages</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings'}>
            <p>Employee Management</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings'}>
            <p>Banquet Management</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings'}>
            <p>Complaints</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings'}>
            <p>Settings</p>
          </NavLink>
        </ul>
        
       </div>  
    
  );
};

export default Sidebar;


