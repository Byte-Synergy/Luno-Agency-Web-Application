import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses starting their social media journey',
      features: [
        '3 Social Media Platforms',
        '12 Posts per Month',
        'Basic Analytics',
        'Community Management',
        'Content Calendar',
        'Email Support',
      ],
      buttonText: 'Get Started',
      popular: false,
    },
    {
      name: 'Business',
      price: '$899',
      period: '/month',
      description: 'Comprehensive solution for growing businesses needing advanced features',
      features: [
        '6 Social Media Platforms',
        '36 Posts per Month',
        'Advanced Analytics & Reporting',
        'Community Management',
        'Content Creation & Strategy',
        'Ad Campaign Management',
        'Monthly Strategy Calls',
        'Priority Support',
        'Custom Branding',
      ],
      buttonText: 'Choose Business',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses looking to scale their presence',
      features: [
        '5 Social Media Platforms',
        '24 Posts per Month',
        'Advanced Analytics',
        'Community Management',
        'Content Creation',
        'Ad Campaign Management',
        'Monthly Strategy Calls',
        'Priority Support',
      ],
      buttonText: 'Most Popular',
      popular: true,
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large businesses with specific needs',
      features: [
        'Unlimited Platforms',
        'Custom Content Volume',
        'Dedicated Account Manager',
        'Advanced Reporting',
        'Influencer Partnerships',
        'Video Production',
        'Weekly Strategy Sessions',
        '24/7 Priority Support',
      ],
      buttonText: 'Contact Sales',
      popular: false,
      negotiated: true,
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
              Simple, <span className="text-rose-600">Transparent</span> Pricing
            </h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features 
              with no hidden fees or long-term contracts.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-rose-500 shadow-lg scale-105'
                  : 'border-zinc-200 hover:border-zinc-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-rose-600 to-fuchsia-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                <p className="text-zinc-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-zinc-600 ml-1">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-rose-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to={plan.negotiated ? "/contact" : "/contact"}
                className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-rose-600 text-white hover:bg-rose-700 shadow-lg hover:shadow-xl'
                    : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border border-zinc-200'
                }`}
              >
                {plan.buttonText}
                {plan.negotiated ? (
                  <MessageCircle className="ml-2 w-5 h-5" />
                ) : (
                  <ArrowRight className="ml-2 w-5 h-5" />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 border border-zinc-200 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-zinc-900 mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-600">
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-rose-600 mr-2" />
                No Setup Fees
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-rose-600 mr-2" />
                Cancel Anytime
              </div>
              <div className="flex items-center justify-center">
                <Check className="w-4 h-4 text-rose-600 mr-2" />
                30-Day Money Back
              </div>
            </div>
            <p className="text-zinc-500 text-xs mt-6">
              All prices are in USD. Custom enterprise solutions available upon request.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;