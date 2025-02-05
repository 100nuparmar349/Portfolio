import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'


// Import all of Bootstrap's JS


import Navbar from './Navbar'
import Home from './Home'

function App() {
  
  return (
    <>
   <Navbar/>
    <div>
   
   
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
    </div>

    </>
  )
}

export default App
