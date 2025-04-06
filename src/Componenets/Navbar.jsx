// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-orange-900 p-4 dark:bg-blue-700  ">
      <div className="max-w-7xl mx-auto   flex flex-wrap justify-between dark:bg-blue-700  ">
        <div className="text-white text-2xl font-bold dark:bg-blue-700 dark:text-black">
          <Link to="/">Portfolio</Link>
        </div>

        {/* Desktop Navigation Links 🔆 */}
        <div className="hidden  md:flex space-x-20 ">
          <Link
            to="/"
            className="text-white text-lg font-semibold relative px-4 py-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 dark:text-black"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-semibold relative px-4 py-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 dark:text-black"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white text-lg font-semibold relative px-4 py-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 dark:text-black "
          >
            Projects
          </Link>
          <Link
            to="/contact"
            //className="text-white text-xl hover:text-gray-300 transition duration-300 dark:text-black"
            className="text-white text-lg font-semibold relative px-4 py-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 dark:text-black "
          >
            Contact
          </Link>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="text-white p-2 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          {darkMode ? "🌙" : "🌞"}
        </button>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl dark:text-black"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-gray-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
