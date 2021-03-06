import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ReduxLogger from 'redux-logger';

import homePageReducer from './containers/HomePage/slice';

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ReduxLogger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
