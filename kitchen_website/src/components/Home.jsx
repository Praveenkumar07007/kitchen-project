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
    <div className="p-4 md:p-6 lg:p-8 text-center max-w-screen-lg">
      <h3 className="text-xs md:text-sm mb-2 font-semibold leading-tight md:leading-normal">
        HOME PAGE &nbsp;/&nbsp; BOOK A DESIGN APPOINTMENT
      </h3>
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight lg:leading-snug">
        Book A Design Appointment
      </h1>
    </div>
  </div>
);

export default Home;
