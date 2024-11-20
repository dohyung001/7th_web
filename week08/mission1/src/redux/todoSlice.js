import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [{
    "title": "고구마 아이스크림 구매하기!",
    "content": "근데 어디서 팔까요?",
    "checked": true
  }],
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
    reducers: {
      setTodos: (state, action) => {
        state.items = action.payload;
      },
    }
  }
});

export const { setInputValue, addItem, removeItem } = todoSlice.actions;
export default todoSlice.reducer;