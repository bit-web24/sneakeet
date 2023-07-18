import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import productImg from '../../assets/images/nike.png';
import { FiCheckCircle } from 'react-icons/fi';

const Product = () => {
  const product = {
    id: 1,
    name: 'Sample Shoe',
    price: 49.99,
    description: 'This is a sample shoe description.',
    category: 'Men\'s Shoes',
    colors: ['Red', 'Black', 'White'],
    image: productImg,
  };

  const [selectedImage, setSelectedImage] = useState(product.image);

  const [addedToCart, setAddedToCart] = useState(false);

  const handleBuyNow = () => {
    // Buy now logic
    console.log('Buy now');
  };

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart');
    setAddedToCart(true);
  };


  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Center - Big image */}
        <div className="md:col-span-1 flex justify-center items-center">
          <div
            className="bg-white rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            style={{ width: '550px', height: '350px' }}
          >
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Right side - 6 medium images */}
        <div className="md:col-span-1 grid grid-cols-3 gap-4 justify-center">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} onClick={() => handleImageClick(product.image)}>
              <div
                className="bg-white rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
                style={{ width: '100px', height: '100px' }}
              >
                <img
                  src={product.image}
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Product details section */}


        <div className="md:col-span-1 flex flex-col justify-center items-start">
          <div className="bg-white p-4 rounded-lg border-2" style={{ height: 400, width: 600 }}>
            <div className="grid grid-cols-2 gap-4 border-b-2 pb-4 mb-4">
              <div>
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>
              <div className="flex items-center justify-end ml-20">
                <span className="text-6xl font-bold text-green-500">₹{product.price}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-b-2 pb-4 mb-4">
              <div className='font-bold'>
                <p className="text-gray-600 mb-2">Category:</p>
                <p className="text-gray-600 mb-2">Colors:</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-gray-600 mb-2">{product.colors.join(', ')}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 mr-4 flex items-center"
                onClick={handleBuyNow}
              >
                Buy Now
                <FiShoppingCart className="ml-2" />
              </button>
              <button
                className={`px-6 py-3 ${addedToCart ? 'bg-green-500' : 'bg-black'} text-white rounded-md flex items-center`}
                onClick={handleAddToCart}
              >
                {addedToCart ? (
                  <div className="flex items-cente">
                    <FiCheckCircle className="mr-2 text-white-500" />
                    Added
                  </div>
                ) : (
                  <>
                    <FiShoppingCart className="mr-2" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Product;
