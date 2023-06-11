import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import SearchBar from './Navbar/SearchBar';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log(searchTerm);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Your logo or site name */}
            <a href="/" className="text-white font-bold text-2xl">Sneakeet</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Navigation links */}
              <SearchBar onSearch={handleSearch} />
              <a href="/products" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                <FaHeart className="inline-block mr-1" />
                Favorites
              </a>
              <a href="/cart" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                <FaShoppingCart className="inline-block mr-1" />
                Cart
              </a>
              <a href="/account" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                <FaUser className="inline-block mr-1" />
                Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
