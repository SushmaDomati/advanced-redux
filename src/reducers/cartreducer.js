import { createSlice } from "@reduxjs/toolkit";

const shoppingItems =[{title: '', qty:0, unitprice:0, qtyprice:0}]

const cartSlice = createSlice({
    name:'cartSlice',
    // initialState:{
    //     title: '', qty:0, unitprice:0, qtyprice:0
    initialState:shoppingItems
    ,
    reducers:{
    actionUpdateCart(state, action)
        {
            const { title, price } = action.payload;

            const existingItem = state.shoppingItems.find(item => item.title === title);

            if (existingItem) {
              existingItem.qty += 1;
              existingItem.qtyprice = existingItem.qty * existingItem.unitprice;
            } else {
              state.shoppingItems.push({
                title,
                qty: 1,
                unitprice: parseFloat(price),
                qtyprice: parseFloat(price)
              });
            }
        },
        actionRemovefromCart(state, action)
        {
            const { title } = action.payload;

            const existingItem = state.shoppingItems.find(item => item.title === title);
      
            if (existingItem) {
              existingItem.qty -= 1;
      
              if (existingItem.qty <= 0) {
                state.shoppingItems = state.shoppingItems.filter(item => item.title !== title);
              } else {
                existingItem.qtyprice = existingItem.qty * existingItem.unitprice;
              }
            }
        },
    },
});

export const {actionUpdateCart,actionRemovefromCart} = cartSlice.actions;
export default cartSlice.reducer;