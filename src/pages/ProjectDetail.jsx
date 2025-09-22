import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  // Mock data - in real app, fetch from API
  const projects = [
    {
      id: 1,
      title: 'TechStart Inc. Rebrand',
      category: 'Branding',
      description: 'Complete rebranding and social media overhaul for a tech startup, resulting in 300% engagement increase.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: ['300% Engagement Increase', '50K New Followers', '2x Website Traffic'],
      gallery: ['image1.jpg', 'image2.jpg'],
      video: 'video.mp4',
      link: '#',
    },
    // Add other projects...
  ];

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-zinc-600">Project not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zinc-50 to-rose-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {project.category}
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6">
                  {project.title}
                </h1>
                <p className="text-lg text-zinc-600 mb-6">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700"
                >
                  View Live Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
              
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">
                Project Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-rose-600 mb-2">{result.split(' ')[0]}</div>
                    <div className="text-zinc-600">{result.split(' ').slice(1).join(' ')}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery & Video */}
        <section className="py-20 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">
                Project Gallery
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {project.gallery.map((img, index) => (
                  <img key={index} src={img} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                ))}
              </div>
              
              {project.video && (
                <div className="text-center">
                  <button className="inline-flex items-center px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700">
                    <Play className="mr-2 w-4 h-4" />
                    Watch Project Video
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;