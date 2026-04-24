import React from 'react';
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  // 1. Setup Mock Data (This acts as your API data)
  const cartProducts = [
    {
      id: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={index} className="flex items-start justify-between py-4 border-b">
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              
              {/* Quantity Controller */}
              <div className="flex items-center mt-2 border rounded-md w-fit">
                <button className="px-2 py-1 text-xl border-r hover:bg-gray-100">-</button>
                <span className="px-4">1</span>
                <button className="px-2 py-1 text-xl border-l hover:bg-gray-100">+</button>
              </div>
            </div>
          </div>

          {/* Right Side: Price and Delete */}
          <div className="flex flex-col items-end justify-between h-24">
            <p className="font-semibold">$ {product.price}</p>
            <button className="text-red-500 hover:text-red-700">
              <RiDeleteBin3Line className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;