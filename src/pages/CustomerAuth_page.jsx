/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { Link } from 'react-router-dom';

const CustomerAuth_page = () => (
  <motion.div 
  className='bg-[#8f8f8f] w-screen h-auto py-[78px] flex justify-center items-center'
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
<div className='w-[80%] h-auto py-[100px] sm:py-[150px] bg-white rounded-xl flex flex-col items-center justify-center relative'>
   <div className={`${styles.flexCenter} ${styles.paddingX} flex-row flex-wrap gap-5 w-full h-auto`}>
     <div className='md:w-[40%] w-[90%'>
      <h1 className='font-bold text-[33px]'>JOIN US AS A CUSTOMER</h1>
      <p className={`text-center ${styles.paragraph2} ${styles.flexCenter} z-[10]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Adipisci, aut, dignissimos deserunt laborum consectetur est qui dolores sapiente, 
        ullam earum facere vitae. Libero sed at corporis distinctio explicabo, mollitia magni?
      </p>
     </div>
     <div className='hidden sm:block h-[400px] w-[3px] bg-black'></div>
     <div className='md:w-[40%] w-[90%] h-auto'>
      <h1 className='font-semibold text-[30px]'>Join us.</h1>
      <form className='flex flex-col gap-5 mt-5 w-full h-auto'>
        <input className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='FirstName'/>
        <input className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='LastName'/>
        <input className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='Phone No'/>
        <input className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='Email'/>
        <input className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='Password'/>
        <input className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='ComfirmPassword'/>
        <Link className='w-full' to='/customer/products'>
           <button type="button" className={`w-full py-2 px-5 font-poppins font-medium text-[18px] text-primary bg-green-gradient rounded-[10px] outline-none cursor-pointer`}>
             SignUp
           </button>
        </Link>
      </form>
     </div>
   </div>
</div>
</motion.div>
  )

export default CustomerAuth_page