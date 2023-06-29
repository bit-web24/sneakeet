import React from "react";
import { Link } from "react-router-dom";
import product1Image from "../assets/images/product-1.jpeg";
import Banner from './Banner'
import Footer from "./Footer";


const Products = () => {
  // Dummy product data for demonstration purposes
  const products = [];
  for (let i = 0; i < 8; i++) {
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
    <>
    <Banner />
      <div className="container min-h-screen mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <>
              <Link key={product.id} to={`/products/${product.id}`}>
                <div key={product.id} className="bg-white p-5 rounded-lg shadow-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className=" w-fit h-40 object-cover mb-4"
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
    </>
  );
};

export default Products;