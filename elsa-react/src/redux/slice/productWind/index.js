import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsWind: [],
  currentPanelWındId: "",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleProductWindChange: (state, action) => {
      state.productsWind = action.payload;
    },
    handleControlPanelWindSelect: (state, action) => {
      if (state.currentPanelWındId === action.payload) {
        state.currentPanelWındId = "";
      }
      else {
        state.currentPanelWındId = action.payload;
      }
    },
  },
});

export const { handleControlPanelWindSelect, handleProductWindChange } =
  counterSlice.actions;

export default counterSlice.reducer;
