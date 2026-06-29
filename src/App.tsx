import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import ProjectsSection from './components/ProjectsSection'
import Contact from './components/Contact'

export default function App() {
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
