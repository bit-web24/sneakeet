import React from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import productImg from '../../assets/images/nike.png';

const Product = () => {
  const product = {
    id: 1,
    name: 'Sample Product',
    price: 49.99,
    description: 'This is a sample product description.',
    image: productImg,
  };

  const handleBuyNow = () => {
    // Buy now logic
    console.log('Buy now');
  };

  const handleAddToFavorites = () => {
    // Add to favorites logic
    console.log('Added to favorites');
  };

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart');
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Center - Big image */}
        <div className="md:col-span-1 flex justify-center items-center ml-32">
          <img src={product.image} alt={product.name} style={{
            height: '400px',
            width: '500px'
          }} />
        </div>
        {/* Right side - 6 medium images */}
        <div className="md:col-span-1 grid grid-cols-3 gap-4 justify-center">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index}>
              <img src={product.image} alt={`Image ${index}`} style={{
                height: '200px',
                width: '200px'
              }} />
            </div>
          ))}
        </div>
        {/* Product details section */}
        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-lg font-semibold">${product.price}</span>
            <button
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <button
              className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              onClick={handleAddToFavorites}
            >
              <FiHeart className="mr-2 inline-block" />
              Add to Favorites
            </button>
            <button
              className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              onClick={handleAddToCart}
            >
              <FiShoppingCart className="mr-2 inline-block" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
