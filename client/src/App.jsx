import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App