import { createSlice } from '@reduxjs/toolkit';

const createSlices = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'Hello Redux'
  },
  reducers: {
    changMessage(state, { payload }) {
      state.message = payload;
    }
  }
});
export const { changMessage } = createSlices.actions;

export default createSlices.reducer;
