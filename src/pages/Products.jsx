/* eslint-disable no-unused-vars */
import React from 'react';
import {ProductCard} from '../components';
import { productDatas } from '../constants/index'

const Products = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[20px] '>
      <div className='w-full h-[500px] image-background bg-center bg-no-repeat flex flex-row flex-wrap justify-between items-center gap-5'>
        <div className='w-full h-full flex items-center justify-start px-[50px] blur_effect'>
          <div className='w-[47%]'>
            <h1 className='text-[30px] font-extrabold w-full'>FIND YOUR PRODUCT HERE</h1>
            <p className='text-[#ffffffd1] font-[700]'>On our patform we have many product of defferent type and you can choose all you want based on your choice, and here is the search bar where you can choose based on your choice.</p>
            <form className='flex flex-row mt-3 w-[80%]'>
              <input type='text' placeholder='search' className='p-[6px] w-full outline-none'/>
              <button className='py-[6px] px-[15px] bg-[#021932] text-white text-[12px] font-[700] cursor-pointer'>search</button>
            </form>
          </div>
        </div>
      </div>
      <div className='flex flex-row flex-wrap justify-center items-center gap-[30px] p-8'>
        {productDatas.map((product) => (
          <div key={product.id} className='flex flex-row flex-wrap justify-center items-center'>
            <ProductCard data={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products