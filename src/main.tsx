import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorBoundary from './modules/errorBoundary';
import App from './App';
import NotFoundPage from './modules/404';
import './index.scss';
import ItemBlock from './modules/bottom section/item';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          path="search=:searchValue&page=:page&id=:id"
          element={<ItemBlock />}
        />
      </Route>
      <Route path="/search=:searchValue&page=:page" element={<App />} />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
