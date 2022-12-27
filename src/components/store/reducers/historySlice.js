import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getHistoryData = createAsyncThunk('history/getData', async (arg,{
  rejectWithValue
})=>{
  try{
  const {data} = await axios.get('https://api.spacexdata.com/v3/history');
  return data;
  } catch(error){
    rejectWithValue(error.response.data);
  }
})

const historySlice = createSlice({
  name: 'history',
  initialState: { 
    spaceXHistory: [], 
    isSuccess: false,
    message: '',
    loading: false
  },
   reducers: {},
   extraReducers:{
    [getHistoryData.pending]: (state, {payload}) =>{
      state.loading = true;
    },
    [getHistoryData.fulfilled]: (state, {payload}) =>{
      state.loading = true;
      state.spaceXHistory = payload;
      state.isSuccess = true;
    },
    [getHistoryData.pending]: (state, {payload}) =>{
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    }
   }
  },
);

// export const historyActions = historySlice.actions;

export default historySlice;