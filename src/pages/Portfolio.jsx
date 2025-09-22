import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Branding', 'Social Media', 'Advertising', 'Content Creation'];

  const projects = [
    {
      id: 1,
      title: 'TechStart Inc. Rebrand',
      category: 'Branding',
      description: 'Complete rebranding and social media overhaul for a tech startup.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['300% Engagement Increase', '50K New Followers', '2x Website Traffic'],
      link: '#',
    },
    {
      id: 2,
      title: 'FashionHub E-commerce Campaign',
      category: 'Advertising',
      description: 'Comprehensive social media campaign for fashion brand driving sales.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['$250K Revenue Generated', '150% ROAS', '45K New Customers'],
      link: '#',
    },
    {
      id: 3,
      title: 'GreenEats Influencer Partnership',
      category: 'Social Media',
      description: 'Successful influencer collaboration campaign for sustainable food brand.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['5M Impressions', '200K Engagement', '25% Conversion Rate'],
      link: '#',
    },
    {
      id: 4,
      title: 'FitLife Content Series',
      category: 'Content Creation',
      description: 'Engaging content series for fitness brand building community.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['1M+ Views', '85% Engagement Rate', '30K Community Members'],
      link: '#',
    },
    {
      id: 5,
      title: 'LocalBiz Local SEO Campaign',
      category: 'Advertising',
      description: 'Local SEO and social media campaign for small business growth.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['400% Lead Increase', '200% Foot Traffic', '4.8/5 Rating'],
      link: '#',
    },
    {
      id: 6,
      title: 'Artisan Crafts Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity design for artisanal crafts business.',
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['150% Brand Recognition', '60K Social Followers', '3x Sales Growth'],
      link: '#',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
                Our <span className="text-rose-600">Portfolio</span>
              </h1>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                Explore our successful projects and see how we've helped businesses 
                achieve their digital marketing goals and drive real results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeFilter === filter
                      ? 'bg-rose-600 text-white shadow-lg'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <a
                        href={project.link}
                        className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-zinc-700 hover:text-rose-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-2 mb-4">
                      {project.results.map((result, i) => (
                        <div key={i} className="flex items-center text-sm text-zinc-700">
                          <div className="w-2 h-2 bg-rose-600 rounded-full mr-3"></div>
                          {result}
                        </div>
                      ))}
                    </div>

                    {/* View Project */}
                    <Link
                      to={`/portfolio/${project.id}`}
                      className="inline-flex items-center text-rose-600 font-semibold text-sm hover:text-rose-700 transition-colors group-hover:translate-x-1 transform duration-200"
                    >
                      View Case Study
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-zinc-400 mb-8 max-w-3xl mx-auto">
                Let's discuss your goals and create a custom strategy that drives 
                real results for your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;