/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt} from 'react-icons/fa' 
import image from '../assets/92256048.webp'
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
  return (
    <div className='flex justify-evenly  bg-[#fff] w-[300px] h-[320px] product_card_boxShadow relative'>
        <div key={data.id} className="w-full relative overflow-hidden flex justify-center p-1">
            <img src={image} alt="/" className='mt-[2rem] max-w-[100%] h-[60%]'/>

            <FaRegBookmark className='absolute top-2 right-2'/>
            <FaFireAlt className='absolute top-2 left-2'/>

            <Link to={`/product/${data?.id}`} className='flex flex-col gap-3 bg-[#d4d4d400] hover:top-[0px] transform duration-300 absolute top-[35px] w-[100%] px-[10px] h-full justify-end'>
                <div className='bg-[#fff] flex flex-col gap-3 pb-[15px] rounded-sm'>
                    <h3 className='text-[1.5rem] font-bold'>{data.title}</h3>
                    <div className='flex justify-between items-center'>
                        <div className='text-[1rem] font-bold'>{data.price} rwf</div>
                        <div className='text-[1.1rem]'>{data.quantity} t</div>
                    </div>
                    <div className='cursor-pointer'>
                        <h1 className='flex items-center gap-[5px] font-[700] text-[13px]'>ADD TO CART <span><MdArrowRightAlt className='w-[30px] h-[30px]' /></span></h1>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default ProductCard