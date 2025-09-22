import React from 'react';
    import { Link } from 'react-router-dom';
    import { 
      Share2, 
      PenTool, 
      Target, 
      BarChart3, 
      Camera, 
      Megaphone,
      ArrowRight 
    } from 'lucide-react';
    import { motion } from 'framer-motion';

    const ServicesSection = () => {
      const services = [
        {
          icon: Share2,
          title: 'Social Media Management',
          description: 'Complete social media strategy, content planning, and community management across all platforms.',
          features: ['Content Strategy', 'Daily Posting', 'Community Management', 'Analytics'],
          color: 'from-rose-500 to-pink-500',
        },
        {
          icon: PenTool,
          title: 'Content Creation',
          description: 'High-quality visual and written content that engages your audience and drives conversions.',
          features: ['Graphic Design', 'Copywriting', 'Video Content', 'Brand Assets'],
          color: 'from-teal-500 to-cyan-500',
        },
        {
          icon: Target,
          title: 'Digital Advertising',
          description: 'Targeted ad campaigns that reach the right audience and maximize your return on investment.',
          features: ['Facebook Ads', 'Instagram Ads', 'Google Ads', 'Campaign Optimization'],
          color: 'from-fuchsia-500 to-purple-500',
        },
        {
          icon: BarChart3,
          title: 'Analytics & Reporting',
          description: 'Detailed insights and performance tracking to measure success and optimize strategies.',
          features: ['Performance Metrics', 'Monthly Reports', 'ROI Analysis', 'Growth Insights'],
          color: 'from-orange-500 to-red-500',
        },
        {
          icon: Camera,
          title: 'Photography & Video',
          description: 'Professional visual content creation including photography and video production.',
          features: ['Product Photography', 'Video Production', 'Live Streaming', 'Post-Production'],
          color: 'from-green-500 to-emerald-500',
        },
        {
          icon: Megaphone,
          title: 'Influencer Marketing',
          description: 'Connect with relevant influencers to expand your reach and build authentic relationships.',
          features: ['Influencer Outreach', 'Campaign Management', 'Performance Tracking', 'ROI Optimization'],
          color: 'from-blue-500 to-indigo-500',
        },
      ];

      return (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
                  Our <span className="text-rose-600">Services</span>
                </h2>
                <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                  We offer comprehensive digital marketing solutions to help your business 
                  thrive in the digital landscape and connect with your target audience.
                </p>
              </motion.div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-8 border border-zinc-200 hover:border-zinc-300 hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-rose-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-zinc-600">
                        <div className="w-1.5 h-1.5 bg-rose-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link
                    to="/services"
                    className="inline-flex items-center text-rose-600 font-semibold text-sm hover:text-rose-700 transition-colors group-hover:translate-x-1 transform duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-rose-50 to-fuchsia-50 rounded-2xl p-8 border border-rose-200">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                  Ready to Transform Your Digital Presence?
                </h3>
                <p className="text-zinc-600 mb-6 max-w-2xl mx-auto">
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
              </div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default ServicesSection;