/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { navLinks,socialMedia } from '../constants';
import { Link } from 'react-router-dom';

const ContactUs = () => (
    <motion.div 
  className='bg-[#8f8f8f] w-screen h-auto py-[70px] flex justify-center items-center'
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
<div className='w-[80%] h-auto py-[100px] sm:py-[120px] bg-white rounded-xl flex flex-col items-center justify-center relative'>
   <div className={`${styles.flexCenter} ${styles.paddingX} flex-row flex-wrap gap-5 w-full h-auto`}>
     <div className='md:w-[40%] w-[90%'>
      <div className='flex flex-col justify-start items-start gap-10'>
          {socialMedia.map((social, index) => (
            <div className='flex flex-row gap-5' key={social.id}>
            <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className='bg-green-600 px-[30px] py-[10px] cursor-pointer'
                  onClick={() => window.open(social.link)} />
                <p className='py-[10px] text-[#4e4e4e84]'>contact us by {social.title}</p>
                </div>
           ))}
      </div>
     </div>
     <div className='hidden sm:block h-[400px] w-[3px] bg-black'></div>
     <div className='md:w-[40%] w-[90%] h-auto'>
      <h1 className='font-semibold text-[30px]'>contact us.</h1>
      <form className='flex flex-col gap-5 mt-5 w-full h-auto'>
        <input className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='Your Name'/>
        <input className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='Your Email'/>
        <input className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='Your Phone No'/>
        <textarea className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='Your message' rows={7}/>
        <Link className='w-full' to='/farmer/inputPage'>
           <button type="button" className={`w-full py-2 px-5 font-poppins font-medium text-[18px] text-primary bg-green-gradient rounded-[10px] outline-none cursor-pointer`}>
             Send Message
           </button>
        </Link>
      </form>
     </div>
   </div>
</div>
</motion.div>
  )

export default ContactUs