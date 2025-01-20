import React from 'react';
import './Footer.css'; // Include your custom CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-box">
        {/* Quick Links */}
        <div className="footer-box-item">
          <h3 className="footer-title">Quick Links</h3>
          <a href="/home" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/package" className="footer-link">Package</a>
          <a href="/book" className="footer-link">Book</a>
        </div>

        {/* Extra Links */}
        <div className="footer-box-item">
          <h3 className="footer-title">Extra Links</h3>
          <a href="/faq" className="footer-link">Ask Question</a>
          <a href="/about-us" className="footer-link">About Us</a>
          <a href="/privacy-policy" className="footer-link">Private Policy</a>
          <a href="/terms-of-use" className="footer-link">Terms of Use</a>
        </div>

        {/* Contact Info */}
        <div className="footer-box-item">
          <h3 className="footer-title">Contact Info</h3>
          <a href="tel:+12344567890" className="footer-link">
            <i className="fas fa-phone" style={{ marginRight: '8px' }}></i>+1234-456-7890
          </a>
          <a href="mailto:js807583@gmail.com" className="footer-link">
            <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>js807583@gmail.com
          </a>
          <a href="#" className="footer-link">
            <i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i> Mumbai, India - 400104
          </a>
        </div>

        {/* Follow Us */}
        <div className="footer-box-item">
          <h3 className="footer-title">Follow Us</h3>
          <a href="#" className="footer-link">
            <i className="fab fa-facebook-f" style={{ marginRight: '8px' }}></i>Facebook
          </a>
          <a href="#" className="footer-link">
            <i className="fab fa-twitter" style={{ marginRight: '8px' }}></i>Twitter
          </a>
          <a href="#" className="footer-link">
            <i className="fab fa-instagram" style={{ marginRight: '8px' }}></i>Instagram
          </a>
        </div>
      </div>

      {/* Footer Credit */}
      <footer className="footer-credit">
        <div className="credit-text">
          Created by <span className="footer-credit-name">JAYESH SINGH</span> | All rights reserved!
        </div>
      </footer>
    </section>
  );
}

export default Footer;
