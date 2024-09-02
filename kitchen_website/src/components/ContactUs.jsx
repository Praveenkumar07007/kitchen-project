/* eslint-disable no-unused-vars */
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

function ContactUs() {
  return (
    <>
      <div className='flex '>
        <div className="flex m-6 flex-col pl-5 mt-5 bg-white w-[50%] h-[900px]">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Enter Your Details</h1>
          <form action="" className="max-w-lg rounded-lg shadow-md space-y-4">
            {/* Name Inputs */}
            <div className="flex flex-row gap-4">
              <label htmlFor="fname" className="flex-1">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name *"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <label htmlFor="lname" className="flex-1">
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name *"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>

            {/* Email and Address Inputs */}
            <div className="flex flex-row gap-4">
              <label htmlFor="email" className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <label htmlFor="address" className="flex-1">
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address *"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>

            {/* Phone and Service Selection */}
            <div className="flex flex-row gap-4">
              <label htmlFor="phone" className="flex-1">
                <input
                  type="number"
                  name="phone"
                  placeholder="Daytime Phone *"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <label htmlFor="service" className="flex-1">
                <select
                  name="service"
                  className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                name="subject"
                placeholder="Subject *"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Message Details */}
            <label htmlFor="detail" className="block">
              <span className="text-gray-700">Message Details:</span>
              <textarea
                name="detail"
                placeholder="Enter your message here..."
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </label>

            {/* How did you hear about us? */}
            <label htmlFor="about" className="block">
              <span className="text-gray-700">How did you hear about us?</span>
              <select
                name="about"
                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <div className="flex  flex-col p-2">
                <label className="flex items-center ">
                  <input
                    type="radio"
                    id="phone"
                    name="choosecontact"
                    value="Phone"
                    className="mr-2  focus:ring-2 focus:ring-blue-500"
                  />
                  Phone
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="text"
                    name="choosecontact"
                    value="Text Message"
                    className="mr-2 focus:ring-2 focus:ring-blue-500"
                  />
                  Text Message
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="email"
                    name="choosecontact"
                    value="Email"
                    className="mr-2 focus:ring-2 focus:ring-blue-500"
                  />
                  Email
                </label>
              </div>
            </div>

            {/* communication preferences */}

            <div className="flex flex-col space-y-2 ">
              <h1 className="text-xl text-gray-700">Communication preferences *</h1>
              <div className="flex  flex-col p-2 ">
                <label className="flex items-center ">
                  <input
                    type="radio"
                    id="yes"
                    name="preference"
                    value="yes"
                    className="mr-2 focus:ring-2 focus:ring-blue-500"
                  />
                  Yes - I would like to receive Kitchens newsletter, special offers and discounts, and local showroom offers via email and SMS
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="no"
                    name="preference"
                    value="no"
                    className="mr-2 focus:ring-2 focus:ring-blue-500"
                  />
                  No - I would not like to receive any marketing communications from Kitchens
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 flex  justify-center  bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
            >
              <span>send Messages</span>
              <FaLongArrowAltRight />
            </button>
          </form>
        </div>

        <div className="w-1/2 bg-cover p-10  text-black opacity-89 bg-[url('https://images.unsplash.com/photo-1556185781-a47769abb7ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <h1 className='text-4xl text-center font-bold  mt-10'>What to expect from your free appointment</h1>
          <p className='mt-20 '>It is a long established fact that reader will be distracted by the readable content of page when looking at its layout. The point of using Lorem is it has a more-or-less normal distribution of letters, using Content here not.</p>
          <ul className=' p-5 mt-[20%] '>
            <li className='m-6'>
              One of our specialist surveyors will visit your home to measure your room and identify utilities and services. It is a non-invasive survey meaning they will not move any floor coverings or fixtures during their visit.
            </li>
            <li className='m-6'>
              The home measure will typically take between 30-60 minutes.
            </li>
            <li className='m-6'>
              Your measurements will then be sent back to your Wren Designer and we will be in touch to arrange a Design Appointment in one of our showrooms at a time that suits you.
            </li>
          </ul>
        </div>
      </div>
    </>

  );
}

export default ContactUs;
