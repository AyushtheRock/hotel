import React from 'react'
import { assests } from '../../assets/assests'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
export const Content = () => {

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 15,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: '#1890ff',
              ...theme.applyStyles('dark', {
                backgroundColor: '#177ddc',
              }),
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
          width: 12,
          height: 12,
          borderRadius: 6,
          transition: theme.transitions.create(['width'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor: 'rgba(0,0,0,.25)',
          boxSizing: 'border-box',
          ...theme.applyStyles('dark', {
            backgroundColor: 'rgba(255,255,255,.35)',
          }),
        },
      }));

  return (
    <div className='py-4'>
        <div className='py-4 border-b'>
            <p className='text-2xl'>Basic Details</p>
            <div className='pt-8'>
                <div className='sm:flex flex-col md:grid grid-cols-[1.5fr_5fr_5fr] gap-4'>
                    <div className=' rounded border border-dashed border-black dark:border-white px-2 py-2'>
                            <label htmlFor="Upload Image"  className='cursor-pointer flex flex-col items-center justify-center'>
                                <img className='w-8 dark:invert ' src={assests.cloud_upload} alt="" />
                                <p className='text-sm'>Upload Image</p>
                            </label>
                                <input type="file" id='Upload Image' hidden/>
                    </div>
                    
                    <div>
                        <p>Description</p>
                        <textarea  className='w-full  px-2  bg-gray-100 dark:bg-[#071025]'  type="text" placeholder='Enter description' rows={2} />
                    </div>

                    <div>
                        <p>Enter Information</p>
                        <textarea   className='w-full px-2  bg-gray-100 dark:bg-[#071025]' type="text" placeholder='Enter extra information' rows={2} />
                    </div>
                </div>
            </div>
        </div>

        <div className='py-4 border-b'>
            <p className='text-xl'>Facilities</p>
            <div className='py-4'>
                <p>Facilities</p>
                <select className='w-1/2  rounded bg-gray-100 dark:bg-[#071025]  text-[#A3A3A3] h-10 px-2'>
                    <option value="">select an option</option>
                </select>
            </div>
        </div>

        <div className='py-4' >
            <p  className='text-xl'>Extra Details</p>
            <div className='sm:flex flex-col md:grid grid-cols-3 gap-4 py-4 '>
                <div className=''>
                    <p>Permissions</p>
                    <select className='w-full rounded bg-gray-100 dark:bg-[#071025]  text-[#A3A3A3] h-10 px-2' >
                        <option value="">Enter address</option>
                    </select>
                </div>
                <div >
                    <p>Is Parking Space Available</p> 
                        <select className='w-full rounded bg-gray-100 dark:bg-[#071025]  text-[#A3A3A3] h-10 px-2' >
                            <option value="">No</option>
                        </select>
                </div>
                <div className='flex items-center'>
                    <FormGroup><Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                        <Typography>Couple Friendly</Typography>
                        </Stack>
                    </FormGroup>
                    
                </div>
            </div>

        </div>

    </div>
  )
}
