import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Zap, 
  Shield, 
  Mail, 
  Phone, 
  MapPin,
  Star,
  Award,
  Target,
  Lightbulb,
  Menu,
  X,
  Code,
  Cloud,
  Smartphone,
  Database,
  Globe,
  Headphones,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">TechFlow</h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#why-choose-us" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Why Choose Us</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
                <a href="#home" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={toggleMenu}>Home</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={toggleMenu}>About</a>
                <a href="#services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={toggleMenu}>Services</a>
                <a href="#why-choose-us" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={toggleMenu}>Why Choose Us</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={toggleMenu}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Innovative Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Empowering businesses through cutting-edge technology solutions. We transform ideas into reality with scalable, innovative approaches that drive growth and success.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              About TechFlow
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We're a forward-thinking technology company dedicated to creating solutions that matter and drive real business value.
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                To empower businesses with innovative technology solutions that drive efficiency, growth, and competitive advantage in the digital age. We envision a world where technology seamlessly integrates with business processes to create extraordinary outcomes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">10+ Years of Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">500+ Successful Projects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">24/7 Premium Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Global Client Base</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">200+</h4>
                <p className="text-gray-600 font-medium">Happy Clients</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">15</h4>
                <p className="text-gray-600 font-medium">Awards Won</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">99%</h4>
                <p className="text-gray-600 font-medium">Success Rate</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <Lightbulb className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">50+</h4>
                <p className="text-gray-600 font-medium">Innovations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions tailored to your business needs and growth objectives.
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Code className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom web applications built with modern frameworks and best practices for optimal performance and user experience.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• React & Next.js Development</li>
                <li>• E-commerce Solutions</li>
                <li>• Progressive Web Apps</li>
                <li>• API Integration & Development</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Cloud className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AWS & Azure Migration</li>
                <li>• DevOps & CI/CD Pipelines</li>
                <li>• Container Orchestration</li>
                <li>• Security & Compliance</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Smartphone className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• iOS & Android Development</li>
                <li>• React Native & Flutter</li>
                <li>• App Store Optimization</li>
                <li>• Mobile UI/UX Design</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Database className="h-12 w-12 text-red-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your data into actionable insights with advanced analytics and business intelligence solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Business Intelligence</li>
                <li>• Data Visualization</li>
                <li>• Machine Learning Models</li>
                <li>• Predictive Analytics</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Globe className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Consulting</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Strategic technology consulting to help you make informed decisions and drive digital transformation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Technology Strategy</li>
                <li>• Digital Transformation</li>
                <li>• Process Optimization</li>
                <li>• Training & Support</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Shield className="h-12 w-12 text-yellow-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive security solutions to protect your business from cyber threats and ensure data integrity.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Security Audits</li>
                <li>• Penetration Testing</li>
                <li>• Compliance Management</li>
                <li>• Incident Response</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Why Choose TechFlow?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We combine expertise, innovation, and dedication to deliver exceptional results for our clients.
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Over a decade of experience delivering successful projects across various industries and technologies.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards of quality in every project, ensuring robust and reliable solutions.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock support and maintenance to ensure your systems run smoothly at all times.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive edge.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Email</p>
                    <p className="text-gray-600">hello@techflow.com</p>
                    <p className="text-gray-600">support@techflow.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Address</p>
                    <p className="text-gray-600">123 Tech Street</p>
                    <p className="text-gray-600">Silicon Valley, CA 94000</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">TechFlow</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Innovative technology solutions for modern businesses. Transforming ideas into reality with cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Cloud Solutions</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Mobile Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Digital Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@techflow.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Tech Street</li>
                <li>Silicon Valley, CA 94000</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechFlow. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;