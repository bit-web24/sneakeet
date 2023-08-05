import React, { useState } from "react";
import { Link } from "react-router-dom";
import product1Image from "../assets/images/nike.png";
import Banner from './Banner';
import { FiShoppingCart, FiStar, FiCheckCircle } from 'react-icons/fi';
import axios from "axios";

const BASE_API_URL='http://localhost:4000/api/';

const Products = () => {
  // Dummy product data for demonstration purposes
  const products = [];
  for (let i = 0; i < 8; i++) {
    products.push({
      id: i,
      name: "Product " + i,
      price: 29.99,
      category: "Men's Shoes",
      colors: ["Red", "Black", "White"],
      image: product1Image,
    });
  }

  const initialCartStatus = {};
  const initialFavoriteStatus = {};
  for (let i = 0; i < 8; i++) {
    initialCartStatus[i] = false;
    initialFavoriteStatus[i] = false;
  }

  const [cartStatus, setCartStatus] = useState(initialCartStatus);
  const [favoriteStatus, setFavoriteStatus] = useState(initialFavoriteStatus);

  const addToFavorites = (productId) => {
    setFavoriteStatus((prevFavoriteStatus) => ({
      ...prevFavoriteStatus,
      [productId]: !prevFavoriteStatus[productId],
    }));
  };

  const addToCart = async (productId) => {
    const data = {
      PRODUCT_ID: productId,
      quantity: 1
    };

    const response = await axios.post(`${BASE_API_URL}/cart`, data);
    if (response.status === 200){

    }

    // Update the cart status for the clicked product to true
    setCartStatus((prevCartStatus) => ({ ...prevCartStatus, [productId]: true }));
  };

  return (
    <>
      <Banner />
      <div className="container min-h-screen mx-auto py-6 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-7xl">
          {products.map((product) => (
            <div key={product.id} className="col-span-1">
              <div className="bg-white p-4 rounded-md border-black border-2 relative">
                <Link to={`/products/${product.id}`}>
                  <div
                    className="aspect-w-535 aspect-h-668 overflow-hidden"
                    style={{ maxWidth: '350px', maxHeight: '350px' }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                </Link>
                  <div className={`p-2 rounded-full bg-white border-black border-2 text-3xl font-bold absolute top-4 left-4 ${
                    favoriteStatus[product.id] ? "bg-white" : "bg-transparent"
                  }`} onClick={() => addToFavorites(product.id)}>
                    <FiStar
                      size={40}
                      color={favoriteStatus[product.id] ? "#FFD700" : undefined}
                      stroke={favoriteStatus[product.id] ? "#000000" : "#D1D5DB"}
                      fill={favoriteStatus[product.id] ? "#FFD700" : "none"}
                      strokeWidth={2}
                    />
                  </div>
                <h3 className="text-gray-800 font-semibold text-lg mt-2 text-center">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-base mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-xl">Price: <span className="text-green-500 font-bold">₹ {product.price}</span></p>
                  </div>
                  <div>
                    {cartStatus[product.id] ? (
                      <button className="flex items-center px-3 py-2 text-white bg-green-500 rounded-md">
                        <FiCheckCircle className="mr-2" />
                        Added
                      </button>
                    ) : (
                      <button
                        className="flex items-center px-3 py-2 text-white bg-black rounded-md hover:bg-gray-900"
                        onClick={() => addToCart(product.id)}
                      >
                        <FiShoppingCart className="mr-2" />
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
