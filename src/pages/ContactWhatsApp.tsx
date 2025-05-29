import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';

const ContactWhatsApp = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productParam = searchParams.get('product');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: productParam ? `I'm interested in ${productParam} and would like to request more information.` : '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Please enter a valid 10-digit phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const text = `Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}`;

      // In a real application, you would send this to your WhatsApp business account
      // For now, we'll simulate it by opening WhatsApp with the message
      window.open(`https://wa.me/916300021355?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-16">
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <Link 
            to="/contact"
            className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Contact Options</span>
          </Link>
          
          <div className="card p-8">
            {!submitted ? (
              <>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-800">WhatsApp Inquiry</h1>
                    <p className="text-slate-600">Fill out the form below to start a conversation on WhatsApp</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                          errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-primary-500'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-primary-500'
                        }`}
                        placeholder="Your WhatsApp number"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                          errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-primary-500'
                        }`}
                        placeholder="Please provide details about your inquiry..."
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center justify-center transition"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    <span>Open WhatsApp</span>
                  </button>
                  
                  <p className="mt-4 text-sm text-slate-500 text-center">
                    By clicking "Open WhatsApp," you'll be redirected to WhatsApp with your message pre-filled.
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">WhatsApp Opened!</h2>
                <p className="text-lg text-slate-600 mb-8">
                  We've redirected you to WhatsApp to continue the conversation. If WhatsApp didn't open, please check your browser settings.
                </p>
                <Link 
                  to="/"
                  className="btn-primary"
                >
                  Return to Home
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactWhatsApp;