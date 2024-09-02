/* eslint-disable no-unused-vars */
import React from 'react';

function Home() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}

const HeroSection = () => (
  <div
    className="min-h-[480px] text-white bg-cover bg-center flex items-center justify-center"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1520604118753-e44d2b46a95d?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    }}
  >
    <div className=" bg-opacity-40 p-6 text-center text-wrap xs:break-all">
      <h3 className="text-sm mb-2 font-semibold leading-5">HOME PAGE &nbsp;/&nbsp; BOOK A DESIGN APPOINMENT</h3>
      <h1 className="text-[4.25rem] font-bold">Book A Design Appointment</h1>
    </div>
  </div>
);

export default Home;
