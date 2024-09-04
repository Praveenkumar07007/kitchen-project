/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import UpperNavbar from './components/UpperNavbar'
import ContactUs from './components/ContactUs'
import LowerBody from './components/LowerBody'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <UpperNavbar/>
    <Navbar/>
    <Home />
    <ContactUs />
    <div className="bg-cover opacity-90 text-center flex flex-col justify-center items-center min-h-[500px] bg-[url('https://images.unsplash.com/photo-1667404164680-0c0611858e1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
    <LowerBody />
    <hr />
    <Footer/>

    </div>
    </>
  )
}

export default App