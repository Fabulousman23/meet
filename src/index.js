import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as atatus from 'atatus-spa';
import * as serviceWorker from './service-worker';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

atatus.config('02fe77c4ef1f440d98c39c8f92d7e400').install();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorker.register();
serviceWorkerRegistration.register();