import React, { useContext } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

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

import { AuthContext } from './Contexts/AuthContext';

function App() {
  const { isAuthenticated, isLoading, userId } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
    </>
  );
}

export default App;
