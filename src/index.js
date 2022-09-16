import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductList from './Components/Products/Product-List';
import Header from './Components/Products/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

