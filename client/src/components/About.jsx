import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalData';
import { Terminal, Database, Layout, ShieldAlert } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-[#070709] border-t border-[#1a1a24] font-mono">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest">// 01. ABOUT & SKILLS</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mt-2">
            ENGINEERING &amp; DEFENSIVE CAPABILITIES
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 cyber-card p-8 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest block mb-4">&gt; WHO_I_AM</span>
              <h3 className="text-xl font-bold text-white uppercase mb-4">Building High-Performance Digital Products</h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                I am a full-stack developer based in {personalData.location}. I craft responsive web applications using MongoDB, Express, React, and Node.js with clean, maintainable architecture.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Alongside core web development, I actively apply defensive security practices to safeguard web APIs against vulnerabilities, data leaks, and identity threats.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1a1a24] grid grid-cols-2 gap-6">
              <div>
                <span className="text-slate-400 text-xs font-bold uppercase block mb-1">Development Focus</span>
                <span className="text-emerald-400 font-bold text-sm">Full-Stack MERN</span>
              </div>
              <div>
                <span className="text-slate-400 text-xs font-bold uppercase block mb-1">Security Standard</span>
                <span className="text-emerald-400 font-bold text-sm">OWASP Defensive</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Security Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cyber-card p-8 flex flex-col justify-between border-emerald-500/40"
          >
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                <ShieldAlert className="w-4 h-4" /> Cybersecurity Track
              </div>
              
              <div className="space-y-3">
                {personalData.skills.security.map((sec, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 bg-[#070709] border border-[#1a1a24] rounded-sm text-xs font-semibold text-slate-200">
                    <span className="w-2 h-2 bg-emerald-400 rounded-sm" />
                    <span>{sec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1a1a24] text-xs text-slate-400 font-medium">
              Proactive vulnerability assessment &amp; protection.
            </div>
          </motion.div>

          {/* Card 3: Full Stack Dependencies */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 cyber-card p-8"
          >
            <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest block mb-4">&gt; TECHNICAL_STACK</span>
            <h3 className="text-xl font-bold text-white uppercase mb-8">Frontend, Backend &amp; Database Arsenal</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              
              {/* Frontend */}
              <div className="p-5 bg-[#070709] border border-[#1a1a24] space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <Layout className="w-4 h-4" /> [FRONTEND]
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.frontend.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#0d0d12] text-slate-200 text-xs font-medium border border-[#1a1a24]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="p-5 bg-[#070709] border border-[#1a1a24] space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <Terminal className="w-4 h-4" /> [BACKEND]
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.backend.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#0d0d12] text-slate-200 text-xs font-medium border border-[#1a1a24]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="p-5 bg-[#070709] border border-[#1a1a24] space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <Database className="w-4 h-4" /> [DATABASE]
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.database.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#0d0d12] text-slate-200 text-xs font-medium border border-[#1a1a24]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Security Track */}
              <div className="p-5 bg-[#070709] border border-emerald-500/40 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <ShieldAlert className="w-4 h-4" /> [SECURITY]
                </div>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.security.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};