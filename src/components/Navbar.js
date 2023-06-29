import React, { useState } from "react";
import { MegaMenu } from "primereact/megamenu";
import SearchBar from "./Navbar/SearchBar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

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
    cobsole.log('handle');
  }

  return (
    <>
      <header>
        <div class=" py-2 px-4 flex flex-wrap justify-between items-center">
            <h1 class=" text-white m-2 md:m-0 text-2xl font-semibold">SNEAKEET</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a href="#">Service</a>
              <ul class="box">
                <img src="./product-3.jpeg" alt="shoes" />
                <li>Home - 2</li>
                <li>Home - 3</li>
                <img src="./product-3.jpeg" alt="shoes" />
                <li>Home - 5</li>
                <li>Home - 6</li>
                <li>Home - 7</li>
                <li>Home - 8</li>
                <li>Home - 9</li>
              </ul>
            </li>
            <li>
              <a href="#">Products</a>
              <ul class="box">
                <li>Home - 1</li>
                <li>Home - 2</li>
                <li>Home - 3</li>
                <li>Home - 3</li>
              </ul>
            </li>
            <li>
              <Link to={`/cart`}>Cart</Link>
            </li>
            <li>
              <Link to={`/signup`}>Signup</Link>
            </li>
            <li>
              <Link to={`/account`}>Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
