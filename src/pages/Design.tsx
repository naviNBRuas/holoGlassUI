
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import GlassCard from '../components/ui/GlassCard';
import HoloText from '../components/ui/HoloText';
import HoloButton from '../components/ui/HoloButton';

const Design = () => {
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
            Design System
          </HoloText>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore the core components and design principles that make up the HoloGlass UI system.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {colorPalette.map((color) => (
              <div key={color.name} className="space-y-2">
                <div 
                  className="h-24 rounded-lg shadow-lg" 
                  style={{ background: color.value, boxShadow: `0 0 20px ${color.glow}` }}
                ></div>
                <div>
                  <p className="font-medium">{color.name}</p>
                  <p className="text-sm text-foreground/70">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Typography</h2>
          <GlassCard className="p-6 space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">Heading 1</h1>
              <p className="text-foreground/70">5xl / Bold / Primary Font</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">Heading 2</h2>
              <p className="text-foreground/70">4xl / Bold / Primary Font</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">Heading 3</h3>
              <p className="text-foreground/70">3xl / Bold / Primary Font</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-semibold">Heading 4</h4>
              <p className="text-foreground/70">2xl / Semibold / Primary Font</p>
            </div>
            <div className="space-y-2">
              <h5 className="text-xl font-semibold">Heading 5</h5>
              <p className="text-foreground/70">xl / Semibold / Primary Font</p>
            </div>
            <div className="space-y-2">
              <p className="text-base">Body Text</p>
              <p className="text-foreground/70">base / Regular / Primary Font</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm">Small Text</p>
              <p className="text-foreground/70">sm / Regular / Primary Font</p>
            </div>
          </GlassCard>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">Buttons</h3>
              <div className="space-y-4">
                <HoloButton>Primary Button</HoloButton>
                <HoloButton variant="secondary">Secondary Button</HoloButton>
                <HoloButton variant="outline">Outline Button</HoloButton>
                <HoloButton disabled>Disabled Button</HoloButton>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">Cards</h3>
              <div className="space-y-4">
                <GlassCard className="p-4">
                  <p>Standard Glass Card</p>
                </GlassCard>
                <GlassCard className="p-4 border border-holo-blue/30">
                  <p>Glass Card with Border</p>
                </GlassCard>
                <GlassCard className="p-4 shadow-holo">
                  <p>Glass Card with Holo Shadow</p>
                </GlassCard>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">Text Effects</h3>
              <div className="space-y-4">
                <HoloText>Holographic Text</HoloText>
                <HoloText size="lg">Large Holographic Text</HoloText>
                <p className="holo-text">Inline Holographic Text</p>
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">Form Elements</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Text Input" className="glass-input w-full" />
                <select className="glass-input w-full">
                  <option>Select Option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="check" className="glass-checkbox" />
                  <label htmlFor="check">Checkbox</label>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </Layout>
  );
};

const colorPalette = [
  { name: 'Holo Blue', value: '#3387ff', glow: 'rgba(51, 135, 255, 0.3)' },
  { name: 'Holo Purple', value: '#8a2be2', glow: 'rgba(138, 43, 226, 0.3)' },
  { name: 'Holo Cyan', value: '#00e5ff', glow: 'rgba(0, 229, 255, 0.3)' },
  { name: 'Holo Pink', value: '#ff3399', glow: 'rgba(255, 51, 153, 0.3)' },
  { name: 'Holo Orange', value: '#ff7e33', glow: 'rgba(255, 126, 51, 0.3)' },
  { name: 'Holo Yellow', value: '#ffcc00', glow: 'rgba(255, 204, 0, 0.3)' },
  { name: 'Holo Green', value: '#33cc66', glow: 'rgba(51, 204, 102, 0.3)' },
  { name: 'Background', value: '#0a0c18', glow: 'rgba(10, 12, 24, 0.3)' },
];

export default Design;
