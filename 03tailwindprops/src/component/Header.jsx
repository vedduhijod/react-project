import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg py-5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-wide">React English</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-gray-200 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Courses
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            About
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
