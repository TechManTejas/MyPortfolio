import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cursor from './Components/Cursor/Cursor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Cursor />
  </>
);