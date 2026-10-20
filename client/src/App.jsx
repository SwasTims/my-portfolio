import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="bg-[#070709] min-h-screen text-slate-100 selection:bg-emerald-400 selection:text-neutral-950 font-mono">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;