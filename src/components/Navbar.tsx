import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { handleAnchorClick, scrollToId } from '../lib/scroll'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled ? 'glass gradient-border shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
        style={{ ['--grad-from' as string]: 'rgba(255,255,255,0.4)' }}
      >
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-ink-950">
            M
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleAnchorClick(e, l.id)}
              className="rounded-full px-3.5 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('contact')
          }}
          className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-105"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  )
}
