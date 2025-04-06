import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen font-sans bg-[#fefbe9]">
      {/* Navbar */}
      <header className="bg-[#1e5631] text-white px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#f5f5dc"
          >
            <path d="M198-160 20-480l180-320h137L158-480l120 216 329-536h152l181 320-180 320H623l179-320-121-214-327 534H198Z" />
          </svg>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
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
        <button className="bg-white text-[#1e5631] px-4 py-2 rounded-lg font-semibold text-sm">
          Sign Up
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 py-12 gap-10">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1e1e1e] mb-4">
            Discover Interior <br />
            Designs Right <br />
            In Your Phone
          </h1>
          <p className="text-[#555] text-base mb-6">
            AR-Enhanced Custom Interior Designs, <br />
            Redefined With The Power Of AI
          </p>
          <button className="bg-[#1e5631] text-white px-6 py-3 rounded-xl font-medium mb-8">
            🌿 Get Started
          </button>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-[#333]">
            <div>
              <span className="font-bold text-lg">240k+</span>
              <br /> Total Sale
            </div>
            <div>
              <span className="font-bold text-lg">100k+</span>
              <br /> Auctions
            </div>
            <div>
              <span className="font-bold text-lg">240k+</span>
              <br /> Artists
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 max-w-md w-full">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://i.ibb.co/W2zmxgC/interior-demo.jpg"
              alt="Interior AR View"
              className="w-full h-auto"
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
