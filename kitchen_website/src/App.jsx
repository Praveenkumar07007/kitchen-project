/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import UpperNavbar from './components/UpperNavbar'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
    <UpperNavbar/>
    <Navbar/>
    <Home />
    <ContactUs />
    </>
  )
}

export default App