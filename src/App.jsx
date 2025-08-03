import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Certificates from './components/Certificates'
import Projects from './components/Projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </div>
  )
}

export default App