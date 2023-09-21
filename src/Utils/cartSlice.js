// cartSlice is an object created by createSlice function; this function actually configures the slice here it is a cart

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // Mutating the state
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    removeSpecificItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item)=> {return item.card.info.id !== itemIdToRemove});
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, removeSpecificItem, clearCart } = cartSlice.actions; //exporting the actions
export default cartSlice.reducer; //exporting the reducer
