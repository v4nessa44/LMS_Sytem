import React from 'react'
import { Link } from 'react-router-dom'

import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src='/assets/Codelogo.png'/>
      </div>

      <div className='menu-container'>
        <Link to="/">About Us</Link>
        <Link to="/about">Courses</Link>
        <Link to="/about">Students</Link>
        <Link to="/about">Teacher</Link>
        <Link to="/about">Contact Us</Link>
        <Link to="/about">Log In</Link>

      </div>
    </div>
  )
}

export default NavBar