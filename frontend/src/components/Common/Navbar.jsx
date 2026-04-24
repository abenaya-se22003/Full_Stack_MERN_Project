import React, { useState } from 'react'; // Added useState
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2';
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';

function Navbar() {
  // 1. Create the state to track if cart is open
  const [drawerOpen, setDrawerOpen] = useState(false);

  // 2. Create a function to flip the state
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Left-Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* Center-NavbarLinks */}
        <div className="hidden md:flex space-x-6">
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Men</Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Women</Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Top Wear</Link>
          <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">Bottom Wear</Link>
        </div>

        {/* Right-icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          {/* 3. Add the onClick event to the Shopping Bag Button */}
          <button onClick={toggleDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          <div className='overflow-hidden'>
            <SearchBar />
          </div>

          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* 4. Pass the state and function to CartDrawer */}
      <CartDrawer isCartOpen={drawerOpen} toggleCartDrawer={toggleDrawer} /> 
    </>
  );
}
export default Navbar;