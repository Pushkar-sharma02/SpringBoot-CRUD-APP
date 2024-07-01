// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          SpringBoot Project
        </a>
        <div>
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/adduser" className="nav-link">
            Add User
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
