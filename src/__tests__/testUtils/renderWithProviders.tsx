import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { reducers, RootReducer, store as appStore } from '../../store';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import React, { ReactNode } from 'react';
import { PreloadedState } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { dummyJsonApi } from '../../common/API/apiService';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootReducer>;
  store?: typeof appStore;
}

const setupStore = (preloadedState?: PreloadedState<RootReducer>) => {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dummyJsonApi.middleware),
    preloadedState,
  });
};

export default function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      search: { searchValue: '' },
      viewMode: {
        isLoading: false,
        page: 1,
        itemsPerPage: 5,
      },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  setupListeners(store.dispatch);

  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
