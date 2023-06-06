/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from '../components';
import { properties } from '../constants/index'

const inputPage = () => (
    <div className='bg-[#8f8f8f] m-0 p-0'>
      <div className='flex flex-row flex-wrap justify-center'>
        {properties.map((item) => (
          <Card data={item} key={item.id}/>
        ))}
      </div>
    </div>
  )

export default inputPage