import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home.jsx';
import About from './src/pages/About.jsx';
import Services from './src/pages/Services.jsx';
import Portfolio from './src/pages/Portfolio.jsx';
import Blog from './src/pages/Blog.jsx';
import Contact from './src/pages/Contact.jsx';
import BlogPost from './src/pages/BlogPost.jsx';
import ProjectDetail from './src/pages/ProjectDetail.jsx';
import AdminLogin from './src/pages/AdminLogin.jsx';
import AdminDashboard from './src/pages/AdminDashboard.jsx';
import AdminServices from './src/pages/AdminServices.jsx';
import AdminPricing from './src/pages/AdminPricing.jsx';
import AdminPortfolio from './src/pages/AdminPortfolio.jsx';
import AdminBlog from './src/pages/AdminBlog.jsx';
import AdminRequests from './src/pages/AdminRequests.jsx';
import NotFound from './src/pages/NotFound.jsx';

export default function App() {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/services" element={<AdminServices />} />
            <Route path="/admin/pricing" element={<AdminPricing />} />
            <Route path="/admin/portfolio" element={<AdminPortfolio />} />
            <Route path="/admin/blog" element={<AdminBlog />} />
            <Route path="/admin/requests" element={<AdminRequests />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </main>
      </Router>
    </Theme>
  );
}