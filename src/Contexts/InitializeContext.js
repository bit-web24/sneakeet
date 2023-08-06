import React, { createContext, useState } from 'react';

const InitializeContext = createContext();

const InitializeContextProvider = ({ children }) => {
  const [customerId, setCustomerId] = useState('');

  return (
    <InitializeContext.Provider value={{ customerId, setCustomerId }}>
      {children}
    </InitializeContext.Provider>
  );
};

export { InitializeContext, InitializeContextProvider };
