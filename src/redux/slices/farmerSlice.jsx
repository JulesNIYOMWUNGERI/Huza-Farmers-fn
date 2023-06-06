import { createSlice } from '@reduxjs/toolkit';

export const farmerSlice = createSlice({
  name: 'farmer',
  initialState: {
    farmerInfo: null,
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.farmerInfo = action.payload;
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    },
    updateError: (state, action) => {
      state.error.condition = true;
      state.error.message = action.payload;
      state.pending = false;
    },
    clearError: (state) => {
      state.error.condition = false;
    },
    clearSuccessCondition: (state) => {
      state.successCondition = false;
    },
  },
});

export const {
  updateStart, updateSuccess, updateError, clearError, clearSuccessCondition,
} = farmerSlice.actions;
export default farmerSlice.reducer;
