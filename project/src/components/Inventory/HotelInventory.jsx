import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { AiFillBackward, AiFillForward, AiOutlineArrowDown, AiOutlineDown } from "react-icons/ai";
import {doubleRoom, singleRoom} from '../../assets/assests.js'
import {  MdOutlinePets, MdOutlineSmokeFree } from "react-icons/md";
import CleanLogo from '../../assets/inventory/CleanLogo.jsx';
import ReservationCard from './ReservationCard.jsx';
import { TbFilterSearch } from "react-icons/tb";
const HotelInventory = () => {

  const [showRooms , setShowRooms] = useState(true);
  const [showDouble , setShowDouble] = useState(true);
  const [allDates , setAllDates] = useState([]);
  const [currentDate , setCurrentDate] = useState(dayjs());
  const [roomFilter , setRoomFilter] = useState('both');
  const [isOpen, setIsOpen] = useState(false);
  const getDates = (currentDate) => {
    const dates = []
    for (let i = 0; i < 14; i++) {
        dates.push(dayjs(currentDate).add(i, 'day'))
    }

    setAllDates(dates);
  };
  
  useEffect(() => {
    getDates([currentDate]);
  }, [currentDate]);
    
  const handleRoomFilter = (e) => {
    setRoomFilter(e);
  }
  
  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  

  return (
    <div className='w-full h-full pt-4 bg-[#F3F3F3] dark:bg-inherit px-3 sm:px-6  relative'>
        
      <div className='flex justify-between items-center  sm:px-8'>
        <div><p className='text-xl sm:text-2xl font-semibold dark:text-white'>Inventory</p></div>
        <div className='flex gap-4 items-center'>

          <button className='bg-black dark:bg-[#9B27D0] px-2 sm:px-4 py-2 text-xs sm:text-base rounded text-white flex items-center gap-2'>Filter <TbFilterSearch /></button>
          <button onClick={handleButtonClick}
          className='bg-black dark:bg-[#9B27D0] px-2 sm:px-4 py-2 w-8 sm:w-fit   rounded text-white  '>
            
            <img src="./src/assets/person-add.png" alt="" /></button>
            <div className={`${isOpen ? 'block' : 'hidden'} absolute  top-0  right-0 w-full`}>
              <ReservationCard handleClose={handleClose}/>
            </div>
        </div>
      </div>
      <div className='flex gap-6 mt-6 bg-white dark:bg-[#080F26] rounded-md '>

        <div className='px-2 py-2'>
          
          <label htmlFor="date">
            <input onChange={e=>setCurrentDate(e.target.value)}   value={dayjs(currentDate).format('YYYY-MM-DD')} type="date" id="date"  className=' px-2 sm:px-4 py-2 rounded-md dark:text-black border dark:bg-gray-400 border-gray-300 w-fit sm:w-full ' />
          </label>
             
        </div>

        <div className='hidden sm:flex gap-6 px-2 py-2 '>
          <div className='flex gap-3 items-center text-sm '>
            <p className='text-gray-500'>All</p>
            <p className='rounded-full text-sm bg-gray-300  dark:bg-[#9B27D0] px-2 py-1'>57</p>
          </div>
          
          <div className='flex gap-3 items-center text-sm'>
            <p className='text-gray-500'>Vacant</p>
            <p className='rounded-full text-sm bg-gray-300  dark:bg-[#9B27D0] px-2 py-1'>57</p>
          </div>
          <div className='flex gap-3 items-center text-sm'>
            <p className='text-gray-500'>Occupies</p>
            <p className='rounded-full text-sm bg-gray-300  dark:bg-[#9B27D0] px-2 py-1'>57</p>
          </div>
          <div className='flex gap-3 items-center text-sm'>
            <p className='text-gray-500'>Reserved</p>
            <p className='rounded-full text-sm bg-gray-300  dark:bg-[#9B27D0] px-2 py-1'>57</p>
          </div>
          <div className='flex gap-3 items-center text-sm'>
            <p className='text-gray-500'>Blocked</p>
            <p className='rounded-full text-sm bg-gray-300  dark:bg-[#9B27D0] px-2 py-1'>57</p>
          </div>
          <div className='flex gap-3 items-center text-sm'>
            <p className='text-gray-500'>Due Out</p>
            <p className='rounded-full text-sm bg-gray-300  dark:bg-[#9B27D0] px-2 py-1'>57</p>
          </div>
          <div className='flex gap-3 items-center text-sm'>
            <p className='text-gray-500'>Dirty</p>
            <p className='rounded-full text-sm bg-gray-300  dark:bg-[#9B27D0] px-2 py-1'>57</p>
          </div>
        </div>

      </div>

      <div className='overflow-x-scroll sm:overflow-x-hidden bg-[#fffefe] dark:bg-inherit'>
      <div className='flex flex-col sm:flex-row border-t border-gray-300 px-2  '>

          <div className='my-auto py-3 mr-5 sticky md:block left-0 '>
            <label htmlFor="types" className=''>
              <select onChange={(e) => handleRoomFilter(e.target.value)} defaultValue='both'  name="types" id="types" className='px-1 py-2 rounded-md dark:text-black border border-gray-300'>
                <option value="both" disabled hidden>Room Types</option>
                <option value="single">Single Room (02)</option>
                <option value="double">Double Room (04)</option>
              </select>
            </label>
          </div>

          <div className='flex  items-center w-full'>
            <button  
            className='border rounded-full px-2 py-2 flex items-center '
            onClick={() => {setCurrentDate(dayjs(currentDate).subtract(14, 'day'))}}><AiFillBackward className='size-[22px] sm:size-auto'/><span className='text-xs hidden sm:block'>prev</span> </button>
            {
              allDates.map((day,index) => {
                return (
                  <div key={index} className='flex-1  '>
                    <div className='flex flex-col text-sm border-x px-4 sm:px-0'>
                    <p className='text-center text-sm text-gray-500'>{day.format('ddd')}</p>
                    <p className='text-center font-semibold'>{day.format('DD')}</p>
                    <p className='text-center text-sm text-gray-500'>{day.format('MMM')}</p>

                    </div>
                  </div>
                )
              })
            }
            <button 
            className='border rounded-full px-2 py-2 flex items-center'
            onClick={() => {setCurrentDate(dayjs(currentDate).add(14, 'day'))}}><span className='text-xs hidden sm:block '>Next</span><AiFillForward className='size-[22px] sm:size-auto'/></button>
            
          </div>

          </div>

          {/* single room */}
          <div className={`flex flex-col ${roomFilter === 'double'  ? 'hidden' : 'block'}`}>
          <div className='grid grid-cols-[3fr_1fr_16fr_1fr] border-t border-gray-300 px-1 sm:px-2  bg-[#fffefe] dark:bg-inherit  '>

          <div className='py-3 w-10 sm:max-w-fit px-1  sm:px-2'>
            <p onClick={() => setShowRooms(!showRooms)} className='flex flex-col sm:flex-row gap-2 items-center py-3  w-fit text-xs sm:text-base'>Single <span className='hidden sm:block min-w-fit'>Room (02)</span><span className={`transition-all duration-300 ${showRooms ? '--rotate-180' : '-rotate-180'}`}><AiOutlineDown/></span></p>
          </div>
            <div></div>
          <div className='flex  items-center px-1 sm:px-0'>
            
            {
              singleRoom.slice(0,14).map((room,index) => {
                return (
                <div className='border-x w-full '>
                  <div key={index} className='flex mx-auto justify-center'>
                    <div  className='flex flex-col items-center'>
                      <div className='flex gap-[8px] sm:gap-1 items-center'>
                          <p className='rounded-full text-xs  border bg-[#D5FCC1] px-2 py-1'>{room.vacant}</p>
                          <p className='rounded-full text-xs  border bg-[#EEEEEE] px-2 py-1'>{room.booked}</p>
                        </div>
                      <p className='text-sm text-gray-600'>{room.price}</p>
                    </div>
                
                  </div>
                </div>
                )
              })
            }
          </div>
            <div></div>
          </div>
          <div className={`grid grid-cols-[3fr_1fr_16fr_1fr] border-t border-gray-300 px-2  bg-[#fffefe] dark:bg-inherit   ${showRooms ? 'hidden' : 'block'}`}>

          <div className='py-3  max-w-full flex justify-between items-center px-2'>
            <p onClick={() => setShowRooms(!showRooms)} className='flex gap-2 items-center py-3  w-fit'>101</p>
            <div className='flex gap-2'>
            <MdOutlineSmokeFree className='text-black/40 dark:text-white size-5' />
            <CleanLogo className='text-black/40 dark:text-white size-5'/>
            </div>
          </div>
            <div></div>
          <div className='flex  items-center '>
            
            {
              singleRoom.slice(0,14).map((room,index) => {
                return (
                <div className='border-x w-full '>
                  <div key={index} className='flex mx-auto justify-center'>
                    <div  className='flex flex-col items-center'>
                      <div className='flex gap-1 items-center'>
                          <p className='rounded-full text-xs  border bg-[#D5FCC1] px-2 py-1'>{room.vacant}</p>
                          <p className='rounded-full text-xs  border bg-[#EEEEEE] px-2 py-1'>{room.booked}</p>
                        </div>
                      <p className='text-sm text-gray-600'>{room.price}</p>
                    </div>
                
                  </div>
                </div>
                )
              })
            }
          </div>
            <div></div>
          </div>
          <div className={`grid grid-cols-[3fr_1fr_16fr_1fr] border-t border-gray-300 px-2  bg-[#fffefe] dark:bg-inherit  ${showRooms ? 'hidden' : 'block'}`}>

          <div className='py-3  max-w-full px-2 flex justify-between items-center'>
            <p onClick={() => setShowRooms(!showRooms)} className='flex gap-2 items-center py-3  w-fit'>102</p>
            <div className='flex gap-2'>
            <MdOutlineSmokeFree className='text-black/40 dark:text-white size-5' />
            <CleanLogo className='text-black/40 dark:text-white size-5'/>
            </div>
          </div>
            <div></div>
          <div className='flex  items-center '>
            
            {
              singleRoom.slice(0,14).map((room,index) => {
                return (
                <div className='border-x w-full '>
                  <div key={index} className='flex mx-auto justify-center'>
                    <div  className='flex flex-col items-center'>
                      <div className='flex gap-1 items-center'>
                          <p className='rounded-full text-xs  border bg-[#D5FCC1] px-2 py-1'>{room.vacant}</p>
                          <p className='rounded-full text-xs  border bg-[#EEEEEE] px-2 py-1'>{room.booked}</p>
                        </div>
                      <p className='text-sm text-gray-600'>{room.price}</p>
                    </div>
                
                  </div>
                </div>
                )
              })
            }
          </div>
            <div></div>
          </div>

          </div>

          {/* double room */}
          <div className={`flex flex-col ${roomFilter === 'single'? 'hidden' : 'block'}`}>
          <div className='grid grid-cols-[3fr_1fr_16fr_1fr] border-t border-gray-300 px-1 sm:px-2  bg-[#fffefe] dark:bg-inherit'>

          <div className='py-3 w-10 sm:max-w-fit px-1  sm:px-2'>
            <p onClick={() => setShowDouble(!showDouble)} className='flex flex-col sm:flex-row gap-2 items-center py-3  w-fit text-xs sm:text-base'>Double<span className='hidden sm:block min-w-fit'>Room (04)</span><span className={`transition-all duration-300 ${showDouble ? '--rotate-180' : '-rotate-180'}`}><AiOutlineDown/></span></p>
          </div>
            <div></div>
          <div className='flex  items-center px-1 sm:px-0 '>
            
            {
              doubleRoom.slice(0,14).map((room,index) => {
                return (
                <div className='border-x w-full '>
                  <div key={index} className='flex mx-auto justify-center'>
                    <div  className='flex flex-col items-center'>
                      <div className='flex gap-[8px] sm:gap-1 items-center'>
                          <p className='rounded-full text-xs  border bg-[#D5FCC1] px-2 py-1'>{room.vacant}</p>
                          <p className='rounded-full text-xs  border bg-[#EEEEEE] px-2 py-1'>{room.booked}</p>
                        </div>
                      <p className='text-sm text-gray-600'>{room.price}</p>
                    </div>
                
                  </div>
                </div>
                )
              })
            }
          </div>
            <div></div>
          </div>
          <div className={`grid grid-cols-[3fr_1fr_16fr_1fr] border-t border-gray-300 px-2  bg-[#fffefe] dark:bg-inherit border-b  ${showDouble ? 'hidden' : 'block'}`}>

          <div className='py-3  max-w-full px-2 flex justify-between items-center '>
            <p onClick={() => setShowDouble(!showDouble)} className='flex gap-2 items-center py-3  w-fit'>201</p>
            <div className='flex gap-2'>
            <MdOutlineSmokeFree className='text-black/40 dark:text-white size-5' />
            <CleanLogo className='text-black/40 dark:text-white size-5'/>
            <MdOutlinePets className='text-black/40 dark:text-white size-5' />
            </div>
          </div>
            <div></div>
          <div className='flex  items-center '>
            
            {
              singleRoom.slice(0,14).map((room,index) => {
                return (
                <div className='border-x w-full '>
                  <div key={index} className='flex mx-auto justify-center'>
                    <div  className='flex flex-col items-center'>
                      <div className='flex gap-1 items-center'>
                          <p className='rounded-full text-xs  border bg-[#D5FCC1] px-2 py-1'>{room.vacant}</p>
                          <p className='rounded-full text-xs  border bg-[#EEEEEE] px-2 py-1'>{room.booked}</p>
                        </div>
                      <p className='text-sm text-gray-600'>{room.price}</p>
                    </div>
                
                  </div>
                </div>
                )
              })
            }
          </div>
            <div></div>
          </div>
          <div className={`grid grid-cols-[3fr_1fr_16fr_1fr] border-t border-gray-300 px-2  bg-[#fffefe] dark:bg-inherit border-b  ${showDouble ? 'hidden' : 'block'}`}>

          <div className='py-3  max-w-full px-2 flex justify-between items-center'>
            <p onClick={() => setShowDouble(!showDouble)} className='flex gap-2 items-center py-3  w-fit'>202</p>
            <div className='flex gap-2'>
            <MdOutlineSmokeFree className='text-black/40 dark:text-white size-5' />
            <CleanLogo className='text-black/40 dark:text-white size-5'/>
            <MdOutlinePets className='text-black/40 dark:text-white size-5' />
            </div>
          </div>
            <div></div>
          <div className='flex  items-center '>
            
            {
              singleRoom.slice(0,14).map((room,index) => {
                return (
                <div className='border-x w-full '>
                  <div key={index} className='flex mx-auto justify-center'>
                    <div  className='flex flex-col items-center'>
                      <div className='flex gap-1 items-center'>
                          <p className='rounded-full text-xs  border bg-[#D5FCC1] px-2 py-1'>{room.vacant}</p>
                          <p className='rounded-full text-xs  border bg-[#EEEEEE] px-2 py-1'>{room.booked}</p>
                        </div>
                      <p className='text-sm text-gray-600'>{room.price}</p>
                    </div>
                
                  </div>
                </div>
                )
              })
            }
          </div>
            <div></div>
          </div>

          </div>
      </div>
        

    </div>
  )
}

export default HotelInventory