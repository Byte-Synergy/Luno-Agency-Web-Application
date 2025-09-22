import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-zinc-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
              Ready to <span className="text-rose-600">Get Started?</span>
            </h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Let's discuss how we can help transform your digital presence and drive 
              real results for your business. Get in touch with our team today.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Email Us</p>
                  <p className="text-zinc-600">hello@lunoagency.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Call Us</p>
                  <p className="text-zinc-600">+998 90 123 45 67</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Visit Us</p>
                  <p className="text-zinc-600">Tashkent, Uzbekistan</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-lg">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">
                Send us a quick message
              </h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-rose-700 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;