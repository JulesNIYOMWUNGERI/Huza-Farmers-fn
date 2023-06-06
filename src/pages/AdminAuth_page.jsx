/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from "../style";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AdminAuth_page = () =>  {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <motion.div 
      className='bg-[#8f8f8f] w-screen h-[100vh] py-[60px] flex justify-center items-center'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
       <div className='w-[80%] h-auto py-[100px] bg-white rounded-xl flex flex-col items-center justify-center relative'>
       <div className={`${styles.flexCenter} ${styles.paddingX} flex-row flex-wrap gap-5 w-full h-auto`}>
     <div className='md:w-[40%] w-[90%'>
      <h1 className='font-bold text-[33px]'>{isSignIn ? 'WELCOME BACK TO ADMINISTRATION PAGE' : 'ADMIN REGISTRATION'}</h1>
      <p className={`text-center ${styles.paragraph2} ${styles.flexCenter} z-[10]`}> 
      {!isSignIn && "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, aut, dignissimos deserunt laborum consectetur est qui dolores sapiente,ullam earum facere vitae. Libero sed at corporis distinctio explicabo, mollitia magni?"}
      </p>
     </div>
     <div className='hidden sm:block h-[400px] w-[3px] bg-black'></div>
     <div className='md:w-[40%] w-[90%] h-auto'>
      <h1 className='font-semibold text-[30px]'>{isSignIn ? 'welcome back' : 'Join us.'}</h1>
      <form className='flex flex-col gap-5 mt-5 w-full h-auto'>
      {!isSignIn && (
        <>
          <input className='bg-transparent border-b-2 outline-none w-[100%]' type='text' placeholder='FirstName'/>
          <input className='bg-transparent border-b-2 outline-none w-[100%]' type='text' placeholder='LastName'/>
          <input className='bg-transparent border-b-2 outline-none w-[100%]' type='number' placeholder='Phone No'/>
        </>
      )}
        <input className='bg-transparent border-b-2 outline-none w-[100%]' type='email' placeholder='Email'/>
        <input className='bg-transparent border-b-2 outline-none w-[100%]' type='password' placeholder='Password'/>
        <input className='bg-transparent border-b-2 outline-none w-[100%]' type='password' placeholder='ComfirmPassword'/>
        {!isSignIn && (
          <input className='bg-transparent border-b-2 outline-none w-[100%]' type='number' placeholder='AdminCode'/>
        )}
        {/* <Link className='w-full' to='/customer/products'> */}
           <button type="button" className={`w-full py-2 px-5 font-poppins font-medium text-[18px] text-primary bg-green-gradient rounded-[10px] outline-none cursor-pointer`}>
             SignUp
           </button>
        {/* </Link> */}
        <div className='flex justify-center items-center'><span>{!isSignIn ? "Allready have an account?" : "Do not have an account?" }</span> <span onClick={() => setIsSignIn(!isSignIn)} className='underline cursor-pointer'>{!isSignIn ? "SignIn" : "SignUp"}</span></div>
      </form>
     </div>
   </div>
       </div>
    </motion.div>
  )}

export default AdminAuth_page