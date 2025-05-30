import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll to top on navigation
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Toggle dropdown
  const toggleProductsDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsProductsDropdownOpen(prev => !prev);
  };

  // Close dropdown when clicking a link
  const handleDropdownLinkClick = () => {
    setIsProductsDropdownOpen(false);
    handleNavigation();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isProductsDropdownOpen && !(e.target as Element).closest('.products-dropdown')) {
        setIsProductsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isProductsDropdownOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary-900 shadow-lg py-2' : 'bg-primary-900/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={handleNavigation}
          >
            <img src={logo} alt="RIVA Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold text-white hidden md:block">RIVA Power Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              <li>
                <Link 
                  to="/" 
                  className="text-white hover:text-primary-300 transition font-medium"
                  onClick={handleNavigation}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white hover:text-primary-300 transition font-medium"
                  onClick={handleNavigation}
                >
                  About Us
                </Link>
              </li>

              {/* Products Dropdown */}
              <li className="relative products-dropdown">
                <button
                  onClick={toggleProductsDropdown}
                  className="text-white hover:text-primary-300 transition flex items-center space-x-1 font-medium"
                  aria-expanded={isProductsDropdownOpen}
                >
                  <span>Products</span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform ${
                      isProductsDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isProductsDropdownOpen && (
                  <ul className="absolute bg-white rounded-lg shadow-xl mt-2 right-0 w-48 z-50 border border-gray-100 overflow-hidden">
                    <li>
                      <Link
                        to="/products/Water-ATM's"
                        className="block px-4 py-3 text-gray-800 hover:bg-primary-50 hover:text-primary-700 transition border-b border-gray-100"
                        onClick={handleDropdownLinkClick}
                      >
                        Water ATM's
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/RO-Control-Panels"
                        className="block px-4 py-3 text-gray-800 hover:bg-primary-50 hover:text-primary-700 transition border-b border-gray-100"
                        onClick={handleDropdownLinkClick}
                      >
                        RO Control Panels
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/Accessories"
                        className="block px-4 py-3 text-gray-800 hover:bg-primary-50 hover:text-primary-700 transition"
                        onClick={handleDropdownLinkClick}
                      >
                        Accessories
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link 
                  to="/contact" 
                  className="text-white hover:text-primary-300 transition font-medium"
                  onClick={handleNavigation}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block py-3 px-4 text-gray-800 hover:bg-primary-50 rounded-md font-medium"
                  onClick={handleNavigation}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-3 px-4 text-gray-800 hover:bg-primary-50 rounded-md font-medium"
                  onClick={handleNavigation}
                >
                  About Us
                </Link>
              </li>
              
              {/* Mobile Products Dropdown */}
              <li className="relative">
                <button
                  onClick={toggleProductsDropdown}
                  className="w-full text-left py-3 px-4 text-gray-800 hover:bg-primary-50 rounded-md flex justify-between items-center font-medium"
                >
                  <span>Products</span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform ${
                      isProductsDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isProductsDropdownOpen && (
                  <ul className="pl-6 mt-2 space-y-2">
                    <li>
                      <Link
                        to="/products/Water-ATM's"
                        className="block py-2 text-gray-800 hover:text-primary-700 font-medium"
                        onClick={handleDropdownLinkClick}
                      >
                        Water ATM's
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/RO-Control-Panels"
                        className="block py-2 text-gray-800 hover:text-primary-700 font-medium"
                        onClick={handleDropdownLinkClick}
                      >
                        RO Control Panels
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/Accessories"
                        className="block py-2 text-gray-800 hover:text-primary-700 font-medium"
                        onClick={handleDropdownLinkClick}
                      >
                        Accessories
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block py-3 px-4 text-gray-800 hover:bg-primary-50 rounded-md font-medium"
                  onClick={handleNavigation}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;