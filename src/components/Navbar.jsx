import React from 'react';
import './Navbar.css'; // Import your custom CSS for styling

function Navbar() {
  return (
    <div className="navbar">
      <div className="title">MediHub</div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className="auth-buttons">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
