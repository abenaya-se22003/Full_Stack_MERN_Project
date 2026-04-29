import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaBoxOpen, FaClipboardList, FaStore, FaSignOutAlt } from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing local storage)
    navigate("/");
  };

  const navItems = [
    { to: "/admin/users", label: "Users", icon: <FaUser /> },
    { to: "/admin/products", label: "Products", icon: <FaBoxOpen /> },
    { to: "/admin/orders", label: "Orders", icon: <FaClipboardList /> },
    { to: "/admin/shop", label: "Shop", icon: <FaStore /> },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <NavLink to="/admin" className="text-2xl font-medium text-white">
          Rabbit
        </NavLink>
      </div>
      <h2 className="text-xl font-medium mb-6 text-center text-gray-300">
        Admin Dashboard
      </h2>

      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 transition"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;