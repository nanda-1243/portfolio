import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-24">
      <SectionHeading eyebrow="Contact" title="Let’s build something" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="glass gradient-border overflow-hidden rounded-[28px] p-8 text-center sm:p-12"
        style={{ ['--grad-from' as string]: 'rgba(168,85,247,0.5)', ['--grad-to' as string]: 'rgba(34,211,238,0.4)' }}
      >
        <p className="mx-auto max-w-xl text-lg text-white/70">
          Open to Machine Learning and AI opportunities. The fastest way to reach me is email —
          I usually reply within a day.
        </p>

        <a
          href={profile.links.email}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-105"
        >
          <Mail size={18} /> {profile.email}
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/55">
          <span className="inline-flex items-center gap-2">
            <Phone size={15} /> {profile.phone}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} /> {profile.location}
          </span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:scale-110 hover:bg-white/10"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:scale-110 hover:bg-white/10"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.links.email}
            aria-label="Email"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:scale-110 hover:bg-white/10"
          >
            <Mail size={18} />
          </a>
        </div>
      </motion.div>

      <footer className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.
      </footer>
    </section>
  )
}
