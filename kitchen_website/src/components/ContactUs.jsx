/* eslint-disable no-unused-vars */
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

function ContactUs() {
  return (
    <contactus  className='flex flex-col md:flex-row text-white'>
      {/* Contact Form */}
      <div className="flex flex-col items-center w-full md:w-1/2 min-h-[850px] bg-gradient-to-r from-[#0C0C0A] via-[#0B0907] to-[#110F0D] p-4">
        <h1 className="text-3xl md:text-4xl font-bold mt-10 md:mt-20 text-center">Enter Your Details</h1>
        <form className="w-full max-w-lg p-6 rounded-lg shadow-md space-y-4 ">
          {/* Name Inputs */}
          <div className="flex flex-col md:flex-row gap-4">
            <label htmlFor="fname" className="flex-1">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name *"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </label>
            <label htmlFor="lname" className="flex-1">
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name *"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </label>
          </div>

          {/* Email and Address Inputs */}
          <div className="flex flex-col md:flex-row gap-4">
            <label htmlFor="email" className="flex-1">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </label>
            <label htmlFor="address" className="flex-1">
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Street Address *"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </label>
          </div>

          {/* Phone and Service Selection */}
          <div className="flex flex-col md:flex-row gap-4">
            <label htmlFor="phone" className="flex-1">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Daytime Phone *"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </label>
            <label htmlFor="service" className="flex-1">
              <select
                id="service"
                name="service"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Choose Your Services</option>
                <option value="Home Check">Home Check</option>
                <option value="Smart Care">Smart Care</option>
                <option value="Fast Delivery">Fast Delivery</option>
                <option value="Personalization">Personalization</option>
              </select>
            </label>
          </div>

          {/* Subject Input */}
          <label htmlFor="subject" className="block">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject *"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </label>

          {/* Message Details */}
          <label htmlFor="detail" className="block">
            <span className="text-gray-700">Message Details:</span>
            <textarea
              id="detail"
              name="detail"
              placeholder="Enter your message here..."
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              rows="4"
            ></textarea>
          </label>

          {/* How did you hear about us? */}
          <label htmlFor="about" className="block">
            <span className="text-gray-700">How did you hear about us?</span>
            <select
              id="about"
              name="about"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="0">-----</option>
              <option value="1">College Course Information Unit</option>
              <option value="2">Email from the College</option>
              <option value="3">Text message from the College</option>
            </select>
          </label>

          {/* Preferred Contact Method */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl text-gray-700">Preferred contact method *</h1>
            <div className="flex flex-col p-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="contact-phone"
                  name="choosecontact"
                  value="Phone"
                  className="mr-2 focus:ring-2 focus:ring-black"
                />
                Phone
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="contact-text"
                  name="choosecontact"
                  value="Text Message"
                  className="mr-2 focus:ring-2 focus:ring-black"
                />
                Text Message
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="contact-email"
                  name="choosecontact"
                  value="Email"
                  className="mr-2 focus:ring-2 focus:ring-black"
                />
                Email
              </label>
            </div>
          </div>

          {/* Communication preferences */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-xl text-gray-700">Communication preferences *</h1>
            <div className="flex flex-col p-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="preference-yes"
                  name="preference"
                  value="yes"
                  className="mr-2 focus:ring-2 focus:ring-black"
                />
                Yes - I would like to receive Kitchens newsletter, special offers and discounts, and local showroom offers via email and SMS
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="preference-no"
                  name="preference"
                  value="no"
                  className="mr-2 focus:ring-2 focus:ring-black"
                />
                No - I would not like to receive any marketing communications from Kitchens
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 justify-center bg-white text-black rounded hover:bg-[#242625] hover:text-white transition-colors duration-300"
          >
            <div className='flex items-center justify-center font-semibold space-x-3'>
              <span>Send Messages</span>
              <FaLongArrowAltRight />
            </div> 
          </button>
        </form>
      </div>

      {/* Right Side Image and Text */}
      <div id="contactus" className="w-full md:w-1/2 bg-cover bg-center p-6 md:p-10 text-white bg-[url('https://images.pexels.com/photos/3302488/pexels-photo-3302488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        <h1 className='text-3xl md:text-4xl font-bold mt-10 mb-4 text-center md:text-left'>What to expect from your free appointment</h1>
        <p className='mt-4 mb-6 text-sm md:text-base'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem is it has a more-or-less normal distribution of letters, using Content here not.
        </p>
        <ul className='p-5 space-y-4'>
          <li>
            One of our specialist surveyors will visit your home to measure your room and identify utilities and services. It is a non-invasive survey meaning they will not move any floor coverings or fixtures during their visit.
          </li>
          <li>
            The home measure will typically take between 30-60 minutes.
          </li>
          <li>
            Your measurements will then be sent back to your Wren Designer, and we will be in touch to arrange a Design Appointment in one of our showrooms at a time that suits you.
          </li>
        </ul>
      </div>
    </contactus>
  );
}

export default ContactUs;
