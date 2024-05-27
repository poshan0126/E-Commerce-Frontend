import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './common/NavBar';
import Orders from './pages/orders';
import Customers from './pages/customers';
import Products from './pages/products';
import Home from './pages/Home';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      
      <Route path="/Products" element={<Products />} />
      <Route path="/Customers" element={<Customers />} />
      <Route path="/Orders" element={<Orders />} />
    </Routes>
  </Router>
);

export default App;
