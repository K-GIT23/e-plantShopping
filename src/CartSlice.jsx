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
		    /*  state.push(action.payload);  incorrect */
			const { name, image, cost } = action.payload;
			const existingItem = state.items.find(item => item.name === name);

			if(existingItem) {
				existingItem.quantity++;
			} else {
				 const newItem = { ...action.payload, quantity: 1};  //add and initialize the new items
                 state.items.push(newItem);    /* Correct way to add an item to the array.
                                                           state.push(action.payload);  incorrect */
			}
			 state.totalQuantity++;	    //increment total quantity
             state.totalCost += cost;    //update total cost		 
	      },  	       
    removeItem: (state, action) => {
		const removeItemName = action.payload;
        const existingItem = state.items.find(item => item.name === removeItemName);
        		
        if (existingItem) {
            //update the counts 
		     if(existingItem.quantity > 1) {
                existingItem.quantity -= 1;   //decrease it
        } else {
           state.items = state.items.filter(item => item.name !== action.payload);
        }
        // now update the total quantity and cost
		  state.totalQuantity -= 1;
          state.totalCost -= existingItem.cost;  
        }
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
        // Find the item in the cart that matches the given name
        const existingItem = state.items.find(item => item.name === name);
        
        if (existingItem) {
            if (quantity < 0) {
                console.error('Quantity cannot be negative');
                return;  //exit
            }
            state.totalQuantity += quantity - existingItem.quantity;  //update total quantity

			state.totalCost += (quantity - existingItem.quantity) * existingItem.cost;   //update the total cost if needed

            existingItem.quantity = quantity; // Update the quantity
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
