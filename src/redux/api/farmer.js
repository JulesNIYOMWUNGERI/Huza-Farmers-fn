/* eslint-disable no-unused-vars */
import { updateStart, updateSuccess, updateError, clearError, clearSuccessCondition } from "../slices/farmerSlice";
import api from "../../../utils/api";

import axios from 'axios';
import { toast } from 'react-toastify';


export const signUp = async (farmerData,dispatch,setFarmerData) => {
    dispatch(updateStart());
    try {
        const res = await api.post('/register', farmerData);
        console.log(res);
        dispatch(updateSuccess(res.data));

        toast.success(res.data.message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });

        setTimeout(() => {
            dispatch(clearSuccessCondition())

            setFarmerData({
                firstname: '', lastname: '', phoneNo: '', IDno: '', Email: '', Password: '', comfirmPassword: '', LandSize: '',
            });
        },[1000]);

    } catch (error) {
        console.log(error);
        if (!error.response) {
            dispatch(updateError(error.message));
            toast.error(error.message, {
                position: 'top-right',
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        } else if (!error.response.data.message) {
            dispatch(updateError(error.response.data));
            toast.error(error.response.data, {
                position: 'top-right',
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        } else {
            dispatch(updateError(error.response.data.message));
            toast.error(error.response.data.message, {
                position: 'top-right',
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }

        setTimeout(()=>{
            dispatch(clearError())
        },[3000])
    }
}

export const signIn = async (farmerData,dispatch,setFarmerData,navigate) => {
    const loginData = {
        email: farmerData?.Email,
        password: farmerData?.Password,

    }
    dispatch(updateStart());
    try {
        const res = await api.post('/login', loginData);
        dispatch(updateSuccess(res.data));

        toast.success(res.data.message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });

        setFarmerData({
            firstname: '', lastname: '', phoneNo: '', IDno: '', Email: '', Password: '', comfirmPassword: '', LandSize: '',
        });

        setTimeout(() => {
            dispatch(clearSuccessCondition());
            
            navigate('/farmer/inputPage');
        },[3000]);

    } catch (error) {
        if (!error.response) {
            dispatch(updateError(error.message));
            toast.error(error.message, {
                position: 'top-right',
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        } else if (!error.response.data.message) {
            dispatch(updateError(error.response.data));
            toast.error(error.response.data, {
                position: 'top-right',
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        } else {
            dispatch(updateError(error.response.data.message));
            toast.error(error.response.data.message, {
                position: 'top-right',
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }

        setTimeout(()=>{
            dispatch(clearError())
        },[3000])
    }
}

export const VerifyEmail = async (setValidUrl, params, dispatch) => {
    dispatch(updateStart());
    try {
      const { data } = await api.get(`/${params.id}/verify/${params.token}`);
    //   dispatch(updateSuccess(data));
      setValidUrl(true);
  
      setTimeout(() => {
        dispatch(clearSuccessCondition());
      }, [10000]);
    } catch (error) {
      setValidUrl(false);
  
      if (!error.response) {
        dispatch(updateError(error.message));
        toast.error(error.message, {
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
      } else if (!error.response.data.message) {
        dispatch(updateError(error.response.data));
        toast.error(error.response.data, {
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
      } else {
        dispatch(updateError(error.response.data.message));
        toast.error(error.response.data.message, {
            position: 'top-right',
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
      }
  
      setTimeout(() => {
        dispatch(clearError());
      }, [10000]);
    }
  };