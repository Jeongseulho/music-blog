import { configureStore } from '@reduxjs/toolkit';
import UserIpSlice from './userIpSlice';
import darkModeSlice from './darkModeSlice';

const store = configureStore({
  reducer: {
    userIp: UserIpSlice.reducer,
    darkMode: darkModeSlice.reducer,
  },
});

export default store;
