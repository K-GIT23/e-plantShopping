import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
       state.items.push(action.payload);
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
        console.log('Remove item reducer fired!', action.payload); 
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
        // Find the item in the cart that matches the given name
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            console.log('Update Quantity reducer fired!', action.payload); 
           itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
        }    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
