import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import BlogsSection from '../components/BlogsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <PricingSection />
        <BlogsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;