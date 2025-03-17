
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import GlassCard from '../components/ui/GlassCard';
import HoloText from '../components/ui/HoloText';
import HoloButton from '../components/ui/HoloButton';

const About = () => {
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
            About HoloGlass UI
          </HoloText>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Learn more about the concept, inspiration, and technology behind the HoloGlass UI design system.
          </p>
        </section>

        <section className="mb-12">
          <GlassCard className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Vision</h2>
                <p className="mb-4 text-foreground/80">
                  HoloGlass UI emerged from a desire to reimagine digital interfaces through the lens of future technology.
                  Inspired by science fiction, holographic projections, and advanced display technologies, we wanted to create
                  a design system that feels both futuristic and tangible.
                </p>
                <p className="text-foreground/80">
                  Our vision combines the elegance of neo-glassmorphism with the vibrancy of holographic elements, creating
                  interfaces that seem to float in digital space while remaining functional and intuitive.
                </p>
              </div>
              <div className="relative h-60 md:h-full rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-holo-purple to-holo-blue opacity-60 animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-holo-cyan to-holo-blue animate-spin-slow"></div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designPrinciples.map((principle, index) => (
              <GlassCard key={index} className="p-6 hover-scale">
                <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-holo-blue to-holo-purple">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                <p className="text-foreground/70">{principle.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
          <GlassCard className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Modern Web Technologies</h3>
                <p className="text-foreground/80">
                  Built with React, TypeScript, and Tailwind CSS, HoloGlass UI leverages cutting-edge web technologies 
                  to create fluid, responsive interfaces that perform well across devices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Advanced CSS Techniques</h3>
                <p className="text-foreground/80">
                  The distinctive neo-glassmorphic look is achieved through careful application of backdrop filters, 
                  gradients, and subtle shadows. Custom animations add life to the interface without compromising performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Component Architecture</h3>
                <p className="text-foreground/80">
                  Each UI element is built as a modular, reusable component with thoughtful API design, making it easy
                  to implement consistent interfaces across applications.
                </p>
              </div>
            </div>
          </GlassCard>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Get Started</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Ready to bring the future to your interfaces? Explore our documentation or contact us to learn how to
            implement HoloGlass UI in your projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <HoloButton size="lg">Documentation</HoloButton>
            <HoloButton size="lg" variant="outline">GitHub</HoloButton>
            <HoloButton size="lg" variant="secondary">Contact</HoloButton>
          </div>
        </section>
      </div>
    </Layout>
  );
};

const designPrinciples = [
  {
    title: "Depth & Dimension",
    description: "Creating interfaces with perceivable layers and spatial relationships that mimic real-world depth.",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: "Visual Harmony",
    description: "Balancing vibrant holographic elements with clean spacing and thoughtful layout hierarchy.",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    title: "Responsive Motion",
    description: "Subtle animations that respond to user interaction, enhancing the feeling of a living interface.",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default About;
