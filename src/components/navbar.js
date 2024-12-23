import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h1 className="logo">openote.</h1>
        </div>
        <div className="navbar-right">
          <nav>
            <a href="/uploads">uploads</a>
            <a href="/library">library</a>
            <img src="/user-icon.png" alt="User Icon" className="user-icon" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
