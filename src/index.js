import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';


import App from './App';
import Home from './pages/home';
import Contact from './pages/contact'; 
import Transaction from './pages/transaction'; // Corrected spelling
import NoPage from './pages/nopage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
     
  </React.StrictMode>
);

reportWebVitals();
