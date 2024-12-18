import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assests } from '../assets/assests';


import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaUsersGear } from "react-icons/fa6";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { GiModernCity } from 'react-icons/gi';
import { FaBed } from 'react-icons/fa';
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaIdCard } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";
import { GiBrokenShield } from "react-icons/gi";
import { MdInventory } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
const Sidebar = () => {

  const [visible ,setVisible] = useState(true)

  return (
    
      <div className={` bg-black min-h-screen pl-2 md:pl-3 lg:pl-4  py-4 text-white dark:bg-[#0B1739] dark:text-white shadow-md ${visible ? 'w-[60px] md:w-[180px] lg:w-[230px]   duration-300' : 'w-screen md:w-[80px] lg:w-[100px]  duration-300'}`}>
        <div className={`flex items-center  justify-between  ${visible ? ' pl-2 px-3 md:px-2 lg:px-5 flex-col sm:flex-row gap-5 md:gap-0' : 'gap-3 px-10 md:px-1 lg:px-2 '}`}>
        <NavLink className={`flex  items-center  gap-3 flex-wrap  cursor-pointer `} to={'/'}>
            <img className='' src={assests.logo} alt="" />
            <p className={`font-sans font-semibold  text-white hidden md:block ${visible?'text-xl sm:text-2xl lg:text-3xl':'md:hidden'}`}>Rofabs</p>
          </NavLink>
            <img className={`size-6 transition-all duration-200 ${visible ? 'rotate-180 md:rotate-0 ' : ' md:rotate-180'} cursor-pointer `} onClick={()=>setVisible(!visible) }  src={assests.sidebarBack_icon} alt="" />
          
        </div>
       <ul className={`mt-12  ${visible ? 'flex flex-col text-white font-bold space-y-7  border-red-500 w-full  transition-all duration-500' : 'flex flex-col items-start  text-start px-10 sm:px-0 space-y-6 sm:space-y-8  transition-all duration-500'}`}>
          <NavLink className={({isActive})=>`flex items-center gap-3  px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/'}>
            <MdDashboard className=' flex-shrink-0'/>
            <p className={`${visible?'hidden md:block':'md:hidden'}`}>Dashboard</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3  px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`}  to={'/bookings'}>
          <BsFillCalendarDateFill className='flex-shrink-0' />
            <p className={`${visible?'hidden md:block':'md:hidden'}`}>Bookings</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3  px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/inventory'}>
            <MdInventory className='flex-shrink-0' />
            <p className={`${visible?'hidden md:block':'md:hidden'}`}>Inventory</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3  px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/properties'}>
            <GiModernCity className='flex-shrink-0' />
            <p className={`${visible?'hidden md:block':'md:hidden'}`}>Properties</p>
          </NavLink>
          <NavLink className={({isActive})=>`flex items-center gap-3  px-3 md:px-5 lg:px-8 fill-black dark:fill-white   cursor-pointer ${isActive ? ' dark:bg-[#080c1a] dark:text-white p-4 text-black bg-[#F9F9F9]  rounded-3xl rounded-r-none' : ''}`} to={'/roomtype'}>
            <FaBed className='flex-shrink-0' />
            <p className={`${visible?'hidden md:block':'md:hidden'}`}>Room Types</p>
          </NavLink>
         
        </ul>
        
       </div>  
    
  )  
};

export default Sidebar;


