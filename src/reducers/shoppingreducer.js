import { createSlice } from "@reduxjs/toolkit";

const showCart = false;

const shoppingSlice = createSlice({
  name: "shoppingSlice",
  initialState: {
    showCart: false,
  },
  reducers: {
    actionButtonClick(state, action) {
      state.showCart = true;
    },
  },
});

export const { actionButtonClick } = shoppingSlice.actions;

export default shoppingSlice.reducer;
