import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-400">
            {/* Your business name or logo */}
            <span className="text-white font-bold">Sneakeet</span>
          </div>
          <div className="text-gray-400">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Sneakeet. All rights reserved.
            </p>
            <p className="text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a> | <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
