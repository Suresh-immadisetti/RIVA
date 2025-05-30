import { Link } from 'react-router-dom';
import {
  DropletIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
  MessageCircle,
} from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  // Function to handle smooth scroll to top when navigating
  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8 border-t border-primary-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3" onClick={handleNavigation}>
              <img src={logo} alt="RIVA Logo" className="w-18 h-14" />
              <span className="text-xl font-bold">RIVA Power Solutions</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading provider of water treatment solutions, delivering innovative water ATM's and
              RO Control Panels for homes and businesses across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-primary-700">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition flex items-center" onClick={handleNavigation}>
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition flex items-center" onClick={handleNavigation}>
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition flex items-center" onClick={handleNavigation}>
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition flex items-center" onClick={handleNavigation}>
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-primary-700">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/Water-ATM's" className="text-slate-300 hover:text-white transition flex items-center" onClick={handleNavigation}>
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Water ATM's
                </Link>
              </li>
              <li>
                <Link to="/products/RO-Control-Panels" className="text-slate-300 hover:text-white transition flex items-center" onClick={handleNavigation}>
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  RO Control Panels
                </Link>
              </li>
              <li>
                <Link to="/products/Accessories" className="text-slate-300 hover:text-white transition flex items-center" onClick={handleNavigation}>
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-primary-700">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <div className="text-primary-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-300">Plot No9, 4th Phase, IDA Cherlapalli, Medchal Malakajigiri District, Hyderabad, Telangana-500051</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="text-primary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a href="tel:+916300021355" className="text-slate-300 hover:text-white transition">+91 6300021355</a>
              </li>
              <li className="flex items-center space-x-4">
                <div className="text-primary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:rivapowersolutions@gmail.com" className="text-slate-300 hover:text-white transition">
                  rivapowersolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-16 pt-8 border-t border-primary-700 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition">
              <FacebookIcon size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition">
              <TwitterIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition">
              <YoutubeIcon size={20} />
            </a>
            <a href="https://wa.me/916300021355" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition">
              <MessageCircle size={20} />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} RIVA Power Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;