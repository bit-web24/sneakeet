import React, { useEffect, useContext, useState } from 'react';
import CartItem from './Cart/CartItem';
import img from '../assets/images/nike.png';
import axios from 'axios';
import { AuthContext } from "../Contexts/AuthContext";
import { FaCheckCircle } from 'react-icons/fa';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const Cart = () => {
  const { userId } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0.0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/account/${userId}/cart`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          const cart = response.data.cart;
          const cartItems = [];

          for (const item of cart) {
            const productResponse = await axios.get(`${BASE_API_URL}/products/${item.productId}`, {
              withCredentials: true,
            });

            if (productResponse.status === 200) {
              const productData = productResponse.data.product;
              const cartItem = {
                _id: item._id,
                productId: productData._id,
                quantity: item.quantity,
                availability: productData.availability,
                name: productData.name,
                brand: productData.brand,
                price: productData.price,
                description: productData.description,
                category: productData.category,
                sizes: productData.sizes,
                colors: productData.colors,
                images: productData.images,
              };
              cartItems.push(cartItem);
            }
          }

          setProducts(cartItems);

          // Calculate subtotal using a loop
          let subtotal = 0.0;
          for (let x = 0; x < cartItems.length; x++) {
            subtotal += parseFloat(cartItems[x].price);
          }
          setSubtotal(subtotal);
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, [userId]);

  const handleRemove = async (itemId, itemPrice) => {
    try {
      const response = await axios.delete(`${BASE_API_URL}/account/${userId}/cart/${itemId}`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        // Remove the item from the products state based on itemId
        setProducts(prevProducts => prevProducts.filter(product => product._id !== itemId));

        // Update the subtotal by subtracting the removed item's price
        setSubtotal(prevSubtotal => prevSubtotal - parseFloat(itemPrice));
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };


  const handleOrder = async () => {
    let PRODUCTS = [];
    for (const item of products) {
      PRODUCTS.push({
        productId: item.productId,
        quantity: item.quantity,
      });
    }
    console.log(PRODUCTS);
    try {
      const response = await axios.post(`${BASE_API_URL}/account/${userId}/orders`, {
        products: PRODUCTS,
      }, {
        withCredentials: true,
      });

      if (response.status === 201) {
        setOrderPlaced(true);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product._id}>
              <CartItem product={product} onRemove={() => handleRemove(product._id, product.price)} />
            </div>
          ))}
        </div>
        <div className="mt-8 bg-white-500 p-6 rounded-lg shadow-md">
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
            className={`mt-8 w-full px-6 py-3 bg-${orderPlaced ? 'green' : 'blue'}-500 text-white font-semibold rounded-lg shadow-md hover:bg-${orderPlaced ? 'green' : 'blue'}-600`}
            onClick={handleOrder}
            disabled={orderPlaced}
          >
            {orderPlaced ? <FaCheckCircle className="mr-2" /> : null}
            {orderPlaced ? 'Order Placed' : 'Order Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
