import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>We are dedicated to providing quality education...</p>
          </div>

          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/courses">Courses</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>

      <div className="text-center bg-secondary py-2">
        <p className="mb-0">&copy; 2024 Collab Learn Learning Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
