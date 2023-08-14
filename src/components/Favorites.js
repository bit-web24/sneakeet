import React, { useState, useEffect, useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import { AuthContext } from "../Contexts/AuthContext";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const { userId } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}/account/${userId}/favorites`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          const favorites = response.data.favorites;
          setFavoriteProducts(favorites);

          // Fetch product details in bulk
          const productIds = favorites.map(favorite => favorite.productId);
          const productResponse = await axios.get(`${BASE_API_URL}/products`, {
            params: { productIds },
            withCredentials: true,
          });

          if (productResponse.status === 200) {
            const productDataMap = {};
            productResponse.data.products.forEach(product => {
              productDataMap[product._id] = product;
            });
            setProductDetails(productDataMap);
            setLoading(false);
          }
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchFavoriteProducts();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  const handleRemoveFromFavorites = async (favoriteId) => {
    try {
      const response = await axios.delete(`${BASE_API_URL}/account/${userId}/favorites/${favoriteId}`, {
        withCredentials: true,
      });
  
      if (response.status === 200) {
        // Remove the deleted favorite from the local state
        setFavoriteProducts(prevFavorites => prevFavorites.filter(favorite => favorite._id !== favoriteId));
      }
    } catch (error) {
      console.error('Error removing from favorites:', error);
    }
  };
  

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Favorite Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favoriteProducts.map(favoriteProduct => (
            <FavoriteProduct
              key={favoriteProduct._id}
              favoriteProduct={favoriteProduct}
              productData={productDetails[favoriteProduct.productId]}
              handleRemoveFromFavorites={handleRemoveFromFavorites}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FavoriteProduct = ({ favoriteProduct, productData, handleRemoveFromFavorites }) => {
  const handleRemoveClick = () => {
    handleRemoveFromFavorites(favoriteProduct._id);
  };


  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-black border">
      <img src={'https://via.placeholder.com/150'} alt={productData.name} className="mx-auto mb-2" />
      <p className="text-lg font-semibold text-gray-800 mb-1">{productData.name}</p>
      <p className="text-gray-600 mb-2">{productData.brand}</p>
      <p className="text-green-600 font-semibold mb-2">${productData.price.toFixed(2)}</p>
      <button className="flex items-center text-red-500" onClick={handleRemoveClick}>
        <FaHeart className="mr-2" />
        Remove from Favorites
      </button>
    </div>
  );
};

export default Favorites;