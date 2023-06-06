/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt} from 'react-icons/fa' 
import image from '../assets/images/Studio_Project_V1.png'

const ProductCard = ({ data }) => {
  return (
    <div className='flex justify-evenly bg-[#d0d0d0] w-[300px]'>
        <div key={data.id} className="w-full relative p-1">
            <img src={image} alt="/" className='mt-[2rem] max-w-[100%] h-auto'/>

            <FaShoppingCart className='absolute top-2 right-2'/>
            <FaRegBookmark className='absolute top-2 right-8'/>
            <FaFireAlt className='absolute top-2 left-2'/>

            <div className='m-[5px] flex flex-col gap-3'>
                <h3 className='text-[1.5rem] font-bold'>{data.title}</h3>
                <div className='flex justify-between items-center'>
                    <div className='text-[1rem] font-bold'>{data.price} rwf</div>
                    <div className='text-[1.1rem]'>{data.quantity} t</div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-row'>
                        {[...Array(data.rating)].map((index) => (
                            <FaStar id={index +1 } key={index} />
                        ))}
                    </div>
                    <div className='text-[15px] text-[#00000075]'>
                        {data.category}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard