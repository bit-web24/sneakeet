import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import SearchBar from './Navbar/SearchBar';
import '../index.css'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log(searchTerm);
  };

  function handleNav() {
    let box = document.querySelector('.box');
    box.classList.contains('active') ?
      box.classList.remove('active')
      :
      box.classList.add('active');
  }

  return (
    <nav className="fixed z-40 w-full" style={
      {
        backgroundColor: `#F0F1F198`,
        backdropFilter: `blur(10px)`,
      }
    }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Your logo or site name */}
            <a href="/" className=" text-gray-700 font-bold text-2xl">Sneakeet</a>
          </div>
          <div className="switch-box relative flex">
            <div className='ham-btn block' onClick={handleNav}>
              <i class="fa-solid fa-bars"></i>
            </div>
            <div className="box absolute top-12 md:-top-14 bg-slate-100 md:bg-inherit -right-96 md:right-0 md:block p-8 rounded-b-lg">
              <div className="md:ml-10 flex flex-col gap-5 md:gap-0 md:flex md:flex-row items-baseline space-x-4">
                {/* Navigation links */}
                <SearchBar onSearch={handleSearch} />
                <a href="/favorites" className=" block md:flex place-items-center gap-1 text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  <FaHeart className="inline-block mr-1" />
                  Favorites
                </a>
                <a href="/cart" className="block md:flex place-items-center gap-1 text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  <FaShoppingCart className="inline-block mr-1" />
                  Cart
                </a>
                <a href="/account" className="block md:flex place-items-center gap-1 text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  <FaUser className="inline-block mr-1" />
                  Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;