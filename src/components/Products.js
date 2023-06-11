import React from "react";
import { Link } from "react-router-dom";
import product1Image from "../assets/images/product-1.jpeg";

const Products = () => {
  // Dummy product data for demonstration purposes
  const products = [];
  for (let i = 0; i < 5; i++) {
    products.push(
      {
        id: i,
        name: "Product 1",
        price: 29.99,
        image: product1Image,
      }
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
            <>
            <Link key={product.id} to={`/products/${product.id}`}>
            <div key={product.id} className="bg-white rounded-lg p-4 shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-70 object-cover mb-4"
              />
              <h3 className="text-gray-800 font-medium mb-2 text-center">
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Products;
