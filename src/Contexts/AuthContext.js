import React, { createContext, useState, useEffect } from 'react';
import jwt from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    checkAuthenticationStatus();
  }, []);

  const checkAuthenticationStatus = async () => {
    try {
      if (document.cookie) {
        const token = document.cookie.startsWith('token=') ? document.cookie.slice(6) : null;
        if (!token) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        try {
          const decodedToken = jwt(token);
          if (decodedToken && decodedToken.userId) {
            setIsAuthenticated(true);
            setUserId(decodedToken.userId);
          } else {
            setIsAuthenticated(false);
            setUserId('');
          }
          setIsLoading(false);
        } catch (error) {
          // Failed to decode token
          console.error('Error decoding token:', error);
          setIsAuthenticated(false);
          setUserId('');
          setIsLoading(false);
        }
      } else {
        setIsAuthenticated(false);
        setUserId('');
        setIsLoading(false);
      }
    } catch (error) {
      // Catch any other unexpected errors
      console.error('Error checking authentication status:', error);
      setIsAuthenticated(false);
      setUserId('');
      setIsLoading(false);
    }
  };

return (
  <AuthContext.Provider value={{ isAuthenticated, isLoading, userId }}>
    {children}
  </AuthContext.Provider>
);
};

export { AuthContext, AuthProvider };
