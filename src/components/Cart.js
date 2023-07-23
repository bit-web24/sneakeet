import React from 'react';
import CartItem from './Cart/CartItem';
import productImg from '../assets/images/nike.png';

const products = [
  {
    id: 1,
    name: 'Sample Shoe 1',
    price: 49.99,
    description: 'This is a sample shoe description 1.',
    category: "Men's Shoes",
    image: productImg,
  },
  {
    id: 2,
    name: 'Sample Shoe 2',
    price: 59.99,
    description: 'This is a sample shoe description 2.',
    category: "Women's Shoes",
    image: productImg,
  },
  {
    id: 2,
    name: 'Sample Shoe 2',
    price: 59.99,
    description: 'This is a sample shoe description 2.',
    category: "Women's Shoes",
    image: productImg,
  },
  {
    id: 2,
    name: 'Sample Shoe 2',
    price: 59.99,
    description: 'This is a sample shoe description 2.',
    category: "Women's Shoes",
    image: productImg,
  },
];

const Cart = () => {
  const subtotal = products.reduce((acc, product) => acc + product.price, 0);

  const handleOrder = () => {
    // Implement the logic to handle the order action here
    // For example, you can send the order to a server or display a confirmation message
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id}>
              <CartItem product={product} />
            </div>
          ))}
        </div>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <p className="text-xl font-semibold text-gray-800 mb-4">Order Summary</p>
          <div className="flex justify-between items-center">
            <p className="text-lg text-gray-800">Total:</p>
            <p className="text-2xl font-bold text-green-800">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-base text-gray-800">Shipping:</p>
            <p className="text-base text-gray-800">$10.00</p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <p className="text-2xl font-bold text-blue-700">Grand Total:</p>
            <p className="text-2xl font-bold text-blue-700">${(subtotal + 10).toFixed(2)}</p>
          </div>
          <button
            className="mt-8 w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
            onClick={handleOrder}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
