/* eslint-disable no-unused-vars */
import React from 'react';
import {ProductCard} from '../components';
import { productDatas } from '../constants/index'

const Products = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[100px] mt-[5rem] px-10'>
      <div className='w-full h-[500px] bg-green-700 rounded-[10px] flex flex-row flex-wrap justify-between items-center gap-5 px-[50px]'>
        <div className='w-[47%]'>
          <h1 className='text-[30px] font-extrabold w-full'>FIND YOUR PRODUCT HERE</h1>
          <p className='text-[#ffffff60]'>On our patform we have many product of defferent type and you can choose all you want based on your choice, and here is the search bar where you can choose based on your choice.</p>
          <form className='flex flex-row mt-3 w-[80%]'>
            <input type='text' placeholder='search' className='p-[6px] w-full outline-none'/>
            <button className='p-[6px] bg-green-600'>search</button>
          </form>
        </div>
        <div className='w-[47%]'>
          <img className='w-[80%] border-[10px] border-black' src='https://media.istockphoto.com/id/531161219/photo/farmer-with-a-basket-of-oranges.jpg?s=612x612&w=0&k=20&c=w6say2YmgLWBV0qMPPGLovSjBq2OSnxtYA-3BBU7fbk=' alt='/' />
        </div>
      </div>
      <div className='flex flex-row flex-wrap justify-start items-center gap-[30px] px-8'>
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