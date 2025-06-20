import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Project'
import Experience from './components/Experience'
import Skills from './components/Skill'
import Certifications from './components/Certification'
import './index.css'


function App() {

  return (
    <>
      <div className='bg-gray-900'>
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
      </div>
    </>
  )
}

export default App
