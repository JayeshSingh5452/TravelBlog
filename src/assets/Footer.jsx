import React from 'react';

function Footer() {
  return (
    <section className="bg-gray-800 text-white py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <a href="/home" className="block text-gray-300 hover:text-pink-400 transition mb-2">Home</a>
          <a href="/about" className="block text-gray-300 hover:text-pink-400 transition mb-2">About</a>
          <a href="/package" className="block text-gray-300 hover:text-pink-400 transition mb-2">Package</a>
          <a href="/book" className="block text-gray-300 hover:text-pink-400 transition">Book</a>
        </div>

        {/* Extra Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Extra Links</h3>
          <a href="/faq" className="block text-gray-300 hover:text-pink-400 transition mb-2">Ask Question</a>
          <a href="/about-us" className="block text-gray-300 hover:text-pink-400 transition mb-2">About Us</a>
          <a href="/privacy-policy" className="block text-gray-300 hover:text-pink-400 transition mb-2">Privacy Policy</a>
          <a href="/terms-of-use" className="block text-gray-300 hover:text-pink-400 transition">Terms of Use</a>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <a href="tel:+12344567890" className="block text-gray-300 hover:text-pink-400 transition mb-2">
            <i className="fas fa-phone mr-2"></i>+1234-456-7890
          </a>
          <a href="mailto:js807583@gmail.com" className="block text-gray-300 hover:text-pink-400 transition mb-2">
            <i className="fas fa-envelope mr-2"></i>js807583@gmail.com
          </a>
          <a href="#" className="block text-gray-300 hover:text-pink-400 transition">
            <i className="fas fa-map-marker-alt mr-2"></i>Mumbai, India - 400104
          </a>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <a href="#" className="block text-gray-300 hover:text-pink-400 transition mb-2">
            <i className="fab fa-facebook-f mr-2"></i>Facebook
          </a>
          <a href="#" className="block text-gray-300 hover:text-pink-400 transition mb-2">
            <i className="fab fa-twitter mr-2"></i>Twitter
          </a>
          <a href="#" className="block text-gray-300 hover:text-pink-400 transition">
            <i className="fab fa-instagram mr-2"></i>Instagram
          </a>
        </div>
      </div>

      {/* Footer Credit */}
      <footer className="mt-8 text-center">
        <p className="text-gray-400">
          Created by <span className="text-pink-400 font-semibold">JAYESH SINGH</span> | All rights reserved!
        </p>
      </footer>
    </section>
  );
}

export default Footer;
