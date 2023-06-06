/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from '../components';
import { properties } from '../constants/index'

const inputPage = () => (
    <div className='bg-[#fff] m-0 p-0'>
      <div className='py-[20px] px-[30px]'>
        <h1 className='text-[30px] font-bold text-[#475569]'>Your Inputs Are Here</h1>
      </div>
      <div className='bg-[#CAD4E0] w-full h-[1px]'/>
      <div className='flex flex-row flex-wrap justify-center py-[10px]'>
        {properties.map((item) => (
          <Card data={item} key={item.id}/>
        ))}
      </div>
    </div>
  )

export default inputPage