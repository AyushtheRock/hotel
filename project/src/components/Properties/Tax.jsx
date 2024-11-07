import React from 'react'
import { assests } from '../../assets/assests'

const Tax = () => {
  return (
    <div>
         <div>
      <div className='px-4 my-8'>
        <div className='flex justify-between py-4'>
          <div className=' gap-12 hidden sm:flex'>
             
          </div>
          <button className='w-full sm:w-fit border px-3 sm:px-5 py-1 rounded bg-black text-white dark:bg-[#9B27D0]'>+ Add Tax</button>
        </div>

        <div className='border rounded-xl  sm:mt-4 overflow-hidden'> 
            <ul className='items-center grid grid-cols-4 text-center border-b bg-[#F3F3F3] dark:bg-[#080F26] text-xs sm:text-lg '>
              <li className='border-r py-3'>Title</li>
              <li className='border-r py-3'>Currency</li>
              <li className='border-r py-3'>Tax</li>
              <li className='py-3'>Options</li>
            </ul>
            
            <div className='w-full flex flex-col justify-center items-center min-h-[30vh]'>
              <img src={assests.file} alt="" />
              <p>No data to show</p>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Tax