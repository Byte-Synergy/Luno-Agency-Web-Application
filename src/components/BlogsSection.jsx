import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: '10 Social Media Trends to Watch in 2024',
      excerpt: 'Discover the latest trends shaping social media marketing and how to leverage them for your business growth.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Trends',
    },
    {
      id: 2,
      title: 'Building an Effective Content Strategy',
      excerpt: 'Learn how to create a content strategy that engages your audience and drives meaningful results.',
      author: 'Mike Chen',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Strategy',
    },
    {
      id: 3,
      title: 'Instagram Reels: A Complete Guide',
      excerpt: 'Master the art of creating engaging Instagram Reels that boost your brand visibility and engagement.',
      author: 'Emma Davis',
      date: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Tutorials',
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
              Latest from Our <span className="text-rose-600">Blog</span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and tips in digital marketing 
              and social media management.
            </p>
          </motion.div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-rose-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-zinc-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                </div>

                {/* Read More */}
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center text-rose-600 font-semibold text-sm hover:text-rose-700 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.article>
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
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Posts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;