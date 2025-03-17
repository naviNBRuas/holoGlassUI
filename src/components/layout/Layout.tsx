
import React, { ReactNode } from "react";
import Navbar from "../navigation/Navbar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-holo-radial opacity-20 animate-pulse-glow"></div>
        <div className="absolute top-0 left-0 w-[70vw] h-[70vh] rounded-full bg-holo-blue/10 blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-[70vw] h-[70vh] rounded-full bg-holo-purple/10 blur-[120px] translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] rounded-full bg-holo-cyan/5 blur-[100px] translate-x-1/4 -translate-y-1/4"></div>
      </div>

      <Navbar />
      
      <main className={cn("flex-1 px-4 sm:px-6 md:px-8 lg:px-12 py-24 mx-auto w-full max-w-7xl", className)}>
        {children}
      </main>
      
      <footer className="mt-auto py-6 text-center text-sm text-foreground/60">
        <div className="container mx-auto">
          <p>Designed with precision • Holographic UI Elements</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
