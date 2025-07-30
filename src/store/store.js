import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../reducers/shoppingreducer";

const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

export default store;
