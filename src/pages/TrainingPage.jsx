/* eslint-disable no-unused-vars */
import React from 'react'
import Training_card from '../components/Training_card'
import { TrainingProperities } from '../constants/index'

const trainingPage = () => (
  <div className='bg-[#fff] m-0 p-0'>
    <div className='py-[20px] px-[30px]'>
        <h1 className='text-[30px] font-bold text-[#475569]'>Follow These Trainings for Better Production</h1>
    </div>
    <div className='bg-[#CAD4E0] w-full h-[1px]'/>
    <div className='flex flex-row flex-wrap justify-center py-[10px]'>
      {TrainingProperities.map((item) => (
        <Training_card data={item} key={item.id}/>
      ))}
    </div>
</div>
  )

export default trainingPage