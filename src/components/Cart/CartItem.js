import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import productImg from '../../assets/images/nike.png';

const CartItem = ({ product, onRemove }) => {
  return (
    <div className="cart-item flex items-start border-black border-2 rounded-lg p-4 shadow-md">
      <img src={product.image || productImg} alt={product.name} className="w-24 h-24 mr-4 object-contain rounded" />
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">
          <span className="text-lg font-bold">₹</span> <span className="font-bold text-lg text-green-600">{product.price}</span>
        </p>
        <p className="text-sm mt-2 text-gray-700">{product.description}</p>
        <p className="text-sm mt-2 text-gray-700">Brand: {product.brand}</p>
        <p className="text-sm mt-2 text-gray-700">Category: {product.category}</p>
        <p className="text-sm mt-2 text-gray-700">Sizes: {product.sizes.join(', ')}</p>
        <p className="text-sm mt-2 text-gray-700">Colors: {product.colors.join(', ')}</p>
        <p className="text-sm mt-2 text-gray-700">Availability: {product.availability}</p>
      </div>
      <button
        className="text-white bg-red-500 rounded-full p-2 hover:bg-red-600"
        onClick={onRemove}
      >
        <AiOutlineClose size={20} />
      </button>
    </div>
  );
};

export default CartItem;
