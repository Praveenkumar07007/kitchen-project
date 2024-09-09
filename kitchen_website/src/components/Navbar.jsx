/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { RiAccountCircleLine } from 'react-icons/ri';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-6 bg-white shadow-md">
        {/* Logo */}
        <img
          src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/logo.svg"
          alt="Logo"
          className="h-10"
        />

        {/* Main Navigation - Hidden on mobile, shown on medium and above */}
        <div className="hidden md:flex md:space-x-9 text-sm font-semibold">
          <Link to="/" className="hover:text-[#DDA859]">
            HOME
          </Link>
          <button className="hover:text-[#DDA859]">VIRTUAL TOURS</button>
          <button className="hover:text-[#DDA859]">PROJECT</button>
          <button className="hover:text-[#DDA859]">PAGES</button>
          <button className="hover:text-[#DDA859]">SHOP</button>
          <button className="hover:text-[#DDA859]">BLOG</button>
          <a href="#footer" className="hover:text-[#DDA859]">
            CONTACT
          </a>
        </div>

        {/* Icons - Hidden on small screens, shown on medium and above */}
        <div className="hidden md:flex space-x-7 text-2xl">
          <button className="hover:text-[#DDA859]">
            <CiSearch />
          </button>
          <button className="hover:text-[#DDA859]">
            <RiAccountCircleLine />
          </button>
          <button className="hover:text-[#DDA859]">
            <HiOutlineShoppingBag />
          </button>
        </div>

        {/* Hamburger Icon - Visible on small screens, controls mobile menu */}
        <button
          className="md:hidden text-2xl hover:text-[#DDA859] z-30"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu - Shown only when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-start p-4 space-y-4 shadow-md z-20">
          <Link to="/" className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={toggleMenu}>
            HOME
          </Link>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            VIRTUAL TOURS
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            PROJECT
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            PAGES
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            SHOP
          </button>
          <a href="#contactus" className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            BLOG
          </a>
          <a href="#footer" className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            CONTACT
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
