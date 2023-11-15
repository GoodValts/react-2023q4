import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/common/reducers/reducers';

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store;
