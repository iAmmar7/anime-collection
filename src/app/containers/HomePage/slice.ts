import { createSlice } from '@reduxjs/toolkit';

interface HomePageInitialState {
  animePage: {
    Page?: {
      media?: Array<any>;
    };
  };
}

const initialState: HomePageInitialState = {
  animePage: {},
};

// Slice is Reducer with bunch of other features
const HomePageSlice = createSlice({
  name: 'homePage', // Name should be unique throughout the app, as we name reducers
  initialState,
  reducers: {
    setAnimePage: (state, action) => {
      state.animePage = action.payload;
    },
  },
});

export const { setAnimePage } = HomePageSlice.actions;
export default HomePageSlice.reducer;
