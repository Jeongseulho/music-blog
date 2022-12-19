/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getUserIp from '../api/etc/getUserIp';

// createAsyncThunk
const getUserIpThunk = createAsyncThunk('UserIpSlice/getUserIpThunk', async () => {
  const res = await getUserIp();
  const userIp = res.data.IPv4;
  return userIp;
});

// createSlice
const UserIpSlice = createSlice({
  name: 'UserIpSlice',
  initialState: { value: 0 },
  reducers: {
    setIp(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserIpThunk.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(getUserIpThunk.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = 'complete';
    });

    builder.addCase(getUserIpThunk.rejected, (state) => {
      state.status = 'fail';
    });
  },
});

export default UserIpSlice;
export { getUserIpThunk };
export const { setIp } = UserIpSlice.actions;
