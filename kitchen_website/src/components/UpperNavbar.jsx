/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlinePinterest } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";


function UpperNavbar() {
    return (
        <div className='flex justify-around items-center h-12 bg-[#30373e]' >
            <div className='flex space-x-5 text-gray-400'>
                <FaFacebookF />
                <FaTwitter />
                <AiOutlinePinterest />
                <IoLogoYoutube />
            </div>
            <div className='flex space-x-5'>
                <div className='flex space-x-3 items-center text-gray-400'>
                    <IoMdMail />
                    <p>Email: info@support.com</p>
                    <MdWifiCalling3 />
                    <p>Call us: +844 1255 668 333</p>
                </div>
                <div className='flex items-center h-12 bg-[#DAA14C] space-x-2 text-white p-3 font-semibold'>
                    <h3>Book Appoinment</h3>
                    <FaArrowRightLong />
                </div>
            </div>
        </div>
    )
}

export default UpperNavbar