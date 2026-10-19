import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalData';
import { ArrowDownRight, Terminal, Cpu, ChevronDown, Shield } from 'lucide-react';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 relative bg-grid-cyber overflow-hidden font-mono">
      
      {/* Interactive Mouse Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 102, 0.07), transparent 80%)`,
        }}
      />

      {/* Cyber Scanner Bar */}
      <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-radar-scan pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch my-auto">
        
        {/* Left Headline Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col justify-between space-y-8"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs text-emerald-400 font-bold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>DEFENSIVE MERN ARCHITECTURE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight uppercase">
              SECURE WEB <br />
              <span className="text-emerald-400">ENGINEERING.</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg font-medium">
              Hi, I'm <strong className="text-white font-bold">{personalData.name}</strong>. {personalData.about}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects" 
              className="px-6 py-3.5 bg-emerald-400 text-neutral-950 font-black text-xs tracking-wider uppercase hover:bg-emerald-300 transition-all flex items-center gap-2 shadow-lg shadow-emerald-400/20"
            >
              EXPLORE_PROJECTS <ArrowDownRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="px-6 py-3.5 bg-[#0d0d12] border border-[#1a1a24] hover:border-emerald-400 text-white font-bold text-xs tracking-wider uppercase transition-all"
            >
              CONTACT_ME()
            </motion.a>
          </div>
        </motion.div>

        {/* Right Telemetry Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 cyber-card p-6 md:p-8 flex flex-col justify-between rounded-sm"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#1a1a24] text-xs font-bold text-slate-400">
              <span className="flex items-center gap-2 text-emerald-400">
                <Terminal className="w-4 h-4" /> SYSTEM_DIAGNOSTICS
              </span>
              <span className="text-emerald-400 animate-pulse">[ACTIVE]</span>
            </div>

            <div className="py-6 space-y-4 text-xs font-mono">
              <div className="flex justify-between items-center border-b border-[#1a1a24]/80 pb-3">
                <span className="text-slate-400">HANDLE</span>
                <span className="text-white font-bold">{personalData.handle}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1a1a24]/80 pb-3">
                <span className="text-slate-400">SPECIALTY</span>
                <span className="text-emerald-400 font-bold">Full-Stack MERN</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1a1a24]/80 pb-3">
                <span className="text-slate-400">SECURITY</span>
                <span className="text-emerald-400 font-bold">OWASP Top 10</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#1a1a24]/80 pb-3">
                <span className="text-slate-400">LOCATION</span>
                <span className="text-white font-bold">{personalData.location}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1a1a24] flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-2 font-bold">
              <Shield className="w-4 h-4 text-emerald-400" /> STATUS: READY
            </span>
            <span className="text-emerald-400 font-bold">ONLINE</span>
          </div>
        </motion.div>

      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="pt-12 text-center text-xs text-slate-400 flex flex-col items-center gap-2 z-10"
      >
        <span className="tracking-widest">SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 text-emerald-400" />
      </motion.div>

    </section>
  );
};