import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HomeIcon, InfoIcon, PhoneIcon, ShoppingBagIcon, Menu, X, ChevronDown } from 'lucide-react';
import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
      if (isProductsOpen) setIsProductsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, isProductsOpen]);

  // Scroll to top when route changes
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Scroll to top when pathname changes
    scrollToTop();
  }, [location.pathname]);

  const handleNavLinkClick = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3"
            onClick={() => {
              if (window.location.pathname === '/') {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <img src={logo} alt="RIVA Logo" className="h-12 w-44" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-1 font-medium ${
                  isActive ? 'text-primary-700' : 'text-slate-700 hover:text-primary-600'
                }`
              }
              onClick={handleNavLinkClick}
            >
              <HomeIcon size={16} />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center space-x-1 font-medium ${
                  isActive ? 'text-primary-700' : 'text-slate-700 hover:text-primary-600'
                }`
              }
              onClick={handleNavLinkClick}
            >
              <InfoIcon size={16} />
              <span>About Us</span>
            </NavLink>

            {/* Products Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={toggleProducts}
                className="flex items-center space-x-1 font-medium text-slate-700 hover:text-primary-600"
              >
                <ShoppingBagIcon size={16} />
                <span>Products</span>
                <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg py-2 w-56 z-10">
                  <Link
                    to="/products/water-atm's"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-700"
                    onClick={() => {
                      setIsProductsOpen(false);
                      handleNavLinkClick();
                    }}
                  >
                    Water ATM's
                  </Link>
                  <Link
                    to="/products/ro-control-panels"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-700"
                    onClick={() => {
                      setIsProductsOpen(false);
                      handleNavLinkClick();
                    }}
                  >
                    RO Control Panels
                  </Link>
                  <Link
                    to="/products/accessories"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-700"
                    onClick={() => {
                      setIsProductsOpen(false);
                      handleNavLinkClick();
                    }}
                  >
                    Accessories
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center space-x-1 font-medium ${
                  isActive ? 'text-primary-700' : 'text-slate-700 hover:text-primary-600'
                }`
              }
              onClick={handleNavLinkClick}
            >
              <PhoneIcon size={16} />
              <span>Contact Us</span>
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={(e) => { e.stopPropagation(); toggleMenu(); }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4" onClick={(e) => e.stopPropagation()}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 ${isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-700'} rounded-md`
              }
              onClick={handleNavLinkClick}
            >
              <div className="flex items-center space-x-2">
                <HomeIcon size={16} />
                <span>Home</span>
              </div>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 px-4 ${isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-700'} rounded-md`
              }
              onClick={handleNavLinkClick}
            >
              <div className="flex items-center space-x-2">
                <InfoIcon size={16} />
                <span>About Us</span>
              </div>
            </NavLink>

            {/* Products Dropdown Mobile */}
            <div className="py-2 px-4">
              <button
                onClick={toggleProducts}
                className="flex items-center justify-between w-full text-slate-700"
              >
                <div className="flex items-center space-x-2">
                  <ShoppingBagIcon size={16} />
                  <span>Products</span>
                </div>
                <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductsOpen && (
                <div className="mt-2 pl-6 border-l-2 border-primary-100">
                  <Link
                    to="/products/water-atm's"
                    className="block py-2 text-sm text-slate-700"
                    onClick={handleNavLinkClick}
                  >
                    Water ATM's
                  </Link>
                  <Link
                    to="/products/ro-control-panels"
                    className="block py-2 text-sm text-slate-700"
                    onClick={handleNavLinkClick}
                  >
                    RO Control Panels
                  </Link>
                  <Link
                    to="/products/accessories"
                    className="block py-2 text-sm text-slate-700"
                    onClick={handleNavLinkClick}
                  >
                    Accessories
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 px-4 ${isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-700'} rounded-md`
              }
              onClick={handleNavLinkClick}
            >
              <div className="flex items-center space-x-2">
                <PhoneIcon size={16} />
                <span>Contact Us</span>
              </div>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;