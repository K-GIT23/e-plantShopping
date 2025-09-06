import { createSlice } from '@reduxjs/toolkit';
//import { addItem } from './ProductList';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
       // state.push(action.payload);
       console.log("ADD_ITEM")
    
    },
    removeItem: (state, action) => {
        console.log("REMOVE_ITEM")
    },
    updateQuantity: (state, action) => {
        console.log("UPDATE_ITEM")
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
