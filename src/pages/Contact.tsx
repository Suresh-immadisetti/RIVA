import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
        </div>
        <div className="container-custom relative z-10 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
          >
            Get in touch with our team for inquiries, support, or partnership opportunities
          </motion.p>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-8 flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle size={36} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">WhatsApp</h3>
              <p className="text-slate-600 mb-6">
                Chat with us directly on WhatsApp for quick responses and real-time support.
              </p>
              <Link
                to="/contact/whatsapp"
                className="mt-auto btn bg-green-500 hover:bg-green-600 text-white"
              >
                Contact via WhatsApp
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8 flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Mail size={36} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Email</h3>
              <p className="text-slate-600 mb-6">
                Send us a detailed inquiry via email and our team will get back to you promptly.
              </p>
              <Link
                to="/contact/email"
                className="mt-auto btn-primary"
              >
                Contact via Email
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle mx-auto">
              Reach out to us directly through any of these channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Phone size={24} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Phone</h3>
              <a href="tel:+919876543210" className="text-primary-600 hover:underline">+91 6300021355</a>
              <p className="text-sm text-slate-500 mt-2">Mon-Sat, 9am to 6pm</p>
            </div>
            
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Mail size={24} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Email</h3>
              <a href="mailto:rivapowersolutions@gmail.com" className="text-primary-600 hover:underline">rivapowersolutions@gmail.com</a>
              <p className="text-sm text-slate-500 mt-2">24/7 email support</p>
            </div>
            
            <div className="card p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Address</h3>
              <p className="text-slate-600">Plot No9, 4th Phase, IDA Cherlapalli, Medchal Malakajigiri District, Hyderabad, Telangana-500051</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
<section className="bg-white py-12">
  <div className="container-custom">
    <div className="bg-slate-200 h-80 rounded-lg overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.650017967827!2d78.55980191511805!3d17.507900304931375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e1deab3c90b%3A0x5a3f2ec66112f0d9!2sPlot%20No%209%2C%204th%20Phase%2C%20IDA%20Cherlapalli%2C%20Medchal%20Malakajigiri%20District%2C%20Hyderabad%2C%20Telangana%20500051!5e0!3m2!1sen!2sin!4v1685312345678!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy"
        title="RIVA Power Solutions location map"
      ></iframe>
    </div>
  </div>
</section>
    </div>
  );
};

export default Contact;