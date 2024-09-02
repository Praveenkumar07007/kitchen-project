/* eslint-disable no-unused-vars */
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";


function Navbar() {
    return (
        <div>
            <div className='flex justify-between p-9 items-center min-h-21'>
                <img src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/logo.svg" alt="" />
                <div className='lg:space-x-9  text-sm font-semibold'>
                    <button className='hover:text-[#DDA859]'>HOME</button>
                    <button className='hover:text-[#DDA859]'>VIRTUAL TOURS</button>
                    <button className='hover:text-[#DDA859]'>PROJECT</button>
                    <button className='hover:text-[#DDA859]'>PAGES</button>
                    <button className='hover:text-[#DDA859]'>SHOP</button>
                    <button className='hover:text-[#DDA859]'>BLOG</button>
                    <button className='hover:text-[#DDA859]'>CONTACT</button>
                </div>
                <div className='space-x-7 text-2xl '>
                    <button className='hover:text-[#DDA859]'><CiSearch /></button>
                    <button className='hover:text-[#DDA859]'><RiAccountCircleLine /></button>
                    <button className='hover:text-[#DDA859]'><HiOutlineShoppingBag /></button>
                    <button className='hover:text-[#DDA859]'><RxHamburgerMenu /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar