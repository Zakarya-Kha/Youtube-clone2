import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
  name: "app",
  
  initialState: {
    open: true,
    video: [],
    category: 'All',
  },
  reducers: {
    toggle: (state) => {
      state.open =!state.open;
    },
    setVideo: (state, actions) => {
      state.video = actions.payload;
    },
    setCategory: (state, actions) => {
      state.category = actions.payload;
    },
  }

});

export const { toggle, setVideo, setCategory } = appSlice.actions;

export default appSlice.reducer;