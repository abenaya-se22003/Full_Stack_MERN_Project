import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for login would go here
    toast.success("Logging in...");
  };

  return (
    <div className="flex">
      {/* LEFT SIDE: Login Form Container */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 h-screen">
        
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>

          {/* Header */}
          <h2 className="text-2xl font-bold text-center mb-6">
            Hey there! 👋
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your username and password to Login.
          </p>

          {/* Email field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Enter your email address"
            />
          </div>

          {/* Password field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Enter your password"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            Sign In
          </button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE: Blank / Empty Space */}
      <div className="hidden md:block w-1/2">
        {/* This side is intentionally left empty */}
      </div>
    </div>
  );
};

export default Login;