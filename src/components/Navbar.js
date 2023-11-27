import React from 'react'
import '../App.css';
import {Link } from "react-router-dom";

const Navbar = ({changeBackground,changeButtonImage}) => {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link to="Home" className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/Project" className="nav-link active" aria-current="page" href="#">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link" href="#">About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="Contact" className="nav-link" href="#">Contact </Link>
        </li>
       
      </ul>
      <div className='ms-auto'>
      <button className='hire-me'>Hire Me</button>
      <button className='mode-change ml-16' onClick={changeBackground}>
        <img src={changeButtonImage}/>
      </button>
      </div>
     
    </div>
  </div>
</nav>
  )
}

export default Navbar