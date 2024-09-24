import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new 'react-dom/client' import for React 18
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
