import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        className="px-4 py-2 w-96 border-2  border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
