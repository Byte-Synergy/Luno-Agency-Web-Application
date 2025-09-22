import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'TechStart Inc. Rebrand',
      category: 'Brand Strategy & Social Media',
      description: 'Complete rebranding and social media overhaul for a tech startup, resulting in 300% engagement increase.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['300% Engagement Increase', '50K New Followers', '2x Website Traffic'],
      link: '#',
    },
    {
      id: 2,
      title: 'FashionHub E-commerce Campaign',
      category: 'Content Creation & Advertising',
      description: 'Comprehensive social media campaign for fashion brand driving sales and brand awareness.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['$250K Revenue Generated', '150% ROAS', '45K New Customers'],
      link: '#',
    },
    {
      id: 3,
      title: 'GreenEats Influencer Partnership',
      category: 'Influencer Marketing',
      description: 'Successful influencer collaboration campaign for sustainable food brand reaching millions.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['5M Impressions', '200K Engagement', '25% Conversion Rate'],
      link: '#',
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
              Our Top <span className="text-rose-600">Projects</span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              Explore some of our most successful projects and see how we've helped 
              businesses achieve their digital marketing goals.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  View Project
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;