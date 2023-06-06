/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const AdminAuth_page = () =>  (
    <motion.div 
      className='bg-[#8f8f8f] w-screen h-auto py-[60px] flex justify-center items-center'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
       <div className='w-[80%] h-auto py-[100px] bg-white rounded-xl flex flex-col items-center justify-center relative'>
         {/* <h1 className={`${styles.heading1} ${styles.flexCenter}`}>Let's get started!</h1>
         <p className={`text-center ${styles.paragraph2} ${styles.flexCenter}`}>
            There are two ways of regitering on our platform, the first one is registering<br/>
            as a farmer, other one is registering as a customer who need a place to easly find<br/>
            agriculture yield
         </p>
         <div className={`${styles.flexCenter} ${styles.paddingX} flex-row flex-wrap gap-5 w-full`}>
            <div className={`md:w-[40%] w-[100%] ${styles.paddingY} flex flex-col gap-10 bg-gray-50 ${styles.flexCenter}`}>
                <h1 className='text-[25px] font-semibold'>Register as a customer</h1>
                <p className='text-center text-[#8f8f8f] font-poppins'>Register as a customer will help you to find the best agriculture yield</p>
                <Link to='/auth/CustomerAuth'>
                   <button type="button" className={`py-2 px-5 font-poppins font-medium text-[18px] text-primary bg-green-gradient rounded-[10px] outline-none cursor-pointer`}>
                       Regester now
                   </button>
                </Link>
            </div>
            <div className='hidden sm:block h-[90%] w-[3px] bg-black'></div>
            <div className={`md:w-[40%] w-[100%] ${styles.paddingY} flex flex-col gap-10 bg-gray-50 ${styles.flexCenter}`}>
                <h1 className='text-[25px] font-semibold'>Register as a farmer</h1>
                <p className='text-center text-[#8f8f8f] font-poppins'>Register as a farmer will help you to find the best agriculture inputs as well as a market of your yield</p>
                <Link to='/auth/FarmerAuth'>
                   <button type="button" className={`py-2 px-5 font-poppins font-medium text-[18px] text-primary bg-green-gradient rounded-[10px] outline-none cursor-pointer`}>
                     Regester now
                   </button>
                </Link>
            </div>
         </div>
         <Link to='/auth/AdminAuth'>
           <button type="button" className={`py-2 px-5 font-poppins font-medium text-[18px] text-primary underline rounded-[10px] outline-none cursor-pointer absolute top-1 right-1`}>
               Admin only
           </button>
         </Link> */}
       </div>
    </motion.div>
  )

export default AdminAuth_page