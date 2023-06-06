/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'
import languageReducer from './slices/languageSlice'

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export default store;