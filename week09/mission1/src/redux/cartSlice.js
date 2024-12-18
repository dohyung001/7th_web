import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems.jsx';

const initialState = {
  items: cartItems,
  countSum: 0,
  priceSum: 0,
  loading: 'idle'
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.items.find(e => e.id === action.payload);
      console.log(item);
      if (item) {
        item.amount += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.items.find(e => e.id === action.payload);
      if (item && item.amount > 1) {
        item.amount -= 1;
      } else if (item && item.amount === 1) {
        state.items = state.items.filter(e => e.id !== action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(e => e.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
      state.countSum = 0;
      state.priceSum = 0;
    },
    calculateTotals: (state) => {
      state.countSum = state.items.reduce((sum, item) => sum + item.amount, 0);
      state.priceSum = state.items.reduce((sum, item) => sum + item.amount * item.price, 0);
    },
  },

});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
