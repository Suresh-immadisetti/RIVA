import { motion } from 'framer-motion';
import { Award, Target, Users, ThumbsUp } from 'lucide-react';

const About = () => {
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-gradient-to-r from-primary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
        </div>
        <div className="container-custom relative z-10 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <p>ABOUT </p>
            RIVA Power Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
          >
            Pioneering water purification technology since 2015, delivering innovative solutions for a healthier India
          </motion.p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="mb-6 text-slate-700">
                RIVA Power Solutions was founded in 2025 with a vision to revolutionize water purification technology in India. 
                What began as a small operation with just three employees has now grown into a recognized leader in the water 
                treatment industry.
              </p>
              <p className="mb-6 text-slate-700">
                Our journey began with a simple idea: to make purified water accessible, affordable, and easy to dispense for everyone — from urban centers to rural villages. Today, we design and manufacture advanced Water ATM's, RO Control Panels, and a range of smart water automation accessories that power community water systems, schools, hospitals, and public facilities across the region.
              </p>
              <p className="text-slate-700">
                With a focus on innovation, reliability, and ease of use, our products are built to serve a wide range of needs — from coin-operated and UPI-enabled water vending machines to fully programmable RO control systems. We believe in the power of smart technology to solve real-world problems, and we are proud to play a role in creating a more sustainable and water-secure future.
              </p>
              <p className="text-slate-700">
Driven by engineering excellence and a deep commitment to customer satisfaction, Riva Power Solutions continues to expand its footprint across India and beyond — delivering solutions that not only meet the highest standards but also make a meaningful impact.              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/3862372/pexels-photo-3862372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="RIVA Power Solutions facility" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Mission & Vision</h2>
            <p className="section-subtitle mx-auto">
              Driven by purpose, guided by innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="card p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-700 mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To provide affordable, reliable, and technologically advanced water purification solutions that improve 
                access to clean drinking water across India. We're committed to enhancing health outcomes through innovative 
                products that meet the highest standards of quality and efficiency while remaining accessible to all segments 
                of society.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="card p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-700 mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be the leading innovator in water purification technology in India and beyond, pioneering solutions that 
                address the global challenge of clean water access. We envision a future where everyone has reliable access 
                to safe drinking water through our sustainable, user-friendly, and technologically advanced products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide our business and relationships
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={itemVariants} className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-700 mb-4">
                <ThumbsUp size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Quality Excellence</h3>
              <p className="text-slate-600">We are committed to delivering products that meet the highest standards of quality, reliability, and performance.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-700 mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Customer First</h3>
              <p className="text-slate-600">We put our customers at the center of everything we do, focusing on their needs and exceeding their expectations.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-100 text-accent-700 mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Innovation</h3>
              <p className="text-slate-600">We continuously innovate to develop cutting-edge solutions that address evolving water purification challenges.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-700 mb-4">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Social Responsibility</h3>
              <p className="text-slate-600">We are dedicated to improving access to clean water and contributing to healthier communities across India.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;