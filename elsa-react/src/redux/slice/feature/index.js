import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  features: [],
  currentFeatureId:  [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleFeaturesChange: (state, action) => {
      state.features = action.payload;
    },
    handleFeaturesSelect: (state, action) => {
     const findFeature = state.currentFeatureId.find((e) => e === action.payload);
     if((!!findFeature)) {
       
       state.currentFeatureId = state.currentFeatureId.filter((e) => e !== action.payload);
     }
     else {
      state.currentFeatureId.push(action.payload)
     }
    },
  },
});

export const { handleFeaturesSelect, handleFeaturesChange } =
  counterSlice.actions;

export default counterSlice.reducer;
