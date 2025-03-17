
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HoloButton from "../ui/HoloButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/#features">Features</NavLink>
          <NavLink to="/showcase">Showcase</NavLink>
          <NavLink to="/design">Design</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="w-10 h-10 flex flex-col justify-center items-center space-y-1.5 rounded-lg glass-panel"
          >
            <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-foreground transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <HoloButton>Get Started</HoloButton>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-x-0 top-[73px] bg-black/90 backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-[300px] border-b border-white/10' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col space-y-4 py-4">
            <MobileNavLink to="/#features" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
            <MobileNavLink to="/showcase" onClick={() => setMobileMenuOpen(false)}>Showcase</MobileNavLink>
            <MobileNavLink to="/design" onClick={() => setMobileMenuOpen(false)}>Design</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <div className="pt-2">
              <HoloButton fullWidth>Get Started</HoloButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 py-2 group"
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent/50 group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <Link
      to={to}
      className="text-lg text-foreground/90 hover:text-foreground transition-colors duration-200 py-2 px-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
