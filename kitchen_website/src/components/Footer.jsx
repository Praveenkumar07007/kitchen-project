/* eslint-disable no-unused-vars */
import React from 'react'
import { MdWifiCalling3 } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlinePinterest } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
function Footer() {
    return (
        <>
        <div className='flex text-white space-x-8 justify-center min-h-[400px] p-24'>
            <div className=" flex flex-col  space-y-3">
            <img className='h-9 ' src="https://demo2.themelexus.com/kitchor/wp-content/uploads/2022/06/logo.svg" alt="" />
            <p>Subscribe to receive inspiration, ideas, and news in your inbox.</p>
            <div className='flex items-center space-x-2'>
            <MdWifiCalling3 className='text-lg' />
            <h1 className='text-3xl'> +844 1255 668 333
            <p className='text-[20px] ml-4'>Round the clock</p>
            </h1>

            </div>
            <div className='flex space-x-5 text-gray-400'>
                <FaFacebookF />
                <FaTwitter />
                <AiOutlinePinterest />
                <IoLogoYoutube />
                <IoMdMail/>
            </div>
            </div>
            <div className="">
                <h2 className='text-xl'>ABOUT US</h2>
                <div className='flex flex-col mt-5 space-y-1'>
                <a href="">About us</a>
                <a href="">Our team</a>
                <a href="">Testimonials</a>
                <a href="">Right sidebar page</a>
                <a href="">Shortcodes</a>
                </div>
            </div>
            <div className="">
                <h2 className='text-xl'>Explore</h2>
                <div className='flex flex-col mt-5 space-y-1'>
                <a href="">Kitchen Cabinets</a>
                <a href="">Counter Tops</a>
                <a href="">Bathroom Vanities</a>
                <a href="">Vanity Tops</a>
                </div>
            </div>
            <div className="">
                <h2 className='text-xl'>QUICK LINKS</h2>
                <div className='flex flex-col mt-5 space-y-1'>
                <a href="">FAQ</a>
                <a href="">Blog</a>
                <a href="">Design and Quotes</a>
                <a href="">Warranty</a>
                <a href="">Trade Partners</a>
                <a href="">Design</a>
                </div>
            </div>
            <div className=''>
                <h2 className='text-xl mb-4'>SUBSCRIBE TO OUR NEWSLETTER</h2>
                <div className='space-y-2'>
                <p >Subscribe to receive inspiration, ideas, and news in your inbox.</p>
                <input className='w-full rounded-md p-2 bg-slate-50 border-slate-300' type="text" placeholder='Your mail' />
                </div>
            </div>
        </div>
        <div>
        <hr />
        <h2 className='text-center text-white min-h-[50px] items-center '>© Copyright 2024 kitchor. All rights reserved.</h2>
        </div>
        </>
    )
}

export default Footer