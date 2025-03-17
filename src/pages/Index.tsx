
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Showcase from './Showcase';
import Design from './Design';
import About from './About';

const Index = () => {
  // Add subtle page entrance animation
  useEffect(() => {
    document.body.classList.add('animate-blur-in');
    return () => {
      document.body.classList.remove('animate-blur-in');
    };
  }, []);

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout>
            <Hero />
            <Features />
          </Layout>
        } 
      />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/design" element={<Design />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Index;
