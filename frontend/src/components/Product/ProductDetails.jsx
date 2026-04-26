import React, { useState, useEffect } from "react";
import { toast } from "sonner";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish Jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // 1. Added missing state

  useEffect(() => {
    if (selectedProduct.images.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  // 2. Fixed syntax: properly closed this function
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart.", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          
          {/* --- LEFT: THUMBNAILS (Desktop) --- */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-200"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* --- MIDDLE: MAIN IMAGE --- */}
          <div className="md:w-1/2 mb-4">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            {/* Mobile Thumbnails */}
            <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>
          </div>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-3xl font-semibold mb-2">{selectedProduct.name}</h1>
            
            <div className="mb-4">
              <p className="text-gray-400 line-through text-lg">
                {selectedProduct.originalPrice}
              </p>
              <p className="text-2xl font-bold text-gray-900">
                $ {selectedProduct.price}
              </p>
            </div>

            <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="font-semibold mb-2">Color:</p>
              <div className="flex space-x-3">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "border-blue-500" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="font-semibold mb-2">Size:</p>
              <div className="flex space-x-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-6">
              <p className="font-semibold mb-2">Quantity:</p>
              <div className="flex items-center space-x-4 border w-fit rounded-md px-2 py-1">
                <button 
                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
                   className="text-xl px-2"
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-xl px-2"
                >
                  +
                </button>
              </div>
            </div>

            {/* 3. Updated Button Logic */}
            <button 
              onClick={handleAddToCart} 
              disabled={isButtonDisabled}
              className={`w-full bg-black text-white py-3 rounded-md font-bold uppercase hover:bg-gray-800 transition mb-10 ${
                isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isButtonDisabled ? "Adding..." : "Add to Cart"}
            </button>

            {/* Characteristics Table */}
            <div className="border-t pt-6">
              <h3 className="font-bold text-lg mb-4">Characteristics:</h3>
              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="py-1 text-gray-500">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;