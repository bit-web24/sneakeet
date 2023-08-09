import Products from "./Products";
import React, {useEffect, useState} from "react";
import axios from "axios";

const BASE_API_URL = 'http://localhost:4000/api';

function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Fetch product data from the server using Axios with the dynamic page number
    axios.get(`${BASE_API_URL}/products?page=${currentPage}`)
      .then(response => {
        if (response.data.products) {
          setProducts(response.data.products);
          setTotalPages(response.data.totalPages);
        }
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [currentPage]); // Trigger the effect when currentPage changes

  return (
    <>
      <Products products={products} />
      <div className="flex justify-center mt-4">
      {/* Previous Page Button */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-white bg-gray-800 disabled:bg-gray-400 rounded-md mr-2"
      >
        Previous Page
      </button>
      {/* Next Page Button */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-white bg-gray-800 disabled:bg-gray-400 rounded-md"
      >
        Next Page
      </button>
    </div>
    </>
  );
}

export default Home;