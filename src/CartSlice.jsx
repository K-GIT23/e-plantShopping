import { createSlice } from '@reduxjs/toolkit';


export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    //totalAmount: 0,   /* price for all items */
    //totalCost: 0,     /* total number of items */
  },
  reducers: {
    
    addItem: (state, action) => {
     /*  state.push(action.payload);  incorrect */
        const {name, image, cost} = action.payload;  // Correct way to add
        // is the item already in the cart?
       const existingItem = state.items.find(item => item.name === name);
       if (existingItem){
        existingItem.quantity++;
       } else {
        // If item does not exist in cart, add to quantity
        state.items.push({ name, image, cost, quantity: 1 });
       }
               
      },    
      removeItem: (state, action) => {
        const name = action.payload; // Assuming you pass the name of the item to remove
        const existingItem = state.items.find((item) => item.name === name);

       if (existingItem) {
        existingItem.totalQuantity--;
        existingItem.totalCost--;
      /*  } else {

        
        state.items.push({ name, image, cost, quantity: 1 });
       }
       */
        
        state.items = state.items.filter((item) => item.name !== action.payload);
    }
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Assuming you pass the name and new quantity
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {  
            //adjust the quantity
            existingItem.quantity = quantity; // Update the quantity
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
