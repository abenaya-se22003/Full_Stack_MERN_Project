import { useState } from "react";
import { FaBars, FaBoxOpen, FaClipboardList, FaUser, FaStore } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Toggle Button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20 items-center justify-between">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* --- Sidebar --- */}
     

      {/* --- Main Content --- */}
      <div className="flex-grow p-6 overflow-y-auto bg-gray-50">
        {/* The Outlet is where different admin pages (Products, Orders, etc.) will appear */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;