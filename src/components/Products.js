import React from "react";
import { Link } from "react-router-dom";
import product1Image from "../assets/images/nike.png";
import Banner from './Banner';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const Products = () => {
  // Dummy product data for demonstration purposes
  const products = [];
  for (let i = 0; i < 8; i++) {
    products.push({
      id: i,
      name: "Product 1",
      price: 29.99,
      category: "Men's Shoes",
      colors: ["Red", "Black", "White"],
      image: product1Image,
    });
  }

  const addToFavorites = (productId) => {
    // Implement your logic to add the product to favorites
    console.log(`Added product ${productId} to favorites`);
  };

  return (
    <>
      <Banner />
      <div className="container min-h-screen mx-auto py-6 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-7xl">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="col-span-1">
              <div className="bg-white p-4 rounded-md border-black border-2 relative">
                <div
                  className="aspect-w-535 aspect-h-668 overflow-hidden"
                  style={{ maxWidth: '350px', maxHeight: '350px' }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                    style={{
                      width: '400px',
                      height: '300px',
                      borderRadius: '10px'
                    }}
                  />
                  <button
                    className="text-pink-500 text-2xl font-bold absolute"
                    onClick={() => addToFavorites(product.id)}
                    style={{
                      top: '30px',
                      left: '30px'
                    }}
                  >
                    <FiHeart size={40}/>
                  </button>
                </div>
                <h3 className="text-gray-800 font-semibold text-sm mt-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-xs">
                      Colors: {product.colors.join(", ")}
                    </p>
                    <p className="text-gray-600 text-xs">Price: ${product.price}</p>
                  </div>
                  <div>
                    <button
                      className="flex items-center px-3 py-2 text-white bg-sky-700 rounded-md"
                      onClick={() => addToFavorites(product.id)}
                    >
                      <FiShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
