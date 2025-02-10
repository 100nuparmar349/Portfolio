import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'


// Import all of Bootstrap's JS


import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Project from './Project'


function App() {
  
  return (
    <>
   <Navbar/>
    <div className='main-container'>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     </Routes>
   
    </div>

    </>
  )
}

export default App
