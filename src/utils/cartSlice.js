
import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
      addItems:(state,action)=>{
        state.items.push(action.payload);
      },
      removeItems:(state)=>{
        state.items.pop();
      },
      clearCart:(state)=>{
        state.items.length=0;
      },
    },
})
// console.log(cartSlice.actions)
export const {addItems,removeItems,clearCart}=cartSlice.actions;
console.log(cartSlice.reducer)
export default cartSlice.reducer