import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import ProjectsSection from './components/ProjectsSection'
import Contact from './components/Contact'
import { scrollToId } from './lib/scroll'

export default function App() {
  const location = useLocation()

  // When navigating home from a detail page with a target section
  // (e.g. "Back to projects"), scroll to it once the page has mounted.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (target) {
      const t = setTimeout(() => scrollToId(target), 80)
      return () => clearTimeout(t)
    }
  }, [location.state])

  return (
    <>
      <div className="aurora-bg" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <ProjectsSection />
        <Contact />
      </main>
    </>
  )
}
