import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'


// Import all of Bootstrap's JS


import Navbar from './Navbar'
import Home from './Home'
import About from './About'


function App() {
  
  return (
    <>
   <Navbar/>
    <div className='main-container'>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
   
    </div>

    </>
  )
}

export default App
