import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';  // Adjust path as needed

const Header = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  // Smooth scroll to top on navigation
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle dropdown open/close
  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(prev => !prev);
  };

  // Close dropdown when clicking a dropdown link
  const handleDropdownLinkClick = () => {
    setIsProductsDropdownOpen(false);
    handleNavigation();
  };

  return (
    <header className="bg-primary-900 text-white shadow-md sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo and Home Link */}
        <Link to="/" className="flex items-center space-x-2" onClick={handleNavigation}>
          <img src={logo} alt="RIVA Logo" className="w-18 h-16" />
          <span className="text-xl font-bold">RIVA Power Solutions</span>
        </Link>

        {/* Navigation */}
        <nav className="relative">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="hover:text-primary-300 transition" onClick={handleNavigation}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary-300 transition" onClick={handleNavigation}>
                About Us
              </Link>
            </li>

            {/* Products Dropdown */}
            <li className="relative">
              <button
                onClick={toggleProductsDropdown}
                className="hover:text-primary-300 transition flex items-center space-x-1 focus:outline-none"
                aria-expanded={isProductsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isProductsDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProductsDropdownOpen && (
                <ul
                  className="absolute bg-primary-900 rounded shadow-lg mt-2 right-0 w-48 z-50"
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <li>
                    <Link
                      to="/products/Water-ATM's"
                      className="block px-4 py-2 hover:bg-primary-700 transition"
                      onClick={handleDropdownLinkClick}
                    >
                      Water ATM's
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/RO-Control-Panels"
                      className="block px-4 py-2 hover:bg-primary-700 transition"
                      onClick={handleDropdownLinkClick}
                    >
                      RO Control Panels
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/Accessories"
                      className="block px-4 py-2 hover:bg-primary-700 transition"
                      onClick={handleDropdownLinkClick}
                    >
                      Accessories
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" className="hover:text-primary-300 transition" onClick={handleNavigation}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
