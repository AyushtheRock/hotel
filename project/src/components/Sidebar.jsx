import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assests } from '../assets/assests';
import Dash from '../assets/dash';
import Setting from '../assets/Setting';
import Inventory from '../assets/Inventory';
import MeetRoom from '../assets/MeetRoom';
import User from '../assets/user';

const Sidebar = () => {

  const [visible ,setVisible] = useState(true)

  return (
    
      <div className={` bg-black pl-2 md:pl-3 lg:pl-4   py-4 text-white dark:bg-[#0B1739] dark:text-white shadow-md ${visible ? 'hidden md:block md:w-[180px] lg:w-[230px] ' : 'hidden'}`}>
        <div className='flex justify-between pb-8 pl-2 md:px-2 lg:px-5  '>
        <NavLink className={`flex items-center gap-3 flex-wrap  cursor-pointer `} to={'/'}>
            <img src={assests.logo} alt="" />
            <p className='font-sans font-semibold text-xl sm:text-2xl lg:text-3xl text-white'>Rofabs</p>
          </NavLink>
            <img className='cursor-pointer flex-shrink-0' onClick={()=>setVisible(!visible)} src={assests.sidebarBack_icon} alt="" />
          
        </div>
       <ul className=' text-white font-bold mt-3  border-red-500 w-full'>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/'}>
            <Dash className=' '/>
            <p>Dashboard</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`}  to={'/bookings'}>
          <Inventory className='' />
            <p>Bookings</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/inventory'}>
            <Inventory />
            <p>Inventory</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/properties'}>
            <Inventory />
            <p>Properties</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/roomtype'}>
            <MeetRoom className='flex-shrink-0' />
            <p>Room Type</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/users'}>
            <User />
            <p>Users</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings1'}>
            <MeetRoom className='flex-shrink-0'/>
            <p>Material Management</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings2'}>
            <MeetRoom className='flex-shrink-0' />
            <p>KSR</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings3'}>
            <MeetRoom className='flex-shrink-0' />
            <p>Damages</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings4'}>
            <MeetRoom className='flex-shrink-0' />
            <p>Employee Management</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings5'}>
            <MeetRoom className='flex-shrink-0'/>
            <p>Banquet Management</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings6'}>
            <MeetRoom className='flex-shrink-0' />
            <p>Complaints</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/settings7'}>
            <Setting />
            <p>Settings</p>
          </NavLink>
        </ul>
        
       </div>  
    
  );
};

export default Sidebar;


