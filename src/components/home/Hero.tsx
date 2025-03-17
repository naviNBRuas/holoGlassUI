
import React, { useEffect, useRef } from "react";
import HoloText from "../ui/HoloText";
import HoloButton from "../ui/HoloButton";
import GlassCard from "../ui/GlassCard";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      // Subtle parallax effect for the hero section
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-depth') || '0.1');
        const moveX = (x - 0.5) * depth * 40;
        const moveY = (y - 0.5) * depth * 40;
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
      {/* Background elements with parallax */}
      <div className="absolute left-0 top-20 w-72 h-72 rounded-full bg-holo-blue/10 blur-[100px] parallax" data-depth="0.2"></div>
      <div className="absolute right-0 bottom-40 w-80 h-80 rounded-full bg-holo-purple/10 blur-[100px] parallax" data-depth="0.3"></div>
      <div className="absolute right-1/4 top-1/4 w-64 h-64 rounded-full bg-holo-cyan/5 blur-[80px] parallax" data-depth="0.4"></div>

      {/* Decorative floating glass cards */}
      <div className="absolute left-[10%] top-[20%] parallax" data-depth="0.6">
        <GlassCard className="w-24 h-24 opacity-80 transform rotate-12">
          <div className="w-full h-full bg-holo-gradient opacity-10 rounded-lg"></div>
        </GlassCard>
      </div>
      <div className="absolute right-[15%] bottom-[25%] parallax" data-depth="0.7">
        <GlassCard className="w-32 h-32 opacity-80 transform -rotate-12">
          <div className="w-full h-full bg-holo-gradient opacity-10 rounded-lg"></div>
        </GlassCard>
      </div>

      <div className="container mx-auto max-w-5xl z-10 animate-fade-in">
        <div className="text-center">
          <div className="inline-block mb-3 rounded-full px-3 py-1 text-sm bg-white/10 backdrop-blur-lg border border-white/20 shadow-sm">
            <span className="text-foreground/70">Introducing</span>{" "}
            <span className="holo-text">HoloGlass UI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-tight parallax" data-depth="0.05">
            The Future of <HoloText as="span" className="font-bold">Interface Design</HoloText>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 parallax" data-depth="0.1">
            Translucent panels with soft neon reflections, vibrant holographic layers,
            and smooth light diffusion effects for a truly futuristic experience.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-16 parallax" data-depth="0.15">
            <HoloButton size="lg">Experience Now</HoloButton>
            <HoloButton variant="secondary" size="lg">Learn More</HoloButton>
          </div>
          
          <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden parallax" data-depth="0.2">
            <GlassCard className="w-full h-full p-0 border border-white/20 shadow-xl holo-border">
              <div className="w-full h-full bg-gradient-to-br from-holo-blue/5 to-holo-purple/10 flex items-center justify-center">
                <div className="w-full max-w-md aspect-video glass-panel rounded-lg flex items-center justify-center shadow-glass-highlight">
                  <HoloText as="span" className="text-xl font-medium">Holographic Interface</HoloText>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#features" className="text-foreground/60 hover:text-foreground transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
