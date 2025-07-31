import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../reducers/shoppingreducer";
import cartreducer from "../reducers/cartreducer";

const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    cart: cartreducer,
  },
});

export default store;
