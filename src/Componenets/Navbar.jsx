import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full top-0 z-40 dark:bg-[rgba(252,250,250,0.8)] bg-[rgba(10,10,10,0.8)]backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-xl text-white dark:text-black">
            Ashish<span className="text-blue-500"> Kumar</span>
          </Link>

          {/* Mobile Menu Button */}
          <div
            className="w-7 h-5 relative cursor-pointer  z-40 md:hidden dark:text-black text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 dark:text-black hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 dark:text-black hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 dark:text-black hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 dark:text-black hover:text-white transition-colors"
            >
              Contact
            </Link>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-300 px-4 py-2 rounded  text-white hover:bg-blue-600 transition-colors font-medium"
            >
              {darkMode ? "🌙" : "🌞"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center dark:bg-[rgba(252,250,250,0.8)] bg-[rgba(10,10,10,0.95)] backdrop-blur-md p-4 space-y-4 text-white">
          <Link
            to="/"
            className="text-gray-300 dark:text-black hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 dark:text-black hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 dark:text-black hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-300 dark:text-black hover:text-white transition-colors"
          >
            Contact
          </Link>
          <button
            onClick={toggleDarkMode}
            className="text-sm px-3 py-2 rounded text-white hover:bg-blue-600 transition-colors font-medium"
          >
            {darkMode ? "🌙" : "🌞"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
