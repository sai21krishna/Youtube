import React from 'react';
import './ContentComp.css';

function ContentComp() {
  return (
    <div className="content-container">
      <div className="content-inner">
        <h1>Welcome to ShipGo</h1>
        <p>
          Your trusted partner for fast, reliable, and secure shipping services. Whether you're
          shopping or selling, we ensure your products reach their destination on time with care.
        </p>
        <a href="/products">
          <button>Explore Products</button>
        </a>
      </div>
      <div className="content-image">
        <img src="https://cdn-icons-png.flaticon.com/512/235/235861.png" alt="Delivery Icon" />
      </div>
    </div>
  );
}

export default ContentComp;
