import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './modules/errorBoundary';
import App from './App';
import './index.scss';
import AppContentProvider from './common/controllers/appControllers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContentProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </AppContentProvider>
  </React.StrictMode>
);
