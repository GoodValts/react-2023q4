import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dummyJsonApi } from "@/pages/api/hello";
import { searchReducer } from "./reducers/search";
import { viewModeReducer } from "./reducers/viewMode";
import { createWrapper } from "next-redux-wrapper";

export const reducers = combineReducers({
  search: searchReducer,
  viewMode: viewModeReducer,
  [dummyJsonApi.reducerPath]: dummyJsonApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyJsonApi.middleware),
});

export const setupStore = () => {
  return store;
};

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export type RootReducer = ReturnType<typeof reducers>;

export const wrapper = createWrapper(setupStore, { debug: false });
