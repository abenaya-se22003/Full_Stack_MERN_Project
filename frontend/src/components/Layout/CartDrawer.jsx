import React from 'react';
import { IoMdClose } from "react-icons/io";
import CartContests from '../Cart/CartContents';

const CartDrawer = ({ isCartOpen, toggleCartDrawer }) => {
  return (
    <>
      {/* Cart Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-xl z-50 transition-transform duration-300 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        
        {/* 1. Close Button Header */}
        <div className="flex justify-end p-4">
          <button onClick={toggleCartDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* 2. Cart contents with scrollable area */}
        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          
          {/* CartContents component or items go here */}
           <CartContests />
        </div>

        {/* 3. Checkout button fixed at the bottom */}
        <div className="p-4 bg-white sticky bottom-0 border-t">
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Checkout
          </button>
          <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
            Shipping, taxes, and discount codes calculated at checkout.
          </p>
        </div>

      </div>
    </>
  );
};

export default CartDrawer;