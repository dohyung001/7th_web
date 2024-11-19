import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  inputValue: ''
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    addItem: (state) => {
      if (state.inputValue.trim() != "") {
        items.push(state.inputValue);
        state.inputValue('');
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((_, index) => {
        index !== action.payload;
      })
    },
  }
});

export const { setInputValue, addItem, removeItem } = todoSlice.actions;
export default todoSlice.reducer;