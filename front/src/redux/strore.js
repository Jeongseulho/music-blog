import { configureStore } from '@reduxjs/toolkit';
import UserIpSlice from './userIpSlice';

const store = configureStore({
  reducer: {
    userIp: UserIpSlice.reducer,
  },
});

export default store;
