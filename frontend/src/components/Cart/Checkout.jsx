import React, { useState } from "react";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* --- LEFT SECTION: Form --- */}
      <div>
        <h2 className="text-2xl uppercase mb-6 font-semibold">Checkout</h2>
        <form>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value="user@example.com" // Mock user
              className="w-full p-2 border rounded bg-gray-50 cursor-not-allowed"
              disabled
            />
          </div>

          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={shippingAddress.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={shippingAddress.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={shippingAddress.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={shippingAddress.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={shippingAddress.postalCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={shippingAddress.country}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={shippingAddress.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button className="w-full bg-black text-white py-3 rounded text-lg font-medium hover:bg-gray-800">
            Continue to Payment
          </button>
        </form>
      </div>

      {/* --- RIGHT SECTION: Order Summary --- */}
      <div className="bg-gray-50 p-6 rounded-lg self-start">
        <h2 className="text-xl font-medium mb-6">Order Summary</h2>
        <div className="border-b mb-6 max-h-[400px] overflow-y-auto">
          {cart.products.map((item, index) => (
            <div key={index} className="flex items-start justify-between py-4 border-b last:border-none">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-24 object-cover rounded mr-4"
                />
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                </div>
              </div>
              <p className="font-semibold">${item.price}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${cart.totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
        </div>
        <div className="flex justify-between text-xl font-bold border-t pt-4">
          <span>Total</span>
          <span>${cart.totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;