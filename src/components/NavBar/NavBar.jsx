import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <Link to= "/">
        <div className="logo">
          <img src="/assets/Codelogo.png" />
        </div>
      </Link>

      <div className="menu-container">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        
        <Link to="/login" className="loginBtn">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
