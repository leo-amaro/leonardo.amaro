import { useState } from 'react'
// import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Project'
import Skills from './components/sections/Skill'
import Certifications from './components/sections/Certification'
import Aurora from './components/ui/background/Aurora'
import './index.css'

function App() {
  return (
    <>
      <div className='bg-slate-900 text-slate-400 selection:bg-teal-300 selection:text-teal-900 relative'>
        {/* Aurora Background */}
        <div className="fixed inset-0 z-0 opacity-30">
          <Aurora 
            colorStops={["#3b82f6", "#06b6d4", "#8b5cf6"]} 
            amplitude={1.2}
            blend={0.4}
            speed={0.3}
          />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          {/* <Navbar /> */}
          
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              {/* Left side - Hero/Intro - Sticky */}
              <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <Hero />
              </div>
              
              {/* Right side - Content - Scrollable */}
              <div className="pt-24 lg:w-1/2 lg:py-24">
                <About />
                <Experience />
                <Skills />
                <Certifications />
                {/* <Projects /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
