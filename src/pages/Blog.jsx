import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Search, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Strategy', 'Trends', 'Tutorials', 'Case Studies'];

  const blogPosts = [
    {
      id: 1,
      title: '10 Social Media Trends to Watch in 2024',
      excerpt: 'Discover the latest trends shaping social media marketing and how to leverage them for your business growth.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Trends',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Building an Effective Content Strategy',
      excerpt: 'Learn how to create a content strategy that engages your audience and drives meaningful results.',
      author: 'Mike Chen',
      date: '2024-01-10',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Instagram Reels: A Complete Guide',
      excerpt: 'Master the art of creating engaging Instagram Reels that boost your brand visibility and engagement.',
      author: 'Emma Davis',
      date: '2024-01-05',
      category: 'Tutorials',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'How We Increased Client Engagement by 300%',
      excerpt: 'A detailed case study of our successful social media campaign that drove unprecedented engagement.',
      author: 'Sarah Johnson',
      date: '2024-01-01',
      category: 'Case Studies',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'The Future of Social Commerce',
      excerpt: 'Exploring how social media platforms are revolutionizing e-commerce and what it means for businesses.',
      author: 'Mike Chen',
      date: '2023-12-28',
      category: 'Trends',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'Mastering LinkedIn for B2B Marketing',
      excerpt: 'Advanced strategies for using LinkedIn to generate leads and build professional relationships.',
      author: 'Emma Davis',
      date: '2023-12-20',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '9 min read',
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
                Our <span className="text-rose-600">Blog</span>
              </h1>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                Stay updated with the latest insights, trends, and tips in digital marketing 
                and social media management.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeCategory === category
                        ? 'bg-rose-600 text-white'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-zinc-600 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-rose-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-zinc-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-500">{post.readTime}</span>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-rose-600 font-semibold text-sm hover:text-rose-700 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-zinc-400 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter and get the latest insights, trends, and tips 
                delivered directly to your inbox.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-zinc-900"
                />
                <button className="px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;