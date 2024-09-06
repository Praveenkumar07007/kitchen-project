/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaTwitter, FaArrowRight } from 'react-icons/fa';
import { AiOutlinePinterest } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { MdWifiCalling3 } from 'react-icons/md';
import { IoLogoYoutube } from 'react-icons/io5';

function UpperNavbar() {
  return (
    <div className="flex flex-wrap justify-around items-center h-12 bg-[#30373e] px-4 text-gray-400">
      {/* Social Media Icons - Hidden on Mobile */}
      <div className="hidden md:flex space-x-5">
        <FaFacebookF aria-label="Facebook" className="hover:text-white transition-colors" />
        <FaTwitter aria-label="Twitter" className="hover:text-white transition-colors" />
        <AiOutlinePinterest aria-label="Pinterest" className="hover:text-white transition-colors" />
        <IoLogoYoutube aria-label="YouTube" className="hover:text-white transition-colors" />
      </div>

      {/* Contact Information - Hidden on Mobile */}
      <div className="hidden md:flex flex-col md:flex-row md:space-x-5 items-center">
        <div className="flex space-x-3 items-center text-gray-400">
          <IoMdMail aria-label="Email" />
          <p>Email: info@support.com</p>
          <MdWifiCalling3 aria-label="Phone" />
          <p>Call us: +844 1255 668 333</p>
        </div>
      </div>

      {/* Book Appointment Button - Always Visible */}
      <button className="flex items-center bg-[#DAA14C] text-white font-semibold px-3 py-2 rounded hover:bg-[#b88c3d] transition-colors space-x-2">
        <span>Book Appointment</span>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default UpperNavbar;
