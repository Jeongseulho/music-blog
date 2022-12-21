/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// createSlice
const darkModeSlice = createSlice({
  name: 'darkModeSlice',
  initialState: { value: false },
  reducers: {
    toggle(state) {
      state.value = !state.value;
    },
  },
});

export default darkModeSlice;
export const { toggle } = darkModeSlice.actions;
