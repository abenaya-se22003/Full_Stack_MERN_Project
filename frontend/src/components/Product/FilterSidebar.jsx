import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];
  const genders = ["Men", "Women"];
  const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen", "Viscose", "Fleece"];
  const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashionista", "ChicStyle"];

  const handleFilterChange = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((cat) => (
          <div key={cat} className="flex items-center mb-1">
            <input 
              type="radio" name="category" value={cat} 
              onChange={(e) => handleFilterChange("category", e.target.value)}
              className="mr-2 h-4 w-4 text-blue-500" 
            />
            <span className="text-gray-700">{cat}</span>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gen) => (
          <div key={gen} className="flex items-center mb-1">
            <input 
              type="radio" name="gender" value={gen} 
              onChange={(e) => handleFilterChange("gender", e.target.value)}
              className="mr-2 h-4 w-4 text-blue-500" 
            />
            <span className="text-gray-700">{gen}</span>
          </div>
        ))}
      </div>

      {/* Color Swatches */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleFilterChange("color", color)}
              className="w-6 h-6 rounded-full border border-gray-300"
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Size Checkboxes */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input type="checkbox" className="mr-2" onChange={() => {}} />
            <span className="text-gray-700 text-sm">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Checkboxes */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 text-blue-500"
              value={material}
              onChange={(e) => handleFilterChange("material", e.target.checked ? material : "")}
            />
            <span className="text-gray-700 text-sm">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Checkboxes */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 text-blue-500"
              value={brand}
              onChange={(e) => handleFilterChange("brand", e.target.checked ? brand : "")}
            />
            <span className="text-gray-700 text-sm">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Price Range</label>
        <input 
          type="range" min="0" max="100" 
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, e.target.value])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
        />
        <div className="flex justify-between text-gray-600 text-sm mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;