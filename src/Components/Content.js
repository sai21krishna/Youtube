import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className="content-container">
      <h2>Welcome to ShipGo 🚀</h2>
      <p>
        ShipGo is your one-stop platform for all shipping needs. Explore our products, manage your orders,
        and enjoy a smooth, fast, and reliable delivery experience.
      </p>
      <div className="features">
        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>Get your items shipped across the country in record time.</p>
        </div>
        <div className="feature-card">
          <h3>Trusted Products</h3>
          <p>We partner with verified sellers for safe and authentic orders.</p>
        </div>
        <div className="feature-card">
          <h3>24/7 Support</h3>
          <p>Our customer service is always ready to assist you.</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
