import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching orders
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "34567",
          createdAt: new Date(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            { name: "Jacket", image: "https://picsum.photos/150?random=1", price: 120, quantity: 1 },
          ],
          totalPrice: 120,
          isPaid: true,
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);

  // Handle row click to go to details
  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                onClick={() => handleRowClick(order._id)}
                className="border-b hover:bg-gray-50 cursor-pointer"
              >
                <td className="py-2 px-4">
                  <img src={order.orderItems[0].image} className="w-12 h-12 object-cover rounded-lg" alt="" />
                </td>
                <td className="py-2 px-4 font-medium text-gray-900">#{order._id}</td>
                <td className="py-2 px-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                <td className="py-2 px-4">${order.totalPrice}</td>
                <td className="py-2 px-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Paid</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;