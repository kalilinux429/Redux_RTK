import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [], // Renamed to `items` for consistency
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;//this is new item 
      const existingItem = state.item.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.item.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.item.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.total;
        state.item = state.item.filter(item => item.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
