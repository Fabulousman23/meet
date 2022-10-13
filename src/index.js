import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as atatus from 'atatus-spa';

atatus.config('02fe77c4ef1f440d98c39c8f92d7e400').install();
atatus.notify(new Error('Test Atatus Setup'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
