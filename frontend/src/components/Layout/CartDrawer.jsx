import React from 'react';
import { IoMdClose } from "react-icons/io";

const CartDrawer = ({ isCartOpen, toggleCartDrawer }) => {
  return (
    <>
      {/* <-- I REMOVED THE BACKGROUND OVERLAY DIV FROM HERE --> 
      */}

      {/* Cart Drawer Panel - Everything else stays the same */}
      <div className={`fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white shadow-xl z-50 transition-transform duration-300 transform ${isCartOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}>
        
        {/* Close Button Header */}
        <div className="flex justify-end p-4">
          <button onClick={toggleCartDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* ... Rest of your CartDrawer content goes here ... */}
        {/* Cart contents */}
        {/* Checkout button */}

      </div>
    </>
  );
};

export default CartDrawer;