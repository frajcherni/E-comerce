import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">BrandLogo</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500">Products</a>
            <a href="#" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500">About</a>
            <a href="#" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="hidden sm:block px-3 py-2 border rounded-md text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="flex items-center p-2 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </button>
            {/* Cart Icon with Badge */}
            <a href="#" role="button" className="relative flex">
              <svg className="flex-1 w-8 h-8 fill-current text-gray-900 dark:text-white" viewBox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 text-white font-mono text-sm leading-tight text-center">5</span>
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500">Products</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500">Contact</a>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full px-3 py-2 mt-2 border rounded-md text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
