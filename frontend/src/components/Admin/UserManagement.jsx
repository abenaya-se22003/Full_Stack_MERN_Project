import React, { useState } from "react";

const UserManagement = () => {
  const [users] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", // Default role
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  const handleDeleteUser = (userId) => {
  
    if (window.confirm("Are you sure you want to delete this user?")) {
      console.log("User deleted:", userId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      {/* --- Add New User Form --- */}
      <div className="p-6 rounded-lg border mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Add User
          </button>
        </form>
      </div>

      {/* --- User List Table --- */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b bg-white hover:bg-gray-50">
                <td className="py-4 px-4 font-medium text-gray-900">{user.name}</td>
                <td className="py-4 px-4">{user.email}</td>
                <td className="py-4 px-4">{user.role}</td>
                <td className="py-4 px-4">
                  <button onClick={handleDeleteUser} className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;