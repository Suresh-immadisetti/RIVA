import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

const ContactEmail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productParam = searchParams.get('product');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: productParam ? `Inquiry about ${productParam}` : '',
    message: productParam ? `I'm interested in ${productParam} and would like to request more information.` : '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Please enter a valid 10-digit phone number';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
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
      // Compose mailto link
      const mailTo = 'rivapowersolutions@gmail.com';
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Message:\n${formData.message}`
      );
      // Open mail client with prefilled mail
      window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;
      
      // Show submission confirmation in UI anyway (optional)
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
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Mail size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-800">Email Inquiry</h1>
                    <p className="text-slate-600">Fill out the form below and we'll get back to you shortly</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-primary-500'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
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
                        placeholder="Your phone number"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                          errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-primary-500'
                        }`}
                        placeholder="What is your inquiry about?"
                      />
                      {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
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
                  
                  <button 
                    type="submit"
                    className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition"
                  >
                    Send Message
                  </button>
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
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Thank You!</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Your message has been prepared in your mail client. Please review and send it.
                </p>
                <Link 
                  to="/"
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
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

export default ContactEmail;
