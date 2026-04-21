import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { initScrollReveal } from './utils/scrollReveal'

function App() {
  useEffect(() => {
    initScrollReveal()
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-dark-border py-6">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-text-secondary text-sm font-mono text-center">
            © 2026 Arpan Mukherjee
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
