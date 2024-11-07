import React, { useState } from 'react'
import { assests } from '../assets/assests.js'
import Details from '../components/Properties/DetailsProp.jsx'
import Settings from '../components/Properties/Settings.jsx'
import { Content } from '../components/Properties/Content.jsx'
import Photos from '../components/Properties/Photos.jsx'
import Policies from '../components/Properties/Policies.jsx'
import Tax from '../components/Properties/Tax.jsx'
import {NavLink} from 'react-router-dom'

const PropertiesForm = ({ darkMode = false }) => {

    const [showDetails, setShowDetails] = useState(localStorage.getItem('showDetails') || 'Details')

    const bgColor = darkMode ? 'bg-gray-800' : 'bg-white';
    const textColor = darkMode ? 'text-white' : 'text-gray-800';
    const handleChange = (e) => {
        localStorage.setItem('showDetails', e)
        setShowDetails(e)
    } 

  return (
    <div className='px-3 sm:px-10  bg-[#F9F9F9] dark:text-white  dark:bg-[#080F26] mb-6'>
       <div className=''>
            <div className='flex  justify-between items-center w-full h-20'>
                    <div className='flex items-center gap-3'>
                        <NavLink className='p-2 bg-transparent dark:bg-[#0B1739] dark:text-white' to={'/properties'}><img className='w-6 dark:invert' src={assests.back_icon} alt="" /></NavLink>
                        <p className='sm:text-2xl text-black dark:text-white text-xl'>Edit Property</p>
                    </div> 
                    <div className='items-center gap-3 hidden sm:flex'>
                        <button className='border px-5 py-1 rounded dark:text-gray-200'>Cancel</button>
                        <button className='border px-5 py-1 rounded dark:bg-[#9828d0] dark:text-white'>Save</button>
                    </div>
                </div>
            <div>
                <div className='border rounded border-black dark:border-white  max-h-fit'>
                    <ul className='sm:flex flex-row gap-2 pt-3 bg-[#D9D9D9]  dark:bg-[#071025] px-2 flex-wrap hidden '>
                        <button onClick={(e)=>handleChange(e.target.value)} value='Details' className={`${showDetails === 'Details' ? 'border  border-transparent rounded px-4 py-1 bg-white dark:bg-[#0c1c41]' : 'border  border-transparent rounded px-4 py-1'}`} >Details</button>
                        <button onClick={(e)=>handleChange(e.target.value)} value='Content' className={`${showDetails === 'Content' ? 'border  border-transparent rounded px-4 py-1 bg-white dark:bg-[#0c1c41]' : 'border  border-transparent rounded px-4 py-1'}`} >Content</button>
                        <button onClick={(e)=>handleChange(e.target.value)} value='Settings' className={`${showDetails === 'Settings' ? 'border  border-transparent rounded px-4 py-1 bg-white dark:bg-[#0c1c41]' : 'border  border-transparent rounded px-4 py-1'}`} >Settings</button>
                        <button onClick={(e)=>handleChange(e.target.value)} value='Photos' className={`${showDetails === 'Photos' ? 'border  border-transparent rounded px-4 py-1 bg-white dark:bg-[#0c1c41]' : 'border  border-transparent rounded px-4 py-1'}`} >Photos</button>
                        <button onClick={(e)=>handleChange(e.target.value)} value='Policies' className={`${showDetails === 'Policies' ? 'border  border-transparent rounded px-4 py-1 bg-white dark:bg-[#0c1c41]' : 'border  border-transparent rounded px-4 py-1'}`} >Policies</button>
                        <button onClick={(e)=>handleChange(e.target.value)} value='Tax' className={`${showDetails === 'Tax' ? 'border  border-transparent rounded px-4 py-1 bg-white dark:bg-[#0c1c41]' : 'border  border-transparent rounded px-4 py-1'}`} >Tax Sets</button>
                    </ul>
                    <label htmlFor="details" className='sm:hidden    '>
                        <select name="" id="" onClick={(e)=>handleChange(e.target.value)} className='py-2 px-3  bg-[#D9D9D9]  dark:bg-[#071025] w-full rounded-md'>
                            <option  value="Details">Details</option>
                            <option  value="Content">Content</option>
                            <option  value="Settings">Settings</option>
                            <option  value="Photos">Photos</option>
                            <option  value="Policies">Policies</option>
                            <option  value="Tax">Tax Sets</option>
                        </select>
                    </label>
                    <div className='px-4 bg-white dark:bg-[#0c1c41]    sm:overflow-y-scroll '>
                        {
                            showDetails === 'Details'? <Details /> : ''
                        }
                        {
                            showDetails === 'Content'? <Content /> : ''
                        }
                        {
                            showDetails === 'Settings'? <Settings /> : ''
                        }
                        {
                            showDetails === 'Photos'? <Photos /> : ''
                        }
                        {
                            showDetails === 'Policies'? <Policies /> : ''
                        }
                        {
                            showDetails === 'Tax'? <Tax /> : ''
                        }
                    </div>
                </div>
            </div>
            <div className='items-center flex justify-between mt-4 gap-3  sm:hidden'>
                        <button className='border px-5 py-1 rounded dark:text-gray-200'>Cancel</button>
                        <button className='border px-5 py-1 rounded dark:bg-[#9828d0] dark:text-white'>Save</button>
                    </div>
       </div>
    </div>
  )
}

export default PropertiesForm