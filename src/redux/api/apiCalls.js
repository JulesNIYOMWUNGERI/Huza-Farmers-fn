import { updateStart, updateSuccess, updateError, clearError, clearSuccessCondition } from "./userSlice";

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('currentUser')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('currentUser')).token}`;
    }

    return req;
});

export const signUp = async (authData,dispatch,setChange) => {
    dispatch(updateStart());
    try {
        const res = await API.post('/signup', authData);
        dispatch(updateSuccess(res.data));

        setTimeout(() => {
            dispatch(clearSuccessCondition())

            setChange(false);
        },[2000]);

    } catch (error) {
        dispatch(updateError(error.response.data.message))

        setTimeout(()=>{
            dispatch(clearError())
        },[3000])
    }
}

export const signIn = async (authData,dispatch,history) => {
    dispatch(updateStart());
    try {
        const res = await API.post('/login', authData);
        dispatch(updateSuccess(res.data));

        setTimeout(() => {
            dispatch(clearSuccessCondition());
            
            history('/home');
        },[2000]);

    } catch (error) {
        dispatch(updateError(error.response.data.message))

        setTimeout(()=>{
            dispatch(clearError())
        },[3000])
    }
}