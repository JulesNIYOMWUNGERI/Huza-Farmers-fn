/* eslint-disable no-unused-vars */
import React from 'react'
import Training_card from '../components/Training_card'
import { TrainingProperities } from '../constants/index'

const trainingPage = () => (
  <div className='bg-[#8f8f8f] m-0 p-0'>
  <div className='flex flex-row flex-wrap justify-center'>
    {TrainingProperities.map((item) => (
      <Training_card data={item} key={item.id}/>
    ))}
  </div>
</div>
  )

export default trainingPage