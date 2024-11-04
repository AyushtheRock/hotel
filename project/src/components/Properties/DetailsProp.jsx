import React from 'react'
import GoogleMap from '../GoogleMapDemo'

const Details = () => {
  
  return (
    <div  className='flex flex-col py-4'>
      <div className='flex flex-col'>
        <div className='flex flex-col py-2 border-b'>
          <h1 className='text-2xl'>Basic Details</h1>
            <div className='sm:flex flex-col md:grid grid-cols-3 gap-4 py-3'>
              <div className='' >
                <p>Property Name</p>
                <input className='w-full px-3 rounded bg-gray-100 dark:dark:bg-[#071025] mt-2 h-10' type="text"  placeholder='Enter your property name' />
              </div>
              <div> 
                  <p>Currency</p>
                  <select className='w-full px-3 rounded bg-gray-100 dark:bg-[#071025] mt-2  text-[#A3A3A3] h-10 '  >
                    <option value="">Select currency</option>
                  </select>
               </div>
                <div>
                    <p>Property Type</p>
                    <select className='w-full px-3 rounded bg-gray-100 dark:bg-[#071025] mt-2  text-[#A3A3A3] h-10'>
                      <option value="">Select property type</option>
                    </select>
                 </div>
               <div>
              </div>
            </div>
          </div >

            <div className='flex flex-col py-2'>
                <h1 className='text-2xl'>Contact Details</h1>
                <div className='sm:flex flex-col md:grid grid-cols-3 gap-4 py-3'>
                    <div className='' >
                      <p>Property Name</p>
                      <input className='w-full px-3 rounded bg-gray-100 dark:bg-[#071025] mt-2  h-10 ' type="text"  placeholder='Enter your property name' />
                    </div>
                    <div>
                      <p>Currency</p>
                      <select className='w-full px-3 rounded bg-gray-100 dark:bg-[#071025] mt-2  text-[#A3A3A3] h-10 '  >
                        <option value="">Select currency</option>
                      </select>
                    </div>
                    <div>
                        <p>Property Type</p>
                        <select className='w-full px-3 rounded bg-gray-100 dark:bg-[#071025] mt-2   text-[#A3A3A3] h-10 '>
                          
                          <option value="">Select property type</option>
                        </select>
                    </div>
                  
                  </div>
            </div>
            
           <div className='flex flex-col border-t py-2'>
            <p className='text-2xl'>Location Details</p>
              <div className='flex flex-col sm:grid sm:grid-cols-[1fr_2fr] gap-4 py-3 mt-3'>
                <div className='flex flex-col gap-y-3 w-full'>

                  <form className='flex flex-col gap-4  w-full' action="">

                    <label htmlFor="localAdd">
                      <input type="text" id='localAdd' placeholder='Flat / door no / floor / building' className='w-full py-2 px-3 border border-gray-200 placeholder:text-gray-300' />
                    </label>

                    <label  htmlFor="Area">
                      <input type="text" id='Area' placeholder='Area / sector ' className='w-full py-2 px-3 border border-gray-200 placeholder:text-gray-300' />
                    </label>

                    <label htmlFor="city">
                      <select name="city" id="city" className='w-full py-2 px-3 border border-gray-200 placeholder:text-gray-300'>
                        <option value="">City</option>
                        <option value="">Kolkata</option>
                        <option value="">Haydrabad</option>
                      </select>
                    </label>

                    <label  htmlFor="pCode">
                      <input type="text" id='pCode' placeholder='Post Code' className='w-full py-2 px-3 border border-gray-200 placeholder:text-gray-300' />
                    </label>

                    <label  htmlFor="State">
                      <select name="State" id="State" className='w-full py-2 px-3 border border-gray-200 placeholder:text-gray-300'>
                        <option value="">State</option>
                        <option value="">West Bengal</option>
                        <option value="">Bihar</option>
                      </select>
                    </label>

                  </form>
                  
                </div>
                <div className='border h-12 w-full bg-red-300'>
                  {/* <GoogleMap /> */}
                  
                  
                </div>
              </div>
           </div>
          
      </div>
    </div>
  )
}

export default Details