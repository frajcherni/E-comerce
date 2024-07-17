import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400 leading-relaxed mb-2">
              we are dedicated to providing the highest quality tech gadgets and customer service. our mission is to innovate and enhance the way you interact with technology.
            </p>
         
          </div>
          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Products</a></li>
              <li><a href="#" className="hover:text-gray-400">Services</a></li>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">123 Main Street</p>
            <p className="text-gray-400">City, State ZIP</p>
            <p className="text-gray-400">Email: contact@example.com</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-8 border-gray-800" />
        {/* Social Icons Section */}
        <div className="flex justify-center items-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
        </div>
        {/* Bottom Text */}
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
