import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-[#fefbe9]">
      {/* Navbar */}
      <header className="bg-[#1e5631] text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-bold flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#f5f5dc"
            className="w-8 h-8"
          >
            <path d="M198-160 20-480l180-320h137L158-480l120 216 329-536h152l181 320-180 320H623l179-320-121-214-327 534H198Z" />
          </svg>
          <span className="hidden sm:block">InteriorAI</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:underline">
            Marketplace
          </a>
          <a href="#" className="hover:underline">
            Projects
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </nav>

        <button
          onClick={() => navigate('/auth')}
          className="hidden md:block bg-white text-[#1e5631] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100"
        >
          Sign Up
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1e5631] md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#" className="hover:underline">
                Marketplace
              </a>
              <a href="#" className="hover:underline">
                Projects
              </a>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
              <button
                onClick={() => navigate('/auth')}
                className="bg-white text-[#1e5631] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100"
              >
                Sign Up
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 py-12 gap-10 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1e1e1e]">
            Discover Interior <br />
            Designs Right <br />
            In Your Phone
          </h1>
          <p className="text-[#555] text-base max-w-md">
            AR-Enhanced Custom Interior Designs, <br />
            Redefined With The Power Of AI
          </p>
          <button className="bg-[#1e5631] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2d7a3d] transition-all duration-300 transform hover:scale-105">
            🌿 Get Started
          </button>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm text-[#333]">
            <div className="flex flex-col items-center sm:items-start">
              <span className="font-bold text-2xl">240k+</span>
              <span className="text-gray-600">Total Sale</span>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <span className="font-bold text-2xl">100k+</span>
              <span className="text-gray-600">Auctions</span>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <span className="font-bold text-2xl">240k+</span>
              <span className="text-gray-600">Artists</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 max-w-md w-full">
          <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
            <img
              src="https://i.ibb.co/W2zmxgC/interior-demo.jpg"
              alt="Interior AR View"
              className="w-full h-auto object-cover"
            />
            <div className="bg-[#1e5631] text-white p-4">
              <p className="font-medium">
                See The Reality Before It Even Exists
              </p>
              <span className="text-sm text-white/80">📱 KJ</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
