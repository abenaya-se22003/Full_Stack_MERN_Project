import React from "react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  // Mock data based on your screenshots
  const products = [
    { _id: "123123", name: "Printed Resort Shirt", price: 29.99, sku: "PRNT-RES-004" },
    { _id: "123124", name: "Chino Pants", price: 55, sku: "BW-005" },
    { _id: "123125", name: "Cargo Pants", price: 50, sku: "BW-008" },
    {_id: "123126", name: "Denim Jacket", price: 80, sku: "DJ-001" },
    {_id: "123127", name: "Leather Boots", price: 120, sku: "LB-002" },
    {_id: "123128", name: "Wool Sweater", price: 60, sku: "WS-003" },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("Deleting product with ID:", id);
      // Logic to delete product from your state or database goes here
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4 text-center">Price</th>
              <th className="py-3 px-4 text-center">SKU</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b bg-white hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="py-4 px-4 text-center">${product.price}</td>
                  <td className="py-4 px-4 text-center">{product.sku}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center gap-2">
                      <Link
                        to={`/admin/products/${product._id}/edit`}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No Products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;