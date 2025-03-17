
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HoloButton from "../ui/HoloButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-300 ease-apple ${
        scrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 group transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center overflow-hidden group-hover:shadow-holo transition-all duration-500">
            <div className="holo-bg w-6 h-6 rounded opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
          </div>
          <span className="font-medium text-lg group-hover:holo-text transition-colors duration-500">HoloGlass</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/#features">Features</NavLink>
          <NavLink href="/#showcase">Showcase</NavLink>
          <NavLink href="/#design">Design</NavLink>
          <NavLink href="/#about">About</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <HoloButton>Get Started</HoloButton>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 py-2 group"
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent/50 group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </a>
  );
};

export default Navbar;
