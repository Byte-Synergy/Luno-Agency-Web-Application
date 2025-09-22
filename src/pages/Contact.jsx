import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  username: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const services = [
    'Social Media Management',
    'Content Creation',
    'Digital Advertising',
    'Analytics & Reporting',
    'Photography & Video',
    'Influencer Marketing',
    'Custom Solution',
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@lunoagency.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+998 90 123 45 67',
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Tashkent, Uzbekistan',
      description: 'Come say hello at our office',
    },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Store in localStorage for admin
      const requests = JSON.parse(localStorage.getItem('clientRequests') || '[]');
      const newRequest = { ...data, id: Date.now(), timestamp: new Date().toISOString() };
      requests.push(newRequest);
      localStorage.setItem('clientRequests', JSON.stringify(requests));
      
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zinc-50 to-rose-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
                Let's Start a <span className="text-rose-600">Conversation</span>
              </h1>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                Ready to transform your digital presence? Get in touch with our team 
                and let's discuss how we can help your business grow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-lg">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                    Send us a message
                  </h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 mb-2">
                          First Name *
                        </label>
                        <input
                          {...register('firstName')}
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          {...register('lastName')}
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                          placeholder="+998 90 123 45 67"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium text-zinc-700 mb-2">
                          Username (Optional)
                        </label>
                        <input
                          {...register('username')}
                          type="text"
                          id="username"
                          className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                          placeholder="@username"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-zinc-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        {...register('service')}
                        id="service"
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your project and goals..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-rose-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-6">
                    Get in touch
                  </h2>
                  <p className="text-zinc-600 mb-8">
                    We'd love to hear from you. Choose the most convenient way to reach us 
                    and we'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="bg-white rounded-xl p-6 border border-zinc-200 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-rose-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-zinc-900 mb-1">{info.title}</h3>
                          <p className="text-rose-600 font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-zinc-600">{info.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Business Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-br from-rose-50 to-fuchsia-50 rounded-xl p-6 border border-rose-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-2">Business Hours</h3>
                      <div className="space-y-1 text-sm text-zinc-600">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Response */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-teal-50 rounded-xl p-6 border border-teal-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-2">Quick Response</h3>
                      <p className="text-sm text-zinc-600">
                        We typically respond to all inquiries within 24 hours. 
                        For urgent matters, please call us directly.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;