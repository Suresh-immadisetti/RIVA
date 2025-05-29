import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, DropletIcon, ShieldCheckIcon, SettingsIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

// Import local images
import waterAtmImage from '../assets/images/water-atm.jpg';
import roPanelImage from '../assets/images/ro-panel.jpg';
import accessoriesImage from '../assets/images/accessories.jpg';
import heroBackground from '../assets/images/hero-background.jpg';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  shortDescription: string;
  link: string;
  linkText: string;
}

const Home = () => {
  // Define categories directly in the component
  const categories: Category[] = [
    {
      id: 'water-atms',
      name: 'Water ATMs',
      description: 'Advanced water dispensing solutions for public spaces',
      image: waterAtmImage,
    },
    {
      id: 'ro-controller-panels',
      name: 'RO Controller Panels',
      description: 'Intelligent control panels for water purification systems',
      image: roPanelImage,
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Essential components and parts for your water solutions',
      image: accessoriesImage,
    },
  ];

  // Define products for the carousel
  const products: Product[] = [
    {
      id: 'water-atms',
      name: 'Water ATMs',
      description: 'Advanced dispensing solutions',
      image: waterAtmImage,
      shortDescription: 'Our water ATMs offer reliable dispensing with features like multi-coin acceptance, LED/LCD displays, and UPI payment options.',
      link: '/products/water-atms',
      linkText: 'View Models'
    },
    {
      id: 'ro-controller-panels',
      name: 'RO Controller Panels',
      description: 'Intelligent purification control',
      image: roPanelImage,
      shortDescription: 'Our RO Controller Panels range from basic models to advanced LCD display options with comprehensive protection features.',
      link: '/products/ro-controller-panels',
      linkText: 'Explore Range'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Essential components',
      image: accessoriesImage,
      shortDescription: 'Complete your water solution with our accessories including multi-coin acceptors, solenoid valves, flow sensors, and RFID cards.',
      link: '/products/accessories',
      linkText: 'View Accessories'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  }, [products.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${heroBackground})`,
              backgroundPosition: 'center center',
              objectFit: 'cover'
            }}
          ></div>
        </div>
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              RIVA POWER SOLUTIONS ADVANCED TECHNOLOGY IN RO INDUSTRY
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
             User friendly products
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="btn bg-white text-primary-800 hover:bg-slate-100"
              >
                <span>Explore Products</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="btn border border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Promotional Features */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-700 mb-4">
                <ShieldCheckIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Quality Guarantee</h3>
              <p className="text-slate-600">100% satisfaction with every panel and water ATM we deliver, backed by our comprehensive warranty.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-700 mb-4">
                <DropletIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Water ATM Experts</h3>
              <p className="text-slate-600">Reliable & efficient hydration solutions designed for public spaces, businesses, and communities.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-700 mb-4">
                <SettingsIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Accessories & Support</h3>
              <p className="text-slate-600">Complete setup with all essentials, plus ongoing maintenance and technical support.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Products Carousel - Updated with fixed sizing */}
      <section className="section bg-slate-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Premium Products</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our range of innovative water solutions designed to deliver pure, clean water efficiently
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <motion.div 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="card overflow-hidden group w-full mx-auto flex flex-col md:flex-row h-[500px] md:h-[400px]"
                  >
                    <div className="md:w-1/2 h-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-gray-200">
                        <img 
                          src={product.image}
                          alt={product.name} 
                          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                          style={{
                            objectPosition: 'center center',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">{product.name}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {product.shortDescription}
                      </p>
                      <div className="mt-auto">
                        <Link 
                          to={product.link} 
                          className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium transition-colors duration-200"
                        >
                          <span className="font-semibold">{product.linkText}</span>
                          <ArrowRight size={18} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-800 rounded-full p-2 shadow-lg z-10 transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-800 rounded-full p-2 shadow-lg z-10 transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-200 ${currentSlide === index ? 'bg-primary-700 w-6' : 'bg-slate-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Shop by Categories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse our product categories to find the perfect water solution for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/products/${category.id}`} 
                className="card overflow-hidden group h-96 relative"
              >
                <div className="absolute inset-0 overflow-hidden bg-gray-100">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      objectPosition: 'center center',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      margin: '0 auto'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="mb-4 opacity-90">{category.description}</p>
                  <div className="inline-flex items-center text-white font-medium group">
                    <span>Browse Products</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to upgrade your water solutions?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact our team today to discuss how RIVA Power Solutions can meet your water purification needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/916300021355" 
                className="btn bg-green-500 hover:bg-green-600 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
              <Link 
                to="/contact/email" 
                className="btn bg-white text-primary-800 hover:bg-slate-100"
              >
                Send Email Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;