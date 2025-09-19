import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
	totalQuantity: 0,
	totalCost: 0,
  },
  reducers: {
    addItem: (state, action) => {
		    console.log('add item reducer fired!', action.payload);
            /*  state.push(action.payload);  incorrect */
			const { name, image, cost } = action.payload;
			
			if(existingItem) {
				existingItem.quantity++;
			} else {
				    /*  state.push(action.payload);  incorrect */
	            state.items.push(action.payload);  /* Correct way to add an item to the array */
			}
			 state.totalQuantity++;			 
	      },  	       
    removeItem: (state, action) => {
	    console.log('remove item reducer fired!', action.payload);
		const removeItem = action.payload;
		//update the counts 
		state.totalQuantity -= existingItem.quantity;
        state.totalCost -= existingItem.price * existingItem.quantity;
		
        const existingItem = state.items.find((item) => item.id === removeItem);
        state.items = state.items.filter(item => item.name === name);		
    },
    updateQuantity: (state, action) => {
        console.log('update quantity reducer fired!', action.payload);
        const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
        // Find the item in the cart that matches the given name
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
			state.totalQuantity += quantity - existingItem.quantity;
            existingItem.quantity = quantity; // Update the quantity
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
