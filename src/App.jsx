import React from 'react';
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
  Lightbulb
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">TechFlow</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#team" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Team</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Innovative Technology
              <span className="text-blue-600"> Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              We transform businesses through cutting-edge technology, delivering scalable solutions that drive growth and innovation.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About TechFlow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a forward-thinking technology company dedicated to creating solutions that matter.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower businesses with innovative technology solutions that drive efficiency, growth, and competitive advantage in the digital age.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">10+ Years of Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">500+ Successful Projects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900">200+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900">15</h4>
                <p className="text-gray-600">Awards Won</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900">99%</h4>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <Lightbulb className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900">50+</h4>
                <p className="text-gray-600">Innovations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Zap className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Custom web applications built with modern frameworks and best practices for optimal performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• React & Next.js Development</li>
                <li>• E-commerce Solutions</li>
                <li>• Progressive Web Apps</li>
                <li>• API Integration</li>
              </ul>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Shield className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-6">
                Scalable cloud infrastructure and migration services to optimize your business operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AWS & Azure Migration</li>
                <li>• DevOps & CI/CD</li>
                <li>• Container Orchestration</li>
                <li>• Security & Compliance</li>
              </ul>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Users className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Consulting</h3>
              <p className="text-gray-600 mb-6">
                Strategic technology consulting to help you make informed decisions and drive digital transformation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Technology Strategy</li>
                <li>• Digital Transformation</li>
                <li>• Process Optimization</li>
                <li>• Training & Support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals dedicated to delivering exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Smith</h3>
              <p className="text-blue-600 mb-4">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Visionary leader with 15+ years in technology innovation and business strategy.
              </p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">SD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Davis</h3>
              <p className="text-green-600 mb-4">CTO</p>
              <p className="text-gray-600 text-sm">
                Technical expert specializing in cloud architecture and scalable system design.
              </p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Johnson</h3>
              <p className="text-purple-600 mb-4">Lead Developer</p>
              <p className="text-gray-600 text-sm">
                Full-stack developer with expertise in modern web technologies and user experience.
              </p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">hello@techflow.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">123 Tech Street, Silicon Valley, CA 94000</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">TechFlow</h3>
              <p className="text-gray-400 mb-4">
                Innovative technology solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;