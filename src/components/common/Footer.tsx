import { Link } from 'react-router-dom';
import {
  DropletIcon as DroperIcon,
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
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 mb-4" onClick={handleNavigation}>
              <img src={logo} alt="RIVA Logo" className="w-18 h-14" />
              <span className="text-xl font-bold">RIVA Power Solutions</span>
            </Link>
            <p className="text-slate-300 text-sm">
              Leading provider of water treatment solutions, delivering innovative water ATMs and
              RO control panels for homes and businesses across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition" onClick={handleNavigation}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition" onClick={handleNavigation}>About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition" onClick={handleNavigation}>Our Products</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition" onClick={handleNavigation}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/water-atms" className="text-slate-300 hover:text-white transition" onClick={handleNavigation}>Water ATMs</Link>
              </li>
              <li>
                <Link to="/products/ro-controller-panels" className="text-slate-300 hover:text-white transition" onClick={handleNavigation}>RO Controller Panels</Link>
              </li>
              <li>
                <Link to="/products/accessories" className="text-slate-300 hover:text-white transition" onClick={handleNavigation}>Accessories</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-slate-300 mt-1">📍</span>
                <span className="text-slate-300">Plot No9, 4th Phase, IDA Cherlapalli, Medchal Malakajigiri District, Hyderabad, Telangana-500051</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-slate-300">📞</span>
                <a href="tel:+916300021355" className="text-slate-300 hover:text-white transition">+91 6300021355</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-slate-300">✉️</span>
                <a href="mailto:rivapowersolutions@gmail.com" className="text-slate-300 hover:text-white transition">
                  rivapowersolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
              <FacebookIcon size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
              <TwitterIcon size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
              <YoutubeIcon size={20} />
            </a>
            <a href="https://wa.me/916300021355" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} RIVA Power Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;