import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show the popup button after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/919876543210?text=Hello%20RIVA%20Power%20Solutions,%20I%20would%20like%20to%20know%20more%20about%20your%20products.', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="whatsapp-popup">
      {isExpanded ? (
        <div className="bg-white rounded-lg shadow-lg p-4 w-72 animate-in slide-in-from-bottom-5">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-2">
              <MessageCircle size={20} className="text-green-500" />
              <h3 className="font-medium text-slate-800">Chat with Us</h3>
            </div>
            <button 
              onClick={handleToggle}
              className="text-slate-400 hover:text-slate-600"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Have questions about our products? Chat with our team on WhatsApp for quick assistance.
          </p>
          <button 
            onClick={handleWhatsAppRedirect}
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center justify-center space-x-2 transition"
          >
            <MessageCircle size={18} />
            <span>Start Chat</span>
          </button>
        </div>
      ) : (
        <button
          onClick={handleToggle}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default WhatsAppPopup;