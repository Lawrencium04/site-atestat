import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import App from './js-files/App.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);