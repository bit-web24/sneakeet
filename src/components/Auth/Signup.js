import React from 'react';
import { motion } from 'framer-motion'

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div 
      initial={{ y: "100px" }}
      animate={{y : "0px"}}
      final={{ y: "0px",
        transition: {
          type: "spring",
          mass: 0.4,
        },
      }}
      exit={{ y: "100px" }}
      transition={{ duration: 1 }}
      className="max-w-md w-full mx-auto p-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Enter your email"
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
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
