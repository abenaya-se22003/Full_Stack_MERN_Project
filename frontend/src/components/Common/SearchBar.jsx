import React, { useState } from 'react';
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Add your search logic here
  };

  return (
    <div className="flex items-center">
      {isOpen ? (
        <form 
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pl-4 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            
            {/* Search Submit Icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="ml-2 text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        /* Search Icon Button (Initial State) */
        <button onClick={handleSearchToggle} className="text-gray-700 hover:text-black">
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Search;