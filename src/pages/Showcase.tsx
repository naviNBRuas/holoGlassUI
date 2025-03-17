
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import GlassCard from '../components/ui/GlassCard';
import HoloText from '../components/ui/HoloText';

const Showcase = () => {
  // Add subtle page entrance animation
  useEffect(() => {
    document.body.classList.add('animate-blur-in');
    return () => {
      document.body.classList.remove('animate-blur-in');
    };
  }, []);

  return (
    <Layout>
      <div className="space-y-16">
        <section className="text-center mb-12">
          <HoloText as="h1" className="text-4xl md:text-5xl font-bold mb-4">
            Showcase
          </HoloText>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore examples of the HoloGlass UI in action, demonstrating the versatility and visual impact of this futuristic design system.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <GlassCard 
              key={index} 
              className="p-6 hover-scale overflow-hidden group"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <item.icon className="w-16 h-16 text-white/90" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Layout>
  );
};

// Sample showcase items with icons represented as components
const showcaseItems = [
  {
    title: "Dashboard Interface",
    description: "A complete admin dashboard with analytics, user management, and interactive charts.",
    gradient: "from-holo-blue to-holo-purple",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    title: "Product Showcase",
    description: "Elegant product displays with 3D holographic previews and interactive elements.",
    gradient: "from-holo-cyan to-holo-blue",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Media Player",
    description: "Immersive media player with holographic controls and visualizations.",
    gradient: "from-holo-purple to-holo-pink",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Form Components",
    description: "Beautiful form elements with validation and interactive feedback.",
    gradient: "from-holo-pink to-holo-orange",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: "Authentication Screens",
    description: "Secure and visually stunning login, signup and user profile interfaces.",
    gradient: "from-holo-orange to-holo-yellow",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Data Visualization",
    description: "Interactive charts and graphs with holographic highlights and animations.",
    gradient: "from-holo-yellow to-holo-green",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export default Showcase;
