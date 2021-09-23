import { createSlice } from '@reduxjs/toolkit';
import { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage';

interface HomePageInitialState {
  animePage: GetAnimePage;
}

const initialState: HomePageInitialState = {
  animePage: {
    Page: null,
  },
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
