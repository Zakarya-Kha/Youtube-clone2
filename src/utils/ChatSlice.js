import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name : 'chat',
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(100, 1);
      state.message.push(action.payload)
    },
  }
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;