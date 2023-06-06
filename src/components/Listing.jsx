/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion";

const Listing = ({ data }) => {
    const { 
        imageUrl, title, address, description 
    } = data;

    return (
       <div className='listing'>
        <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-[#fff] rounded-[10px] overflow-hidden '>
            <div className='w-[100%] h-[65%] overflow-hidden'>
               <img
                  className='w-[100%] h-[100%] object-cover rounded-[10px]'
                  alt="real estate mansion"
                  src={imageUrl}
               />
            </div>
            <div className='h-[35%] flex flex-col justify-evenly flex-start py-0 px-[25px] relative'>
                <h1 className='font-bold '>{title}</h1>
                <div className='absolute text-[0.8rem] right-[10px] top-[2px] bg-green-300 px-[5px] py-[2px] rounded-[10px]'>100 feedbacks</div>
                <p className='h-50% overflow-hidden text-[13px] text-[#00000079]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, error?    similique, cum dolorum eligendi at.</p>
            </div>
        </div>
       </div>
    )
}

export default Listing