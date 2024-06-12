import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import ChatReducer from './ChatSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    chat: ChatReducer,
  },
})
export default store;