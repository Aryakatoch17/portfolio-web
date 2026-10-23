import { useEffect, useState } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Expertise } from './components/Expertise'
import { TechSkills } from './components/TechSkills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [mode, setMode] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', mode)
  }, [mode])

  return (
    <div className={`main-container ${mode}-mode`}>
      <Nav mode={mode} onToggleMode={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))} />
      <main className="container">
        <Hero />
        <Expertise />
        <TechSkills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
