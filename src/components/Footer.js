import React from 'react';
import { GiRobotHelmet } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-4 px-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center">
          <span className="text-4xl text-blue-500 mr-2">
            <GiRobotHelmet />
          </span>
          <h1 className="text-2xl font-bold">Sneakeet</h1>
        </div>
        <div className="text-sm mt-4 sm:mt-0">
          <p className="mb-2">&copy; {new Date().getFullYear()} Sneakeet. All rights reserved.</p>
          <div className="flex flex-wrap">
            <a href="/privacy" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
