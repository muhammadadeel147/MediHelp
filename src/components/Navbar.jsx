import React from 'react';
import './Navbar.css'; 
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar">
      <div className="title">MediHub</div>
      <div className="menu">
        <ul>
         
          <NavLink to="/"> <li>Home</li></NavLink>
          <NavLink to="/mentalhealth"><li>Mental health</li></NavLink>
          <NavLink to="/services"><li>Services</li></NavLink>
          <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>
        <div className="auth-buttons">
          
        <NavLink to="/login"><button>Login</button></NavLink>  
        <NavLink to="/registration"><button>Register</button></NavLink> 
        </div>
      </div>
    </div>
  );
}

export default Navbar;
