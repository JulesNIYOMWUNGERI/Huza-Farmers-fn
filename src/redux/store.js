/* eslint-disable no-unused-vars */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import languageReducer from './slices/languageSlice';
import farmerSlice from './slices/farmerSlice';
import customerSlice from './slices/customerSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducer = combineReducers({
    language: languageReducer,
    farmer: farmerSlice,
    customer: customerSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;