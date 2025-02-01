import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Recipe App</h2>
          <p>Your one-stop destination for delicious recipes!</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipe">Recipes</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/sakthi__.vel_" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://github.com/sakthivel1610" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Recipe App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
