import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as R } from 'react-router-dom';
import { AppProvider } from './context';//AppProvider is a delivery boy

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <R>
        <App />
      </R>
    </AppProvider>
  </React.StrictMode>
);
reportWebVitals();
