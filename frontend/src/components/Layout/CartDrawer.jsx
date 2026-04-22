import React from 'react';
import { IoMdClose } from "react-icons/io";
import CartContents from '../Cart/CartContents';

const CartDrawer = ({ isCartOpen, toggleCartDrawer }) => {
  return (
    <>
      {/* Background Overlay - Darkens the screen when cart is open */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleCartDrawer}
      ></div>

      {/* Cart Drawer Panel */}
      <div className={`fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-xl z-50 transition-transform duration-300 transform ${isCartOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}>
        
        {/* Close Button Header */}
        <div className="flex justify-end p-4">
          <button onClick={toggleCartDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Cart contents with scrollable area */}
        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          
          {/* Placeholder for actual cart items */}
          <div className="text-gray-500 text-center mt-10">
           
            {/* Component cart context */}
            <CartContents />
          </div>
        </div>

        {/* Checkout button fixed at the bottom */}
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