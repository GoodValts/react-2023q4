import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './common/redux/search';
import viewModeSlice from './common/redux/viewMode';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    viewMode: viewModeSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
