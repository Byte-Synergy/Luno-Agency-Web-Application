import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);

  // Mock data - in real app, fetch from API
  const blogPosts = [
    {
      id: 1,
      title: '10 Social Media Trends to Watch in 2024',
      content: `Social media is constantly evolving, and staying ahead of the curve is crucial for businesses. Here are the top 10 trends that will shape the landscape in 2024:

## 1. AI-Powered Content Creation
Artificial intelligence is revolutionizing how we create and distribute content. From automated caption generation to predictive analytics, AI tools are becoming essential for efficient content strategies.

## 2. Short-Form Video Dominance
TikTok and Instagram Reels continue to dominate, with longer-form content adapting to shorter attention spans. Expect to see more brands embracing 15-30 second video formats.

## 3. Social Commerce Integration
The line between social media and e-commerce is blurring. Platforms are integrating shopping features directly into their apps, making it easier for users to purchase without leaving the platform.

## 4. Authenticity and Transparency
Users are demanding more authentic content. Behind-the-scenes content, user-generated content, and transparent business practices are becoming increasingly important.

## 5. Community Building
Social media is shifting from broadcast to community. Brands that focus on building engaged communities rather than just accumulating followers will see better results.

These trends represent the future of social media marketing. Adapting to these changes will be key to staying competitive in 2024.`,
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Trends',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
      authorBio: 'Sarah is a digital marketing strategist with over 8 years of experience helping brands navigate the ever-changing social media landscape.',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    },
    // Add other posts...
  ];

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === parseInt(id));
    setPost(foundPost);

    // Reading progress
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-zinc-600">Post not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareText = `Check out this article: ${post.title}`;

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-zinc-200 z-50">
        <div 
          className="h-full bg-rose-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zinc-50 to-rose-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-zinc-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
                <div className="flex items-center text-sm text-zinc-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-4">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-zinc-900">{post.author}</p>
                  <p className="text-sm text-zinc-600">Digital Marketing Expert</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-lg"
              />
              
              <div className="prose prose-lg prose-zinc max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
              </div>
              
              {/* Author Bio */}
              <div className="bg-zinc-50 rounded-2xl p-8 mb-12">
                <div className="flex items-start space-x-4">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">About {post.author.split(' ')[0]}</h3>
                    <p className="text-zinc-600 leading-relaxed">{post.authorBio}</p>
                  </div>
                </div>
              </div>
              
              {/* Share Section */}
              <div className="border-t border-zinc-200 pt-8">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <span className="text-zinc-600 font-semibold">Share this article:</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={shareOnFacebook}
                        className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button
                        onClick={shareOnTwitter}
                        className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button
                        onClick={shareOnLinkedIn}
                        className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <Link
                    to="/blog"
                    className="text-rose-600 hover:text-rose-700 font-semibold transition-colors"
                  >
                    ← Back to all posts
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;