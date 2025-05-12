import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-[#0e0c24] text-white pt-32 mt-32">
      {/* Top Subscribe Card */}
      <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl w-11/12 max-w-3xl mx-auto px-6 py-10 z-20 bg-image">
        <h2 className="text-2xl font-bold text-center text-black">
          Subscribe to our Newsletter
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex justify-center mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-md border border-gray-300 w-64 focus:outline-none"
          />
          <button className="px-4 py-2 rounded-r-md text-white bg-gradient-to-r from-pink-400 to-yellow-400">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mt-16">
        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <p className="text-sm text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        {/* Center Logo */}
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10490/10490235.png"
            alt="Cricket Logo"
            className="h-16 w-16 mb-2"
          />
          <h1 className="text-white font-bold text-xl tracking-wide">
            CRICKET
          </h1>
        </div>

        {/* Subscribe Again */}
        <div>
          <h3 className="font-semibold mb-2">Subscribe</h3>
          <p className="text-sm text-gray-400 mb-2">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md text-black w-full focus:outline-none"
            />
            <button className="px-4 py-2 rounded-r-md text-white bg-gradient-to-r from-pink-400 to-yellow-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 pb-6">
        ©2024 Your Company. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
