import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currentPanelId: "",
  softTechList: []
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleProductChange: (state, action) => {
      state.products = action.payload;
    },
    handleControlPanelSelect: (state, action) => {
      if (state.currentPanelId === action.payload) {
        state.currentPanelId = "";
      }
      else {
        state.currentPanelId = action.payload;
      }
    },
    handleSoftTechChange: ( state , action) => {
      state.softTechList = action.payload
    }
  },
});

export const { handleControlPanelSelect,handleSoftTechChange, handleProductChange } =
  counterSlice.actions;

export default counterSlice.reducer;

