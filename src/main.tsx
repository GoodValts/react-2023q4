import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import NotFoundPage from './pages/404/404';
import CommonForm from './components/forms/common_form/commonForm';
import ReactForm from './components/forms/react_form/reactForm';
import Terms from './pages/terms/terms';
import SelectForms from './components/selectForm/selectForms';
import store from './store/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<SelectForms />} />
        <Route path="commonForm" element={<CommonForm />} />
        <Route path="reactForm" element={<ReactForm />} />
      </Route>
      <Route path="/terms" element={<Terms />} />
      <Route path="/*" element={<NotFoundPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
