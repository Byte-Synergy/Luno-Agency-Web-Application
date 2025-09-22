import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Thompson',
      position: 'CEO, TechStart Inc.',
      content: 'Luno Agency transformed our social media presence completely. Our engagement rates increased by 300% in just 3 months. Their team is professional, creative, and results-driven.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      position: 'Marketing Director, FashionHub',
      content: 'Working with Luno was a game-changer for our brand. They understood our vision perfectly and delivered content that resonated with our audience. Highly recommended!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 3,
      name: 'David Chen',
      position: 'Founder, GreenEats',
      content: 'The analytics and reporting from Luno are top-notch. We can see exactly how our social media efforts are contributing to our business growth. Excellent service!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zinc-50 to-rose-50">
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
              What Our <span className="text-rose-600">Clients Say</span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about working with Luno Agency.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-zinc-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-rose-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-rose-600 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-zinc-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-zinc-900">{testimonial.name}</h4>
                  <p className="text-sm text-zinc-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <div className="text-3xl font-bold text-rose-600 mb-2">500+</div>
              <div className="text-zinc-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <div className="text-3xl font-bold text-rose-600 mb-2">98%</div>
              <div className="text-zinc-600">Satisfaction Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <div className="text-3xl font-bold text-rose-600 mb-2">4.9/5</div>
              <div className="text-zinc-600">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;