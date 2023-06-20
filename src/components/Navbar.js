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
  function MegaClick() {
    let mega = document.querySelector('.mega--menu');
    mega.classList.contains('active') ?
      mega.classList.remove('active')
      : mega.classList.add('active');
  }
  function Car() {
    let mega = document.querySelector('.mega--menu');
    mega.style.display = "none";
  }
  function handle(){
    console.log('handle');
  }

  return (
    <nav className="top-0 z-40 w-full sticky" style={
      {
        backgroundColor: `#F0F1F198`,
        backdropFilter: `blur(10px)`,
      }
    }>
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Your logo or site name */}
            <a href="/" className=" text-gray-700 font-bold text-2xl">Sneakeet</a>
          </div>
          <div className="switch-box relative flex">
            <div className='ham-btn block' onClick={handleNav}>
              <i class="fa-solid fa-bars"></i>
            </div>
            <div className="box absolute md:static top-12 md:-top-14 bg-slate-100 md:bg-inherit md:right-0 md:block p-8 rounded-b-lg">
              <div className="md:ml-5 flex flex-col gap-5 md:gap-0 md:flex md:flex-row items-baseline space-x-1">
                {/* Navigation links */}
                <SearchBar onSearch={handleSearch} />
                <div className='mega--wrap cursor-pointer' onClick={MegaClick}>
                  <span className=" block md:flex place-items-center gap-1 text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                    <i class="fa-solid fa-caret-down inline-block"></i>
                    Menu</span>
                  <div className="mega--menu absolute p-4 md:p-0 w-full md:w-screen bg-slate-300 md:-top-96 md:-right-9">
                    <div class="md:flex md:flex-wrap ">
                      <div className='left-car border-b-2 pb-2 md:hidden' onClick={Car}>
                        <i className="fa-sharp fa-solid fa-caret-left"></i>
                      </div>
                      <a href="#" className='box--mega p-2  w-full md:w-1/3 md:border-2'>
                        <div class="">
                          <h2>Shoes</h2>
                          <p>lorem ipsum dolor amit.</p>
                        </div>
                      </a>
                      <a href="#" className='box--mega w-full p-2 md:w-1/3 md:border-2'>
                        <div class="">
                          <h2>Shoes</h2>
                          <p>lorem ipsum dolor amit.</p>
                        </div>
                      </a>
                      <a href="#" className='box--mega w-full p-2 md:w-1/3 md:border-2'>
                        <div class="">
                          <h2>Shoes</h2>
                          <p>lorem ipsum dolor amit.</p>
                        </div>
                      </a>
                      <a href="#" className='box--mega w-full p-2 md:w-1/3 md:border-2'>
                        <div class="">
                          <h2>Shoes</h2>
                          <p>lorem ipsum dolor amit.</p>
                        </div>
                      </a>
                      <a href="#" className='box--mega w-full p-2 md:w-1/3 md:border-2'>
                        <div class="">
                          <h2>Shoes</h2>
                          <p>lorem ipsum dolor amit.</p>
                        </div>
                      </a>
                      <a href="#" className='box--mega w-full p-2 md:w-1/3 md:border-2'>
                        <div class="">
                          <h2>Shoes</h2>
                          <p>lorem ipsum dolor amit.</p>
                        </div>
                      </a>
                      <a href="#" className='box--mega w-full p-2 md:w-1/3 md:border-2'>
                        <div class="">
                          <h2>Shoes</h2>
                          <p>lorem ipsum dolor amit.</p>
                        </div>
                      </a>
                      <a href="#" className='box--mega w-full p-2 md:w-1/3 md:border-2'>
                        <div class="">
                          <h2>Shoes</h2>
                          <p>lorem ipsum dolor amit.</p>
                        </div>
                      </a>
                      <a href="#" className='box--mega w-full p-2 md:w-1/3 md:border-2'>
                        <div class="">
                          <h2>Shoes</h2>
                          <p>lorem ipsum dolor amit.</p>
                        </div>
                      </a>

                    </div>
                  </div>
                </div>
                <a href="/cart" className="block md:flex place-items-center gap-1 text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  <FaShoppingCart className="inline-block mr-1" />
                  Cart
                </a>
                <a href="/account" className="block md:flex place-items-center gap-1 text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">
                  <FaUser className="inline-block mr-1" />
                  Profile
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
