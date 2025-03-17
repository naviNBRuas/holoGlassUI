
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';

const Index = () => {
  // Add subtle page entrance animation
  useEffect(() => {
    document.body.classList.add('animate-blur-in');
    return () => {
      document.body.classList.remove('animate-blur-in');
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
};

export default Index;
