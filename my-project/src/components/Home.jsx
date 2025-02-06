import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Menu, X } from "lucide-react";
import background from "../assets/background.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col bg-[#000A1F] text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={background} alt="Background" className="w-full h-full object-cover opacity-30" />
      </div>

      {/* Header */}
      <nav className="relative z-10 w-full py-5 px-6 md:px-10 bg-black bg-opacity-70 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links */}
        <div className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex items-center justify-center md:space-x-10 
            ${menuOpen ? "flex flex-col p-4 space-y-4" : "hidden md:flex"}`}>
          <a href="#" className="hover:text-gray-400 transition">Home</a>
          <a href="#" className="hover:text-gray-400 transition">Features</a>
          <a href="#" className="hover:text-gray-400 transition">Resources</a>
          <a href="#" className="hover:text-gray-400 transition">Support</a>
          <a href="#" className="hover:text-gray-400 transition">Signup</a>
        </div>

        {/* Logout Button */}
        <button 
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm"
          onClick={() => {
            localStorage.removeItem("authToken"); 
            sessionStorage.clear();  
            navigate("/");
          }}
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col flex-grow items-center justify-center text-center px-5">
        <h1 className="text-3xl md:text-5xl font-bold">Virtual Event Platform</h1>
        <p className="mt-4 text-md md:text-lg max-w-2xl">Host and engage your audience with seamless online events.</p>
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg w-full md:w-auto">
            Start for Free
          </button>
          <button className="bg-white text-black border border-black py-2 px-6 rounded-lg hover:bg-gray-200 w-full md:w-auto">
            Request a Demo
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-10 bg-black bg-opacity-70 text-white text-center md:text-left">
        <div className="container mx-auto flex flex-wrap justify-between px-6 md:px-10">
          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-500"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-500"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-500"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-500"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p>support@gmail.com</p>
            <p>+000 (123) 456 88</p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-2">Join Us</h3>
            <input type="email" placeholder="Email Address" className="p-2 bg-gray-800 border border-gray-600 rounded-md text-white w-full md:w-auto" />
            <button className="mt-2 md:ml-2 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-700 w-full md:w-auto">Sign Up</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
