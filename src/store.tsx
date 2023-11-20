import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { dummyJsonApi } from './common/API/apiService';
import searchSlice from './common/redux/reducers/search';
import viewModeSlice from './common/redux/reducers/viewMode';

export const store = configureStore({
  reducer: {
    search: searchSlice,
    viewMode: viewModeSlice,
    [dummyJsonApi.reducerPath]: dummyJsonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyJsonApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

const reducers = combineReducers({
  search: searchSlice,
  viewMode: viewModeSlice,
  [dummyJsonApi.reducerPath]: dummyJsonApi.reducer,
});

export type RootReducer = ReturnType<typeof reducers>;
