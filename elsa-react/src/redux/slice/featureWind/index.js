import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  featuresWind: [],
  currentFeatureWindId: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleFeaturesWindChange: (state, action) => {
      state.featuresWind = action.payload;
    },
    handleFeaturesWindSelect: (state, action) => {
      const findFeatureWind = state.currentFeatureWindId.find((e) => e === action.payload);
     if((!!findFeatureWind)) {
       
       state.currentFeatureWindId = state.currentFeatureWindId.filter((e) => e !== action.payload);
     }
     else {
      state.currentFeatureWindId.push(action.payload)
     }
    },
  },
});

export const { handleFeaturesWindSelect, handleFeaturesWindChange } =
  counterSlice.actions;

export default counterSlice.reducer;
