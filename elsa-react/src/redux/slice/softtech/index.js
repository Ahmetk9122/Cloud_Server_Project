import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  softTechList: [],
  cpuCount: 1,
  ramCount:1,
  hddCount:1,
  trafficCount:0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   
    handleSoftTechChange: ( state , action) => {
      state.softTechList = action.payload
    },
    handleChangeCPU : (state, action) => {
        state.cpuCount = action.payload
      },
    handleChangeRam : (state, action) => {
        state.ramCount = action.payload
      },
    handleChangeHdd : (state, action) => {
        state.hddCount = action.payload
      },
    handleChangeTrafic : (state, action) => {
        console.log('redux',action.payload)
        state.trafficCount = action.payload
   },
  },
 });

export const {handleSoftTechChange,handleChangeCPU,handleChangeRam,handleChangeHdd,handleChangeTrafic} =
  counterSlice.actions;

export default counterSlice.reducer;
