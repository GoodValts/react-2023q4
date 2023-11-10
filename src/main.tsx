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
import './index.scss';
import ItemBlock from './modules/bottom section/item';
import AppContentProvider from './common/controllers/appControllers';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          path="?search=:searchValue&page=:page&id=:id"
          element={<ItemBlock />}
        />
      </Route>
      <Route path="/?search=:searchValue&page=:page" element={<App />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppContentProvider>
        <RouterProvider router={router} />;
      </AppContentProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
