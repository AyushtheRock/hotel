import React from 'react'

const Details = () => {
  
  return (
    <div  className='flex flex-col py-4 '>
      <div className='flex flex-col'>
        <div className='flex flex-col py-2 border-b'>
          <h1 className='text-2xl'>Basic Details</h1>
            <div className='sm:flex flex-col md:grid grid-cols-3 gap-4 py-3'>
              <div className='' >
                <p>Property Name</p>
                <input className='w-full px-3 rounded bg-gray-100 dark:dark:bg-[#071025] h-10' type="text"  placeholder='Enter your property name' />
              </div>
              <div> 
                  <p>Currency</p>
                  <select className='w-full px-3 rounded bg-gray-100 dark:bg-[#071025]  text-[#A3A3A3] h-10 '  >
                    <option value="">Select currency</option>
                  </select>
               </div>
                <div>
                    <p>Property Type</p>
                    <select className='w-full px-3 rounded bg-gray-100 dark:bg-[#071025]  text-[#A3A3A3] h-10'>
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
                    <input className='w-full px-3 rounded bg-gray-100 dark:bg-[#071025] h-10 ' type="text"  placeholder='Enter your property name' />
                  </div>
                  <div>
                      <p>Currency</p>
                      <select className='w-full px-3 rounded bg-gray-100 dark:bg-[#071025]  text-[#A3A3A3] h-10 '  >
                        <option value="">Select currency</option>
                      </select>
                  </div>
                    <div>
                        <p>Property Type</p>
                        <select className='w-full px-3 rounded bg-gray-100 dark:bg-[#071025]  text-[#A3A3A3] h-10 '>
                          
                          <option value="">Select property type</option>
                        </select>
                    </div>
                  <div>
                  </div>
                </div>
        
          <div>
           <div className='flex flex-col border-t py-2'>
            <p className='text-2xl'>Location Details</p>
              <div className='sm:flex flex-col md:grid grid-cols-3 gap-4 py-3'>
                <div>
                  <p>Location</p>
                  <input  className='w-full px-3 rounde bg-gray-100 dark:bg-[#071025] h-10 ' type="text" placeholder='Enter address' />
                </div>
              </div>
           </div>
          </div>
         
        </div>






      </div>
    </div>
  )
}

export default Details