import React from "react";
import { useNavigate } from "react-router-dom";
import illustration from "../assets/illustration.jpg";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl flex items-center">
        {/* Left Side - Form */}
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>
          <p className="text-sm text-gray-600 mb-6">
            Already have an account?{" "}
            <button onClick={() => navigate("/")} className="text-indigo-500 font-semibold">
              Login
            </button>
          </p>
          <form onSubmit={(e) => { e.preventDefault(); navigate("/home"); }}>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input type="text" required placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input type="email" required placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" required placeholder="Enter 6 characters or more"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <button type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
              SIGN UP
            </button>
          </form>
        </div>
        {/* Right Side - Illustration */}
        <div className="w-1/2 hidden md:block">
          <img src={illustration} alt="Illustration" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
