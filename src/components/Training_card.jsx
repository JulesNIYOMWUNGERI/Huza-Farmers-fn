/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Training_listing from './Training_listing'

const Training_card = ({ data }) => {
  return (
    <>
      <Training_listing data={data}/>
    </>
  )
}

export default Training_card