import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/nike.png";
import Banner from './Banner';
import { FiShoppingCart, FiStar, FiCheckCircle } from 'react-icons/fi';
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";

const BASE_API_URL = 'http://localhost:4000/api';

const Products = ({products}) => {

  useEffect(() => {
    fetchFavoriteStatuses();
    fetchCartStatuses();
  }, []);

  const [cartStatus, setCartStatus] = useState({});
  const [favoriteStatus, setFavoriteStatus] = useState({});
  const { userId } = useContext(AuthContext);

  const fetchFavoriteStatuses = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/account/${userId}/favorites`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        const favorites = response.data.favorites;
        const updatedFavoriteStatus = { ...favoriteStatus };
        favorites.forEach((favorite) => {
          updatedFavoriteStatus[favorite.productId] = favorite._id;
        });
        setFavoriteStatus(updatedFavoriteStatus);
      }
    } catch (error) {
      console.error('Failed to fetch favorite statuses:', error);
    }
  };

  const fetchCartStatuses = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}/account/${userId}/cart`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        const cart = response.data.cart;
        const updatedCartStatus = { ...cartStatus };
        cart.forEach((cart_item) => {
          updatedCartStatus[cart_item.productId] = cart_item._id;
        });
        setCartStatus(updatedCartStatus);
      }
    } catch (error) {
      console.error('Failed to fetch cart statuses:', error);
    }
  };

  const updateFavoriteStatus = async (productId, isFavorite) => {
    try {
      const data = {
        PRODUCT_ID: productId,
      };

      const updatedFavoriteStatus = { ...favoriteStatus };

      if (favoriteStatus[productId] === undefined) {
        const response = await axios.post(`${BASE_API_URL}/account/${userId}/favorites`, data, { withCredentials: true });
        if (response.status == 200) {
          updatedFavoriteStatus[productId] = response.data.favorite_id;
        }
      } else {
        const favorite_id = updatedFavoriteStatus[productId];
        const response = await axios.delete(`${BASE_API_URL}/account/${userId}/favorites/${favorite_id}`, { withCredentials: true });
        if (response.status == 200) {
          updatedFavoriteStatus[productId] = undefined;
        }
      }

      setFavoriteStatus(updatedFavoriteStatus);
    } catch (error) {
      console.error('Failed to update favorite status:', error);
    }
  };

  const handleFavorites = (productId) => {
    setFavoriteStatus((prevFavoriteStatus) => {
      const isCurrentlyFavorite = prevFavoriteStatus[productId];
      const isFavorite = !isCurrentlyFavorite;
      updateFavoriteStatus(productId, isFavorite);
      return { ...prevFavoriteStatus, [productId]: isFavorite };
    });
  };

  const addToCart = async (productId) => {

    const data = {
      PRODUCT_ID: productId,
      quantity: 1
    };

    try {
      const response = await axios.post(`${BASE_API_URL}/account/${userId}/cart`, data, {
        withCredentials: true,
      });
      const updatedCartStatus = { ...cartStatus };
      if (response.status === 200) {
        updatedCartStatus[productId] = response.data.item_id;
        setCartStatus(updatedCartStatus);
      } else {
        console.error('Failed to add product to cart:', response.data);
      }
    } catch (error) {
      console.error('Failed to add product to cart:', error);
    }
  };

  return (
    <>
      <Banner />
      <div className="container min-h-screen mx-auto py-6 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-7xl">
          {products.map((product) => (
            <div key={product._id} className="col-span-1">
              <div className="bg-white p-4 rounded-md border-black border-2 relative">
                <Link to={`/products/${product._id}`}>
                  <div
                    className="aspect-w-535 aspect-h-668 overflow-hidden"
                    style={{ maxWidth: '350px', maxHeight: '350px' }}
                  >
                    <img
                      src={img}
                      alt={product.name}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                </Link>
                <div className={`p-2 rounded-full bg-white border-black border-2 text-3xl font-bold absolute top-4 left-4 ${favoriteStatus[product.id] ? "bg-white" : "bg-transparent"
                  }`} onClick={() => handleFavorites(product._id)}>
                  <FiStar
                    size={40}
                    color={favoriteStatus[product._id] ? "#FFD700" : undefined}
                    stroke={favoriteStatus[product._id] ? "#000000" : "#D1D5DB"}
                    fill={favoriteStatus[product._id] ? "#FFD700" : "none"}
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
                    {cartStatus[product._id] ? (
                      <button className="flex items-center px-3 py-2 text-white bg-green-500 rounded-md">
                        <FiCheckCircle className="mr-2" />
                        Added
                      </button>
                    ) : (
                      <button
                        className="flex items-center px-3 py-2 text-white bg-black rounded-md hover:bg-gray-900"
                        onClick={() => addToCart(product._id)}
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
