/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';

import { motion } from 'framer-motion';

const Auth_page = () => (
    <motion.div 
      className='bg-white overflow-scroll relative w-screen flex justify-center z-[3] h-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='bg-[#021932] h-1/2 w-full'></div>
       <div className='w-[80%] shadow-lg absolute top-[60px] h-auto py-[100px] bg-white rounded-xl flex flex-col items-center justify-center z-[2] overflow-hidden'>
         <h1 className={`${styles.heading1} ${styles.flexCenter} z-[10]`}>Let's get started!</h1>
         <p className={`text-center ${styles.paragraph2} ${styles.flexCenter} z-[10]`}>
            There are two ways of regitering on our platform, the first one is registering<br/>
            as a farmer, other one is registering as a customer who need a place to easly find<br/>
            agriculture yield
         </p>
         <div className={`${styles.flexCenter} ${styles.paddingX} flex-row flex-wrap gap-5 w-full z-[10]`}>
            <div className={`md:w-[40%] w-[100%] ${styles.paddingY} flex flex-col gap-10 bg-gray-50 ${styles.flexCenter} overflow-hidden`}>
                <h1 className='text-[25px] font-semibold'>Register as a customer</h1>
                <p className='text-center text-[#8f8f8f] font-poppins'>Register as a customer will help you to find the best agriculture yield</p>
                <Link to='/auth/CustomerAuth'>
                   <motion.button whileHover={{ scale: 1.1 }} type="button" className={`py-2 px-5 font-poppins font-medium text-[18px] text-white bg-[#021932] rounded-[10px] outline-none cursor-pointer`}>
                       Register now
                   </motion.button>
                </Link>
            </div>
            <div className='hidden sm:block h-[90%] w-[3px] bg-black z-[100]'></div>
            <div className={`md:w-[40%] w-[100%] ${styles.paddingY} flex flex-col gap-10 bg-gray-50 ${styles.flexCenter}`}>
                <h1 className='text-[25px] font-semibold'>Register as a farmer</h1>
                <p className='text-center text-[#8f8f8f] font-poppins'>Register as a farmer will help you to find the best agriculture inputs as well as a market of your yield</p>
                <Link to='/auth/FarmerAuth'>
                   <motion.button whileHover={{ scale: 1.1 }} type="button" className={`py-2 px-5 font-poppins font-medium text-[18px] text-white bg-[#021932] rounded-[10px] outline-none cursor-pointer`}>
                     Register now
                   </motion.button>
                </Link>
            </div>
         </div>
         {/* <Link to='/auth/AdminAuth'>
           <motion.button whileHover={{ scale: 1.1 }} type="button" className={`py-2 px-5 font-poppins font-medium text-[18px] text-primary underline rounded-[10px] outline-none cursor-pointer absolute top-1 right-1`}>
               Admin only
           </motion.button>
         </Link> */}
         {/* <div className='w-full h-[608px] bg-green-500 z-[-1] absolute top-[-340px] right-[92px] rounded-[55%]'></div> */}
         {/* <div className='bg-[#021932] h-[170px] w-full z-[-1] absolute right-0 top-0'></div> */}
         {/* <div className='w-[400px] h-[400px] rounded-[50%] bg-white z-[-1] absolute right-[-80px] top-[125px] rotate-45'></div> */}
       </div>
    </motion.div>
  )

export default Auth_page