import React from 'react';
    import { Link } from 'react-router-dom';
    import { ArrowRight, Play, Star, Users, Award, TrendingUp } from 'lucide-react';
    import { motion } from 'framer-motion';

    const Hero = () => {
      const stats = [
        { icon: Users, value: '500+', label: 'Happy Clients' },
        { icon: Award, value: '50+', label: 'Awards Won' },
        { icon: TrendingUp, value: '200%', label: 'Growth Rate' },
      ];

      return (
        <section className="relative bg-gradient-to-br from-zinc-50 via-white to-rose-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-100/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-rose-200 rounded-full px-4 py-2 mb-6"
                >
                  <Star className="w-4 h-4 text-rose-600 fill-current" />
                  <span className="text-sm font-medium text-zinc-700">
                    #1 SMM Agency in Uzbekistan
                  </span>
                </motion.div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
                  <span className="block">Grow Your</span>
                  <span className="block bg-gradient-to-r from-rose-600 via-fuchsia-500 to-teal-500 bg-clip-text text-transparent">
                    Social Presence
                  </span>
                  <span className="block">Like Never Before</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We help businesses build powerful social media strategies, create engaging content, 
                  and connect with their audience to drive real growth and results.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-zinc-700 font-semibold rounded-xl border border-zinc-200 hover:bg-white hover:shadow-lg transition-all">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Our Story
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center lg:text-left"
                    >
                      <div className="flex items-center justify-center lg:justify-start mb-2">
                        <stat.icon className="w-5 h-5 text-rose-600 mr-2" />
                        <span className="text-2xl font-bold text-zinc-900">{stat.value}</span>
                      </div>
                      <p className="text-sm text-zinc-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration and social media marketing"
                    className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                    loading="eager"
                  />
                  
                  {/* Floating Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-zinc-100"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">+245%</p>
                        <p className="text-xs text-zinc-600">Engagement Rate</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-zinc-100"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">50K+</p>
                        <p className="text-xs text-zinc-600">New Followers</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;