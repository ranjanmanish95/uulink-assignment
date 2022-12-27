import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPayloadData = createAsyncThunk('payload/getData', async (arg,{
  rejectWithValue
})=>{
  try{
  const {data} = await axios.get('https://api.spacexdata.com/v3/payloads');
  return data;
  } catch(error){
    rejectWithValue(error.response.data);
  }
})

const payloadSlice = createSlice({
  name: 'payload',
  initialState: { 
    spaceXPayload: [], 
    isSuccess: false,
    message: '',
    loading: false
  },
   reducers: {},
   extraReducers:{
    [getPayloadData.pending]: (state, {payload}) =>{
      state.loading = true;
    },
    [getPayloadData.fulfilled]: (state, {payload}) =>{
      state.loading = true;
      state.spaceXPayload = payload;
      state.isSuccess = true;
    },
    [getPayloadData.pending]: (state, {payload}) =>{
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    }
   }
  },
);

export default payloadSlice;