import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">ShipGo</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Signup">Signup</Link>
      </nav>
    </header>
  );
}

export default Header;
