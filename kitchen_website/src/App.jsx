/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import UpperNavbar from './components/UpperNavbar'
import { FaTwitter } from "react-icons/fa";

function App() {
  return (
    <>
    <UpperNavbar/>
    <Navbar/>
    <Home />
    </>
  )
}

export default App