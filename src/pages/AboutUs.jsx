/* eslint-disable no-unused-vars */
import React from 'react'
import { 
  songa,
  natacha,
  jules,
  rehema,
  paul,
  cedric 
} from '../assets'

const AboutUs = () => (
    <div className='flex flex-col w-full h-auto'>
      <div className='w-full flex justify-center items-center bg-[#ffffff] py-[50px] boxShadow'>
        <h1 className='font-bold text-[35px]'>About us</h1>
      </div>
      <div className='flex flex-row flex-wrap justify-center items-start gap-10 p-10 boxShadow2'>
        <div className='flex flex-col justify-center items-center gap-3 max-w-[420px] min-w-[350px]'>
          <h1 className='font-[400] text-[35px] text-[#4d4d4d]'>About The Company</h1>
          <p className='text-[18px] text-[#4d4d4d]'>
            At HF, we are passionate about revolutionizing agriculture and empowering farmers worldwide with a 
            focus on sustainable practices and innovative solutions, 
            we provide high-quality inputs, comprehensive services, and fair market access for farmers, 
            our collaborative approach fosters thriving communities and drives positive change in the agriculture industry.
          </p>
          <p className='text-[18px] text-[#4d4d4d] font-[600]'>
            Join us on this journey as we cultivate growth, unlock potential, and shape a more prosperous future for farmers.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 max-w-[420px] min-w-[350px]'>
          <h1 className='font-[400] text-[35px] text-[#4d4d4d]'>Our Vision</h1>
          <p className='text-[18px] text-[#4d4d4d]'>
            To be a leading catalyst in transforming agriculture, driving sustainable practices, 
            and fostering prosperity for farmers worldwide. we envision a future where every farmer 
            has access to innovative solutions, a fair market, and thriving rural communities.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 max-w-[420px] min-w-[350px]'>
          <h1 className='font-[400] text-[35px] text-[#4d4d4d]'>Our Mission</h1>
          <p className='text-[18px] text-[#4d4d4d]'>
            Empowering farmers with quality agricultural inputs, service, and a fair online market, 
            driving sustainable, profitable agriculture through expertise innovation, and partnerships. 
            fostering rural development, preserving resources, and promoting equity. creating long-term value, 
            prioritizing excellence, satisfaction, employee well-being, and community prosperity.
          </p>
        </div>
        <div className='h-auto py-[100px] px-[20px] flex flex-col justify-center items-center gap-5 border-t-[1px] border-solid border-black'>
            <div className='flex flex-col gap-3 justify-center items-center w-full '>
              <h1 className='font-bold text-[35px] text-[#4d4d4d]'>Meet our team!</h1>
              <p className='font-[600] text-[#4d4d4d]'>BEHIND EVERY GREAT PRODUCT, THERE IS A GREAT TEAM</p>
            </div>
            <div className='w-full py-[30px] flex flex-row flex-wrap justify-center items-center gap-3'>
              <div className='flex flex-col justify-center items-center gap-3 min-w-[200px] w-[30%] '>
                <img src={natacha} className='w-[150px] h-[150px] rounded-[50%]'  />
                <div className='flex flex-col justify-center items-center gap-1'>
                  <h1 className='font-bold text-[#4d4d4d]'>ASHIMWE Anne Natacha</h1>
                  <h2 className='font-[600] text-[#4d4d4d]'>(CEO)</h2>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-3 min-w-[200px] w-[30%]'>
                <img src={rehema} className='w-[150px] h-[150px] rounded-[50%]'  />
                <div className='flex flex-col justify-center items-center gap-1'>
                  <h1 className='font-bold text-[#4d4d4d]'>UMUHOZA Rehema</h1>
                  <h2 className='font-[600] text-[#4d4d4d]'>(Purchasing & Marketing Manager)</h2>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-3 min-w-[200px] w-[30%] '>
                <img src={jules} className='w-[150px] h-[150px] rounded-[50%]'  />
                <div className='flex flex-col justify-center items-center gap-1'>
                  <h1 className='font-bold text-[#4d4d4d]'>Jules NIYOMWUNGERI</h1>
                  <h2 className='font-[600] text-[#4d4d4d]'>(IT technologist)</h2>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-3 min-w-[200px] w-[30%]'>
                <img src={cedric} className='w-[150px] h-[150px] rounded-[50%]'  />
                <div className='flex flex-col justify-center items-center gap-1'>
                  <h1 className='font-bold text-[#4d4d4d]'>UWITONZE Cedric</h1>
                 <h2 className='font-[600] text-[#4d4d4d]'>(Extensionist Promoter)</h2>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-3 min-w-[200px] w-[30%]'>
                <img src={paul} className='w-[150px] h-[150px] rounded-[50%]'  />
                <div className='flex flex-col justify-center items-center gap-1'>
                  <h1 className='font-bold text-[#4d4d4d]'>NISINGIZWE Jean Paul</h1>
                  <h2 className='font-[600] text-[#4d4d4d]'>(Farm Manager)</h2>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-3 min-w-[200px] w-[30%] '>
                <img src={songa} className='w-[150px] h-[150px] rounded-[50%]'  />
                <div className='flex flex-col justify-center items-center gap-1'>
                 <h1 className='font-bold text-[#4d4d4d]'>RUHIMBAZA Songa</h1>
                  <h2 className='font-[600] text-[#4d4d4d]'>(Finance manager)</h2>
                </div>
              </div>
            </div>
         </div>
      </div>
      <div className='h-auto py-[50px] px-[20px] flex flex-col justify-center items-center gap-5'>
      </div>
    </div>
  )

export default AboutUs