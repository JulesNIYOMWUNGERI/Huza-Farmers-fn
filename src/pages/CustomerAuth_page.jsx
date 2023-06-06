/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signUp } from '../redux/api/customer';

const CustomerAuth_page = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);
  const [customerData, setCustomerData] = useState({
    firstname: '', lastname: '', phoneNo: '', Email: '', Password: '', comfirmPassword: '', userRole: 'customer'
  });

  const {
    successCondition, farmerInfo, error, pending,
  } = useSelector((state) => state.customer);

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isSignIn) {
      signIn(customerData, dispatch, setCustomerData, navigate)
    } else {
      console.log(customerData)
      signUp(customerData, dispatch, setCustomerData)
    }
  };

  return (
  <motion.div 
    className='bg-white overflow-scroll relative w-screen flex justify-center z-[3] h-screen'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className='bg-[#021932] h-1/2 w-full'></div>
    <div className='w-[80%] shadow-lg absolute h-auto py-[70px] top-[100px] bg-white rounded-xl flex flex-col items-center justify-center'>
      <div className={`${styles.flexCenter} ${styles.paddingX} flex-row flex-wrap gap-5 w-full h-auto`}>
        <div className='md:w-[40%] w-[90%'>
          <h1 className='font-bold text-[33px]'>{isSignIn ? 'WELCOME BACK TO HUZA FARMER': 'JOIN US AS A CUSTOMER'}</h1>
          <p className={`text-center ${styles.paragraph2} ${styles.flexCenter} z-[10]`}>
            {!isSignIn && "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, aut, dignissimos deserunt laborum consectetur est qui dolores sapiente,ullam earum facere vitae. Libero sed at corporis distinctio explicabo, mollitia magni?"}
          </p>
        </div>
        <div className='hidden sm:block h-[400px] w-[3px] bg-black'></div>
        <div className='md:w-[40%] w-[90%] h-auto'>
          <h1 className='font-semibold text-[30px]'>Join us.</h1>
          <form className='flex flex-col gap-5 mt-5 w-full h-auto'>
          {!isSignIn && (
            <>
              <input className='bg-transparent border-b-2 outline-none w-[100%]' name='firstname' type='text' value={customerData.firstname} placeholder='FirstName' onChange={handleChange}/>
              <input className='bg-transparent border-b-2 outline-none w-[100%]' name='lastname' type='text' value={customerData.lastname} placeholder='LastName' onChange={handleChange}/>
              <input className='bg-transparent border-b-2 outline-none w-[100%]' name='phoneNo' type='number' value={customerData.phoneNo} placeholder='Phone No' onChange={handleChange}/>
            </>
          )}
            <input className='bg-transparent border-b-2 outline-none w-[100%]' name='Email' type='email' value={customerData.Email} placeholder='Email' onChange={handleChange}/>
            <input className='bg-transparent border-b-2 outline-none w-[100%]' name='Password' type='password' value={customerData.Password} placeholder='Password' onChange={handleChange}/>
            <input className='bg-transparent border-b-2 outline-none w-[100%]' name='comfirmPassword' type='password' value={customerData.comfirmPassword} placeholder='ComfirmPassword' onChange={handleChange}/>
            {/* <span className='w-full flex justify-center items-center text-[#5bc760]'>{pending ? 'loading...' : null}</span> */}
            <motion.button whileHover={{ scale: 1.02 }} onClick={handleSubmit} type="button" className={`w-full flex justify-center items-center py-2 px-5 font-poppins font-medium text-[18px] text-white bg-[#021932] rounded-[10px] outline-none cursor-pointer`}>
              {isSignIn && !pending ? 'SignIn' : !isSignIn && !pending ? 'SignUp' : pending ? (<div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>) : ''}
            </motion.button>
            <div className='flex justify-center items-center'><span>{!isSignIn ? "Allready have an account?" : "Do not have an account?" }</span> <span onClick={() => setIsSignIn(!isSignIn)} className='underline cursor-pointer'>{!isSignIn ? "SignIn" : "SignUp"}</span></div>
          </form>
        </div>
      </div>
    </div>
  </motion.div>
  )}

export default CustomerAuth_page