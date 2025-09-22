import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  PenTool, 
  Target, 
  BarChart3, 
  Camera, 
  Megaphone,
  ArrowRight,
  Check 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete social media strategy, content planning, and community management across all platforms.',
      features: [
        'Content Strategy Development',
        'Daily Posting & Scheduling',
        'Community Management',
        'Engagement Optimization',
        'Platform-Specific Best Practices',
        'Performance Monitoring',
      ],
      price: 'Starting at $299/month',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'High-quality visual and written content that engages your audience and drives conversions.',
      features: [
        'Graphic Design',
        'Copywriting & Storytelling',
        'Video Content Production',
        'Brand Asset Creation',
        'Content Calendar Planning',
        'Brand Voice Development',
      ],
      price: 'Starting at $399/month',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Digital Advertising',
      description: 'Targeted ad campaigns that reach the right audience and maximize your return on investment.',
      features: [
        'Facebook & Instagram Ads',
        'Google Ads Management',
        'Audience Targeting',
        'Campaign Optimization',
        'A/B Testing',
        'ROI Tracking & Reporting',
      ],
      price: 'Starting at $499/month',
      color: 'from-fuchsia-500 to-purple-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Detailed insights and performance tracking to measure success and optimize strategies.',
      features: [
        'Performance Metrics Analysis',
        'Custom Dashboard Creation',
        'Monthly Performance Reports',
        'Competitor Analysis',
        'Growth Insights',
        'Strategy Recommendations',
      ],
      price: 'Starting at $199/month',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Camera,
      title: 'Photography & Video',
      description: 'Professional visual content creation including photography and video production.',
      features: [
        'Product Photography',
        'Brand Photography',
        'Video Production',
        'Live Streaming Setup',
        'Post-Production Editing',
        'Content Optimization',
      ],
      price: 'Starting at $599/month',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Megaphone,
      title: 'Influencer Marketing',
      description: 'Connect with relevant influencers to expand your reach and build authentic relationships.',
      features: [
        'Influencer Outreach',
        'Campaign Management',
        'Performance Tracking',
        'ROI Optimization',
        'Contract Negotiation',
        'Content Collaboration',
      ],
      price: 'Starting at $699/month',
      color: 'from-blue-500 to-indigo-500',
    },
  ];

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
                Our <span className="text-rose-600">Services</span>
              </h1>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                Comprehensive digital marketing solutions to help your business 
                thrive in the digital landscape and connect with your target audience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-zinc-200 hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-rose-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="text-rose-600 font-semibold mb-4">
                    {service.price}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-zinc-400 mb-8 max-w-3xl mx-auto">
                Let's discuss how our services can help you achieve your business goals 
                and create a powerful online presence that drives results.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;