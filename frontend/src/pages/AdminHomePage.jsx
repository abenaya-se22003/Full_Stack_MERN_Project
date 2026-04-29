import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  // Mock data for the table
  const orders = [
    {
      _id: "67540ced3376121b361a0ed0",
      user: { name: "Admin User" },
      totalPrice: 199.96,
      status: "Delivered",
    },
    {
      _id: "67540d3ca67b4a70e434e092",
      user: { name: "Admin User" },
      totalPrice: 40,
      status: "Processing",
    },
    {
      _id: "675bf2c6ca77bd83eefd7a18",
      user: { name: "Admin User" },
      totalPrice: 39.99,
      status: "Processing",
    },
    {
      _id: "675c24b09b88827304bd5cc1",
      user: { name: "Admin User" },
      totalPrice: 39.99,
      status: "Processing",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* --- Dashboard Summary Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Revenue Card */}
        <div className="p-4 shadow-md rounded-lg border bg-white">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-2xl font-bold">$319.94</p>
        </div>

        {/* Total Orders Card */}
        <div className="p-4 shadow-md rounded-lg border bg-white">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-2xl font-bold">4</p>
          <Link
            to="/admin/orders"
            className="text-blue-500 hover:underline text-sm"
          >
            Manage Orders
          </Link>
        </div>

        {/* Total Products Card */}
        <div className="p-4 shadow-md rounded-lg border bg-white">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-2xl font-bold">40</p>
          <Link
            to="/admin/products"
            className="text-blue-500 hover:underline text-sm"
          >
            Manage Products
          </Link>
        </div>
      </div>

      {/* --- Recent Orders Table --- */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total Price</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b bg-white hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="py-4 px-4 font-mono text-xs text-gray-900">
                      {order._id}
                    </td>
                    <td className="py-4 px-4">{order.user.name}</td>
                    <td className="py-4 px-4">${order.totalPrice}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    No recent orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;