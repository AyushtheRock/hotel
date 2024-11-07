import React, { useState } from 'react'
import { assests } from '../../assets/assests'

const Policies = () => {

  const [showPolicy , setShowPolicy] = useState(false)
  
  return (
    <div>
      <div className={showPolicy ? 'px-4 my-8 ' : 'px-4 my-8'}>
        <div className='flex justify-between py-4 '>
          <div className='flex gap-3 sm:gap-12 flex-col sm:flex-row'>
            <p className='underline underline-offset-8 font-semibold sm:text-xl   '>Cancellation Policy</p>
            <p onClick={()=>setShowPolicy(true)} className='cursor-pointer text-gray-500 font-semibold text-xl  underline-offset-8'>Property Policy</p>
          </div>
          <button   className='hidden sm:flex border px-5 py-1 rounded bg-black text-white dark:bg-[#9B27D0]'>Create Policy</button>

        

        </div>

        <div className='border rounded-xl mt-4 overflow-hidden'> 
            <ul className='items-center grid text-xs sm:text-lg grid-cols-4 text-center border-b bg-[#F3F3F3]  dark:bg-[#080F26]'>
              <li className='border-r py-3'>Title</li>
              <li className='border-r py-3'>Type</li>
              <li className='border-r py-3'>Rate</li>
              <li className='py-3'>Options</li>
            </ul>
            
            <div className='w-full flex flex-col justify-center items-center min-h-[30vh]'>
              <img src={assests.file} alt="" />
              <p>No data to show</p>
          </div>
        </div>

      </div>
      {/* policy side bar */}
      {
          showPolicy 
          ? <div className='absolute z-10 top-0 right-0 w-full sm:w-[35vw]  h-screen bg-white border-l dark:bg-[#080F26] '>
            <div className='grid grid-cols-[0.5fr_4fr_2fr_2fr] items-center bg-gray-100 dark:bg-[#0B1739]  py-4 gap-2 px-4'>
              <img className=' bg-inherit  dark:bg-inherit sm:p-1.5 ' onClick={()=>setShowPolicy(false)} src={assests.cross} alt="" />
              <p className='sm:text-xl '>Property Policy</p>
              <button className='border text-sm sm:text-lg px-2 sm:px-5 py-1 rounded bg-transparent border-black dark:border-white dark:text-white ' >Cancel</button>
              <button className='border text-sm sm:text-lg px-2 sm:px-5 py-1 rounded bg-black text-white dark:bg-[#9B27D0]' >Save</button>
            </div>

            <div >
              <div className='py-8 border-b space-y-4 px-4'>
                <div className='grid grid-cols-2 gap-4 '>
                  <div className='flex flex-col space-y-1'>
                    <p>Parking Policy</p>
                    <select className='border border-[#6F6F6F] rounded py-1 dark:bg-[#080F26] px-1' >
                      <option  value="">On Site</option>
                    </select>
                  </div>
                  <div className='flex flex-col space-y-1'>
                     <p>Parking Policy</p>
                     <select className='border border-[#6F6F6F] rounded py-1 dark:bg-[#080F26] px-1' >
                      <option  value="">Not Available</option>
                     </select>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col' >
                    <p className='text-[#6F6F6F]'>Parking Property</p>
                    <div className='gap-2 flex'>
                    <input type="radio" id='public' value={"public"} checked />
                    <label htmlFor="public">Public</label>
                    </div> 
                    <div className='gap-2 flex'>
                    <input type="radio"  value={"private"}  id='private' />
                    <label htmlFor="private">Private</label>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                     <p className='text-[#6F6F6F]'>Is Paid</p>
                     <div className='gap-2 flex'>
                    <input type="radio" id='free' value={"free"}  checked />
                    <label htmlFor="free">Free</label> 
                    </div> 
                    <div className='gap-2 flex'>
                    <input type="radio"  value={"paid"}  id='paid' />
                    <label htmlFor="paid">Paid</label>
                    </div>
                  </div>
                </div>

                <div className='space-y-1 pt-2'>
                  <p>Cost</p>
                  <input className='w-full border border-[#6F6F6F] rounded py-1 dark:bg-[#0B1739] px-1' type="number" placeholder='Enter value required' />
                </div>

              </div>

              <div className='py-4 space-y-4 px-4'>
                    <p>Cleaning Policy</p>
              <div className='grid sm:grid-cols-2 gap-4'>
                  <div className='flex flex-col space-y-1'>
                    <div>
                      <p className='text-[#6F6F6F]'>Enhanced Cleaning Practices</p>
                        <div>
                          <div className='gap-2 flex'>
                            <input type="radio" id='public' value={"public"} checked />
                            <label htmlFor="public">Public</label>
                            </div> 
                            <div className='gap-2 flex'>
                            <input type="radio"  value={"private"}  id='private' />
                            <label htmlFor="private">Private</label>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className='flex flex-col space-y-1'>
                     <p>Partner hygiene link</p>
                     <input  className='dark:bg-[#080F26] border border-[#6F6F6F] rounded py-1 px-1 text-[#6F6F6F]' type="url" placeholder='Partner hygiene link' />
                  </div>
                </div>


                <div className='space-y-1 pt-2'>
                  <p>Cleaning Practices Description</p>
                  <textarea className='w-full bg-[#F4F4F5] dark:bg-[#0B1739] border border-[#6F6F6F] rounded py-1 px-1' rows={2}>Enter description</textarea>
                </div>
              </div>

            </div>
          </div>
          : ''
        }

        {/* sidebar end here */}
    </div>
  )
}

export default Policies