import { createSlice } from '@reduxjs/toolkit';
//import { addItem, removeItem, updateQuantity } from './CartSlice';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
     /*  state.push(action.payload);  incorrect */
    // Correct way to add an item to the array

        state.items.push(action.payload);
      },    
      removeItem: (state, action) => {
        const name = action.payload; // Assuming you pass the name of the item to remove
        state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Assuming you pass the name and new quantity
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity = quantity; // Update the quantity
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
