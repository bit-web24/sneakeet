import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Message from '../Message';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${BASE_API_URL}/login`, data);
      if (response.status == 200) {
        document.cookie = `token=${response.data.token}; path=/;`;
        setRegistrationStatus('success');
        setStatusMsg('Logged in Succesfully');
        setTimeout(() => {
          setRegistrationStatus('');
          setStatusMsg('');
        }, 5000);
        window.location.href = '/';
      }
    } catch (error) {
      setRegistrationStatus('error');
      setStatusMsg('Invalid Credentials');
      setTimeout(() => {
        setRegistrationStatus('');
        setStatusMsg('');
      }, 5000);
    }
  };

  return (
    <>
      {registrationStatus && <Message type={registrationStatus} text={statusMsg} />}
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-md w-full mx-auto p-8 bg-white rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <motion.div
        className='fixed top-0 left-0 w-full h-screen bg-slate-950 origin-bottom grid place-items-center' initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }} final={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}>
        <h1 className="font-2xl text-gray-500 font-medium">SNEAKEET</h1>
      </motion.div>
      <motion.div
        className='fixed top-0 left-0 w-screen h-screen bg-slate-950 origin-top grid place-items-center'
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }} final={{ scaleY: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}>
        <motion.h1 initial={{ opacity: 1 }} animate={{ opacity: 0 }} className=" text-9xl text-gray-300 font-medium">SNEAKEET</motion.h1>
      </motion.div>
    </>
  );
};

export default Login;