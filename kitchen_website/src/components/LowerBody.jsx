/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";

function LowerBody() {
  return (
    <div className=" bg-cover opacity-90 text-center flex flex-col justify-center items-center min-h-[500px]">
      <p className="">WE DREAM IT . I DESIGN IT</p>
      <h1 className="text-4xl font-bold word-wrap m-5">WE CAN BUILD YOU THE KITCHEN <br />OF YOUR DREAMS</h1>
      <button className="bg-yellow-500 text-white flex items-center gap-2 rounded-md p-2 opacity-85 mt-4">
        Schedule a Chat <FaCalendarAlt />
      </button>
    </div>
  );
}

export default LowerBody;
