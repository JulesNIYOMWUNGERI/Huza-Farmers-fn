/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Training_listing = ({ data }) => {
    const { 
        imageUrl, title, address, description 
    } = data;
  return (
    <div className='product_listing'>
        <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-white rounded-[10px] overflow-hidden'>
          <div className='w-[100%] h-[65%] overflow-hidden'>
               <img
                  className='w-[100%] h-[100%] object-cover'
                  alt="real estate mansion"
                  src={imageUrl}
               />
          </div>
          <div className='p-[15px] overflow-hidden h-[35%]'>
             <div className='px-[1px] flex flex-row justify-between relative'>
               <h1 className='text-black font-bold text-[20px] '>{title}</h1>
               <span className='absolute text-[0.8rem] right-[10px] top-[2px] bg-red-200 px-[5px] py-[2px] rounded-[10px]'>100 feedbacks</span>
             </div>
             <p className='h-[80%] overflow-hidden text-[#00000079] text-[13px]'>{description}</p>
          </div>
        </div>
    </div>
  )
}

export default Training_listing