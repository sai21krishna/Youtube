import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section about">
          <h2>ShipGo</h2>
          <p>Your trusted delivery and product solution platform. Fast, reliable, and secure shopping experience.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/signup">Signup</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@shipgo.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 ShipGo Street, Bengaluru, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShipGo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
