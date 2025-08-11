import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Land That Job</h3>
            <p>
              Professional resume writing and LinkedIn optimization to elevate your
              career story and open new opportunities.
            </p>
          </div>

          <nav className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-choose-us">Why Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li><FiMail /><a href="mailto:talhafiaz782@gmail.com">talhafiaz782@gmail.com</a></li>
              <li><FiPhone /><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
              <li><FiMapPin /><span>Passau, Germany</span></li>
              <li className="footer-social"><a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Land That Job. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
