import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { AnimatePresence } from "framer-motion";

import './index.css'
import Layout from './components/Layout';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Products/Product';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import Account from './components/Account';
import NotFound from './components/NotFound';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    checkAuthenticationStatus();
  }, []);

  const checkAuthenticationStatus = async () => {
    if (true) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  };

  return (
    <>
    <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            {isAuthenticated ? (
              <>
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/account" element={<Account />} />
              </>
            ) : (
              <Route element={<Navigate to="/login" />} />
            )}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
