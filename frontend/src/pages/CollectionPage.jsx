import React, { useState, useEffect, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Product/FilterSidebar";
import SortOptions from "../components/Product/SortOptions";
import ProductGrid from "../components/Product/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // 1. Setup Click Outside Listener
    document.addEventListener("mousedown", handleClickOutside);

    // 2. Simulate API Fetching logic from your screenshot
    const timer = setTimeout(() => {
      const fetchedProducts = [
        { _id: 1, name: "Product 1", price: 100, images: [{ url: "https://picsum.photos/500/500?random=3" }] },
        { _id: 2, name: "Product 2", price: 100, images: [{ url: "https://picsum.photos/500/500?random=4" }] },
        { _id: 3, name: "Product 3", price: 100, images: [{ url: "https://picsum.photos/500/500?random=5" }] },
        { _id: 4, name: "Product 4", price: 100, images: [{ url: "https://picsum.photos/500/500?random=6" }] },
        { _id: 5, name: "Product 5", price: 100, images: [{ url: "https://picsum.photos/500/500?random=7" }] },
        { _id: 6, name: "Product 6", price: 100, images: [{ url: "https://picsum.photos/500/500?random=8" }] },
        { _id: 7, name: "Product 7", price: 100, images: [{ url: "https://picsum.photos/500/500?random=9" }] },
        { _id: 8, name: "Product 8", price: 100, images: [{ url: "https://picsum.photos/500/500?random=10" }] },
        { _id: 9, name: "Product 9", price: 100, images: [{ url: "https://picsum.photos/500/500?random=11" }] },
        { _id: 10, name: "Product 10", price: 100, images: [{ url: "https://picsum.photos/500/500?random=12" }] },
      ];
      setProducts(fetchedProducts);
    }, 500);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button 
        onClick={toggleSidebar}
        className="lg:hidden flex items-center justify-center p-2 border-b"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transition-transform transform lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl uppercase font-bold">All Collection</h2>
          <SortOptions />
        </div>

        {/* Pass the products state to the Grid component */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;