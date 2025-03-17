
import React from "react";
import GlassCard from "../ui/GlassCard";
import HoloText from "../ui/HoloText";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <HoloText as="h2" className="text-3xl md:text-4xl font-medium mb-4">
            Cutting-Edge UI Elements
          </HoloText>
          <p className="text-foreground/70 text-lg">
            Explore the key components that make the HoloGlass UI framework stand out from traditional interface designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature
            title="Glassmorphic Panels"
            description="Translucent components with soft blurring effects that mimic real-world glass textures."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers">
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>
              </svg>
            }
            className="animate-fade-in [animation-delay:100ms]"
          />
          
          <Feature
            title="Holographic Gradients"
            description="Dynamic color transitions that change based on perspective and interaction."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette">
                <circle cx="13.5" cy="6.5" r="2.5"/>
                <circle cx="19" cy="13" r="2.5"/>
                <circle cx="6" cy="12" r="2.5"/>
                <circle cx="10" cy="20" r="2.5"/>
                <path d="M10 20 7.5 7.5l10 3-4.5 3.5L10 20z"/>
              </svg>
            }
            className="animate-fade-in [animation-delay:200ms]"
          />
          
          <Feature
            title="Soft Light Diffusion"
            description="Realistic light bleeding and glow effects that respond to UI state changes."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
              </svg>
            }
            className="animate-fade-in [animation-delay:300ms]"
          />
          
          <Feature
            title="Motion Blur Effects"
            description="Subtle blurring animations that occur during transitions and interactions."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wind">
                <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
                <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
                <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
              </svg>
            }
            className="animate-fade-in [animation-delay:400ms]"
          />
          
          <Feature
            title="3D Depth Perception"
            description="Subtle shadows and highlights that create a sense of physical space within flat interfaces."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                <path d="m3.3 7 8.7 5 8.7-5"/>
                <path d="M12 22V12"/>
              </svg>
            }
            className="animate-fade-in [animation-delay:500ms]"
          />
          
          <Feature
            title="Interactive Light Reflections"
            description="Dynamic highlights that follow cursor movements to create a sense of physical interaction."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer">
                <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                <path d="m13 13 6 6"/>
              </svg>
            }
            className="animate-fade-in [animation-delay:600ms]"
          />
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, description, icon, className }: FeatureProps) => {
  return (
    <GlassCard
      className={cn("h-full transition-all hover:shadow-holo", className)}
      hoverEffect
    >
      <div className="flex flex-col h-full">
        <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
          <div className="text-accent">{icon}</div>
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-foreground/70 mt-auto">{description}</p>
      </div>
    </GlassCard>
  );
};

export default Features;
