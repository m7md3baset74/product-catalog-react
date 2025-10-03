import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow" >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 text-gray-600">
        <Link to="/" className="text-xl font-bold flex items-center gap-1">
        <svg class="shrink-0 w-5 h-5 text-green-600 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
          Akhdar<span className="text-green-600">.</span>
        </Link>
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>
          <Link to="/products" className="hover:text-green-600">
            Products
          </Link>
          <Link to="/about" className="hover:text-green-600">
            About
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4 font-medium">
            <Link
              to="/"
              className="hover:text-green-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-green-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="hover:text-green-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
