// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Global styles, if any
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // For routing

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("Index file");

// Wrapping the entire app in Router for routing
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
