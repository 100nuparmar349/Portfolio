import React from 'react';
import * as bootstrap from 'bootstrap'
import './App.css';
import { Link } from 'react-router-dom'

const Navbar=(()=>{
    return(
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#">Coder</a>

   
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse d-none d-lg-flex justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
         {/* <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>  */}
         <li class="nav-item"><Link to="/" className='nav-link active'>Home</Link></li>
        <li class="nav-item"><Link to="/About" className='nav-link '>About</Link></li>
        <li class="nav-item"><Link to="/Project" className='nav-link '>Project</Link></li>
        <li class="nav-item"><Link to="/Contact" className='nav-link '>Contact</Link></li>
      </ul>
    </div>

   
    <div class="offcanvas offcanvas-end text-bg-dark d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav">
        <li class="nav-item"><Link to="/" className='nav-link active'>Home</Link></li>
        <li class="nav-item"><Link to="/About" className='nav-link '>About</Link></li>
        <li class="nav-item"><Link to="/Project" className='nav-link '>Project</Link></li>
        <li class="nav-item"><Link to="/Contact" className='nav-link '>Contact</Link></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

        </div>
    )
})
export default Navbar; 