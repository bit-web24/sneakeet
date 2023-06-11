import React from 'react';
import product4 from '../../assets/images/product-4.jpg';

const Product = () => {
  // Example product data
  const product = {
    id: 1,
    name: 'Product Name',
    price: 29.99,
    description: 'Product description goes here...',
    image: product4,
  };

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart');
  };

  const handleAddToFavorites = () => {
    // Add to favorites logic
    console.log('Added to favorites');
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Product photo */}
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        {/* Product details section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-lg font-semibold">${product.price}</span>
            <button
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              onClick={handleAddToFavorites}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
