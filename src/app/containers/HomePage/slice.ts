import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

// Slice is Reducer with bunch of other features
const HomePageSlice = createSlice({
  name: 'homePage', // Name should be unique throughout the app, as we name reducers
  initialState,
  reducers: {
    incrementCounter: (state, action) => {
      state.counter += 1;
    },
  },
});

export const { incrementCounter } = HomePageSlice.actions;
export default HomePageSlice.reducer;
