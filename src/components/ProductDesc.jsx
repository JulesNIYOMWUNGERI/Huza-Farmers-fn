/* eslint-disable no-unused-vars */
import React from 'react'

const features = [
    "- Windows Mobile® 6.1 Professional Edition",
    "- Qualcomm® MSM7201 400MHz Processor",
    "- 320x320 transflective colour TFT touchscreen",
    "- HSDPA/UMTS/EDGE/GPRS/GSM radio",
    "- Tri-band UMTS — 850MHz, 1900MHz, 2100MHz",
  ]

const ProductDesc = () => {
  return (
    <div className='flex flex-col w-full border border-[#E0DEDE] p-[20px] gap-[20px]'>
          <p className='font-[400] text-[14px] text-[#ABABAB] leading-normal'>
            Redefine your workday with the Palm Treo Pro smartphone. Perfectly balanced, you can respond to business and personal email, stay on top of appointments and contacts, and use Wi-Fi or GPS when 
            you’re out and about. Then watch a video on YouTube, catch up with news and sports on the web, or listen to a few songs. Balance your work and play the way you like it with the Palm Treo Pro.
          </p>

          <div className='flex flex-col'>
            <h1 className='font-[700] text-[16px] text-[#ABABAB] leading-normal'>Features</h1>

            <p className='flex flex-col font-[400] text-[14px] text-[#ABABAB] leading-normal'>
              {features.map((feature) => (
                <span key={feature}>
                  {feature}
                </span>
              ))}
            </p>
          </div>
    </div>
  )
}

export default ProductDesc