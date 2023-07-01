import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import SearchBar from './Navbar/SearchBar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log(searchTerm);
  };

  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center absolute left-20">
            {/* Logo */}
             <Link to={'/'}><h1 className="text-3xl font-bold">Sneakeet</h1></Link>
          </div>
          {/* Search Bar */}
          <div className="flex-grow ml-18">
            <SearchBar onSearch={handleSearch} />
          </div>
          {/* Navigation Icons */}
          <div className="flex items-center space-x-10 font-bold absolute right-16">
            <a
              href="/favorites"
              className="flex items-center text-gray-800 hover:text-gray-600 transition-colors duration-300"
            >
              <FaHeart className="text-2xl" style={{color: "red"}}/>
              <Link to={'/favorites'}><span className="ml-2 text-base">Favorites</span></Link>
            </a>
            <a
              href="/cart"
              className="flex items-center text-gray-800 hover:text-gray-600 transition-colors duration-300"
            >
              <FaShoppingCart className="text-2xl" />
              <Link to={'/cart'}> <span className="ml-2 text-base">Cart</span> </Link>
            </a>
            <a
              href="/profile"
              className="flex items-center text-gray-800 hover:text-gray-600 transition-colors duration-300"
            >
              <FaUser className="text-2xl" />
              <Link to={'/account'}><span className="ml-2 text-base">Profile</span></Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
