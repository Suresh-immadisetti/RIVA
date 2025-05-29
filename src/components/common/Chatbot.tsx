import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hello! Welcome to RIVA Power Solutions. How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Show chatbot button after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      let botResponse = "Thank you for your message. Our team will get back to you shortly. Would you like to know more about our Water ATMs or RO Control Panels?";
      
      if (input.toLowerCase().includes('water') || input.toLowerCase().includes('atm')) {
        botResponse = "Our Water ATMs are available in various models with features like multi-coin acceptance, LED/LCD displays, and UPI payment options. Would you like more details about a specific model?";
      } else if (input.toLowerCase().includes('ro') || input.toLowerCase().includes('control') || input.toLowerCase().includes('panel')) {
        botResponse = "Our RO Controller Panels range from basic models to advanced LCD display options with multiple features. Would you like to learn more about any specific model?";
      } else if (input.toLowerCase().includes('price') || input.toLowerCase().includes('cost')) {
        botResponse = "Pricing depends on the specific model and features you're interested in. Please contact our sales team at +91 98765 43210 for a detailed quote.";
      }
      
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
    
    setInput('');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden flex flex-col transition-all duration-300 max-h-[500px]">
          {/* Header */}
          <div className="bg-primary-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageSquare size={20} />
              <h3 className="font-medium">RIVA Assistant</h3>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-slate-200"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80">
            {messages.map((msg, index) => (
              <div 
                key={index}
                className={`mb-3 ${
                  msg.sender === 'user' 
                    ? 'ml-auto bg-primary-100 text-primary-800' 
                    : 'mr-auto bg-slate-100 text-slate-800'
                } rounded-lg p-3 max-w-[80%]`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-slate-200 p-3 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-slate-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
            <button 
              type="submit"
              className="bg-primary-600 text-white px-3 py-2 rounded-r-md hover:bg-primary-700 focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-3 shadow-lg transition-transform hover:scale-110"
          aria-label="Open Chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;