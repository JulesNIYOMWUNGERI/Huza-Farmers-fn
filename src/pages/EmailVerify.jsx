/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SuccessImage from '../assets/images/success.png';
import { VerifyEmail } from '../redux/api/farmer';

const EmailVerify = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [validUrl, setValidUrl] = useState(false);

  const { pending } = useSelector(state => state.farmer);

  useEffect(() => {
    VerifyEmail(setValidUrl, params, dispatch);
  }, []);

  return (
    <div>
      {validUrl ? (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-5">
          <img src={SuccessImage} alt="successImage" className="w-[300px] h-[300px]" />
          <h1 className='text-[30px] font-bold'>Email verified successfully</h1>
          <Link to="/auth/FarmerAuth">
            <button className="verifySignInBtn">Sign In</button>
          </Link>
        </div>
      ) : (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          {pending ? <span>loading....</span> : <h1>404 Not Found</h1>}
        </div>
      )}
    </div>
  );
};

export default EmailVerify;