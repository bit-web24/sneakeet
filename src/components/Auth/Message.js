import React, { useState, useEffect } from 'react';

const Message = ({ type, text }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const getMessageClass = () => {
    if (type === 'success') {
      return 'bg-green-500';
    } else if (type === 'error') {
      return 'bg-red-500';
    } else {
      return '';
    }
  };

  if (!visible) {
    return null;
  }

  const getMessageText = () => {
    if (type === 'success') {
      return `Success: ${text}`;
    } else if (type === 'error') {
      return `Error: ${text}`;
    } else {
      return text;
    }
  };

  return (
    <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-4 rounded-md text-white font-bold text-center shadow-md z-50 ${getMessageClass()}`}>
      {getMessageText()}
    </div>
  );
};

export default Message;
