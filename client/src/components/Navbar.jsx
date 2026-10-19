import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalData';
import { Terminal, Shield, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-mono ${
        scrolled ? 'bg-[#08080c]/95 backdrop-blur-md border-b border-[#232336] py-3 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Terminal Header Tag */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-3 h-3 bg-emerald-400 group-hover:scale-125 transition-transform rounded-sm animate-pulse" />
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            SYS//{personalData.handle}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-slate-300 uppercase">
          <a href="#about" className="hover:text-emerald-400 transition-colors">// 01.ABOUT</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">// 02.PROJECTS</a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">// 03.TIMELINE</a>
          <a href="#guestbook" className="hover:text-emerald-400 transition-colors">// 04.GUESTBOOK</a>
        </div>

        {/* Status Badge Action */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0f0f17] border border-[#232336] rounded text-xs text-emerald-400 font-bold">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>SECURE_SESSION</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-200 hover:text-emerald-400"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#08080c] border-b border-[#232336] px-6 py-6 flex flex-col gap-4 text-xs tracking-wider text-slate-200 font-mono"
        >
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">// 01.ABOUT</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">// 02.PROJECTS</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">// 03.TIMELINE</a>
          <a href="#guestbook" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400">// 04.GUESTBOOK</a>
        </motion.div>
      )}
    </motion.nav>
  );
};