import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import App from './js-files/App.js';
import './index.css';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </StrictMode>
);