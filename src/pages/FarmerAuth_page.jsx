/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signUp } from '../redux/api/farmer';

const FamerAuth_page = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);
  const [farmerData ,setFarmerData] = useState({
    firstname: '', lastname: '', phoneNo: '', IDno: '', Email: '', Password: '', comfirmPassword: '', LandSize: '', userRole: 'farmer'
  })

  const {
    successCondition, farmerInfo, error, pending,
  } = useSelector((state) => state.farmer);

  const handleChange = (e) => {
    setFarmerData({ ...farmerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isSignIn) {
      signIn(farmerData, dispatch, setFarmerData, navigate)
    } else {
      console.log(farmerData)
      signUp(farmerData, dispatch, setFarmerData)
    }
  }



  return (
  <motion.div 
    className='bg-white overflow-scroll relative w-screen flex justify-center z-[3] h-screen'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
  <div className='bg-[#021932] h-1/2 w-full'></div>
  <div className='w-[80%] shadow-lg absolute top-[70px] h-auto py-[70px] bg-white rounded-xl flex flex-col items-center justify-center'>
    <div className={`${styles.flexCenter} ${styles.paddingX} flex-row flex-wrap gap-5 w-full h-auto`}>
      <div className='md:w-[40%] w-[90%'>
        <h1 className='font-bold text-[35px]'>{isSignIn ? 'WELCOME BACK TO HUZA FARMER': 'JOIN US AS A FARMER'}</h1>
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
              <input type='text' value={farmerData.firstname} name='firstname' className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='FirstName' onChange={handleChange}/>
              <input type='text' value={farmerData.lastname} name='lastname' className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='LastName' onChange={handleChange}/>
              <input type='number' value={farmerData.phoneNo} name='phoneNo' className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='Phone No' onChange={handleChange}/>
              <input type='number' value={farmerData.IDno} name='IDno' className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='ID no' onChange={handleChange}/>
            </>
          )}
          <input type='email' value={farmerData.Email} name='Email' className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='Email' onChange={handleChange}/>
          <input type='password' value={farmerData.Password} name='Password' className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='Password' onChange={handleChange}/>
          <input type='password' value={farmerData.comfirmPassword} name='comfirmPassword' className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='ComfirmPassword' onChange={handleChange}/>
          {!isSignIn && <input type='text' value={farmerData.LandSize} name='LandSize' className='bg-transparent border-b-2 outline-none w-[100%]' placeholder='Land size' onChange={handleChange}/>}
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

export default FamerAuth_page