import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalData';
import { ExternalLink, ShieldCheck, Terminal, Code2 } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 bg-[#070709] border-t border-[#1a1a24] font-mono">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest">// 02. FEATURED_WORK</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mt-2">
            PROJECTS &amp; SECURITY LABS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalData.projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="cyber-card p-6 flex flex-col justify-between rounded-sm relative group"
            >
              <div>
                {/* Status Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#1a1a24] mb-4 text-[11px]">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" /> {proj.category}
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold rounded-sm">
                    {proj.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white uppercase mb-3 group-hover:text-emerald-400 transition-colors">
                  {proj.title}
                </h3>
                
                <p className="text-slate-300 text-xs leading-relaxed mb-6 font-medium">
                  {proj.description}
                </p>

                {/* Security Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#070709] border border-emerald-500/30 text-[11px] text-emerald-300 font-semibold mb-6 rounded-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{proj.securityBadge}</span>
                </div>
              </div>

              {/* Footer: Tags & Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#1a1a24]">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 bg-[#070709] border border-[#1a1a24] text-[10px] text-slate-300 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 text-xs">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors font-bold"
                  >
                    <Code2 className="w-4 h-4" /> REPO
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
                  >
                    DEMO <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};