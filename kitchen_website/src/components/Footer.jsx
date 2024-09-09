/* eslint-disable no-unused-vars */
import React from 'react';
import { MdWifiCalling3 } from 'react-icons/md';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiOutlinePinterest } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { IoLogoYoutube } from 'react-icons/io5';

function Footer() {
  return (
    <footer id='footer'>
      <div className="flex flex-wrap text-white justify-center p-12 space-y-8 md:space-y-0 md:space-x-8 ">
        {/* Logo and Contact Section */}
        <div className="flex flex-col space-y-3 items-center max-w-sm">
          <img
            className="h-9"
            src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/logo.svg"
            alt="Kitchor Logo"
          />
          <p>Subscribe to receive inspiration, ideas, and news in your inbox.</p>
          <div className="flex items-center space-x-2">
            <MdWifiCalling3 className="text-lg" />
            <div>
              <h1 className="text-3xl">+844 1255 668 333</h1>
              <p className="text-[20px]">Round the clock</p>
            </div>
          </div>
          <div className="flex space-x-5 text-gray-400">
            <FaFacebookF />
            <FaTwitter />
            <AiOutlinePinterest />
            <IoLogoYoutube />
            <IoMdMail />
          </div>
        </div>

        {/* About Us Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">ABOUT US</h2>
          <div className="flex flex-col space-y-1">
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Our team</a>
            <a href="#" className="hover:underline">Testimonials</a>
            <a href="#" className="hover:underline">Right sidebar page</a>
            <a href="#" className="hover:underline">Shortcodes</a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">EXPLORE</h2>
          <div className="flex flex-col space-y-1">
            <a href="#" className="hover:underline">Kitchen Cabinets</a>
            <a href="#" className="hover:underline">Counter Tops</a>
            <a href="#" className="hover:underline">Bathroom Vanities</a>
            <a href="#" className="hover:underline">Vanity Tops</a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">QUICK LINKS</h2>
          <div className="flex flex-col space-y-1">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Design and Quotes</a>
            <a href="#" className="hover:underline">Warranty</a>
            <a href="#" className="hover:underline">Trade Partners</a>
            <a href="#" className="hover:underline">Design</a>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="flex flex-col max-w-sm">
          <h2 className="text-xl font-semibold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p>Subscribe to receive inspiration, ideas, and news in your inbox.</p>
          <input
            className="w-full mt-2 rounded-md p-2 bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black"
            type="email"
            placeholder="Your email"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" py-4">
        <hr className="border-gray-600" />
        <h2 className="text-center text-white py-2">
          © Copyright 2024 Kitchor. All rights reserved.
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
