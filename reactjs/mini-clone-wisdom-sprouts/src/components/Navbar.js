import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Wisdom Sprouts</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/placement">Placements</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to="/contact" >Contact us</Link>
        </li>
                <li class="nav-item">
          <Link class="nav-link" to="/about" >About us</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
