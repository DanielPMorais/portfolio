import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'modern-normalize/modern-normalize.css';
import './styles/_variables.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
