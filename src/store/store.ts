import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pageReducer from './stateReducer';

export const store = configureStore({
  reducer: {
    counter: pageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;