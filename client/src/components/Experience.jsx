import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalData';
import { Terminal, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 bg-[#070709] border-t border-[#1a1a24] font-mono">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest">// 03. SYSTEM_LOGS</span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mt-2">
            EXPERIENCE &amp; MILESTONES
          </h2>
        </motion.div>

        {/* Vertical Timeline Track */}
        <div className="relative border-l-2 border-[#1a1a24] ml-4 md:ml-10 space-y-16">
          {personalData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Glowing Timeline Node Indicator */}
              <div className="absolute -left-[17px] top-0.5 w-8 h-8 bg-[#070709] border-2 border-emerald-400 rounded-sm flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,255,102,0.3)]">
                <span className="text-[10px] font-black text-emerald-400">0{idx + 1}</span>
              </div>

              {/* Timeline Card */}
              <div className="cyber-card p-6 md:p-8 rounded-sm relative overflow-hidden">
                
                {/* Top Status & Date Pill */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#1a1a24]">
                  <div>
                    <span className="text-[10px] text-emerald-400 font-bold tracking-widest block uppercase mb-1">
                      LOG_ENTRY // NODE_0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase">{exp.role}</h3>
                    <p className="text-xs text-slate-300 font-semibold mt-0.5 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" /> {exp.organization}
                    </p>
                  </div>

                  <div className="px-3.5 py-1.5 bg-[#070709] border border-emerald-500/40 text-emerald-400 font-bold text-xs rounded-sm self-start sm:self-auto tracking-wider shadow-sm">
                    {exp.period}
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>

                {/* Highlights / Verified Execution Logs */}
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">
                    // VERIFIED_ACHIEVEMENTS
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {exp.highlights.map((item, hIdx) => (
                      <div 
                        key={hIdx} 
                        className="flex items-center gap-2.5 p-2.5 bg-[#070709] border border-[#1a1a24] hover:border-emerald-500/50 transition-colors rounded-sm text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-semibold text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};