import React from "react";
import { useNavigate } from "react-router-dom";
import googleLogo from "../assets/google-logo.png";
import facebookLogo from "../assets/facebook.png";
import illustration from "../assets/illustration.jpg";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-600 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-4xl w-full flex flex-col md:flex-row items-center">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
          <p className="text-sm text-gray-600 mb-6">
            Don’t have an account yet?{" "}
            <button onClick={() => navigate("/signup")} className="text-indigo-500 font-semibold">
              Sign Up
            </button>
          </p>
          <form onSubmit={(e) => { e.preventDefault(); navigate("/home"); }}>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input type="email" required placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" required placeholder="Enter 6 characters or more"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
              <a href="#" className="text-sm text-indigo-500 float-right">Forgot Password?</a>
            </div>
            <button type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
              LOGIN
            </button>
          </form>
          <p className="text-center text-gray-600 my-4">or login with</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto px-4 py-2 border rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100">
              <img src={googleLogo} alt="Google" className="w-5 h-5" />
              <span>Google</span>
            </button>
            <button className="w-full sm:w-auto px-4 py-2 border rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100">
              <img src={facebookLogo} alt="Facebook" className="w-5 h-5" />
              <span>Facebook</span>
            </button>
          </div>
        </div>
        {/* Right Side - Illustration (Hidden on Small Screens) */}
        <div className="w-full md:w-1/2 hidden md:flex justify-center">
          <img src={illustration} alt="Illustration" className="w-full max-w-xs md:max-w-md"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
