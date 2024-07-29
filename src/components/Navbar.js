// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Correct path to the logo image

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='navbar'>
      <div className='container'>
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">Real Estate Management</span>
        <div className='hamburger' onClick={handleClick}>
          <i className='icon'>{click ? 'X' : '☰'}</i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><a href='./Hero'>Home</a></li>
          <li><a href='./Featured'>Features</a></li>
          <li><a href='./Footer'>About us</a></li>
          <li><a href='./AdminDashboard'>AdminDashboard</a></li>
          <li><a href='./UserDashboard'>UserDashboard</a></li>
          <li><a href='./Login'>Login</a></li>
          <li><a href='./Signup'>Signup</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
