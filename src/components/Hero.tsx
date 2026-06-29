import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { profile } from '../data/profile'
import { handleAnchorClick } from '../lib/scroll'

const stack = [
  'Python',
  'TensorFlow',
  'PyTorch',
  'FastAPI',
  'Apache Kafka',
  'Hadoop',
  'PySpark',
  'PostgreSQL (pgvector)',
  'GeoServer',
]

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for ML / AI roles · {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
        >
          <span className="text-gradient animate-gradient-pan">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-lg text-white/70 sm:text-xl"
        >
          <span className="font-semibold text-white">{profile.title}</span> — {profile.tagline}
        </motion.p>

        {/* Tech marquee row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2"
        >
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
            >
              {s}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            onClick={(e) => handleAnchorClick(e, 'projects')}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={profile.links.email}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
          >
            <Mail size={18} /> Email
          </a>
        </motion.div>

        <motion.a
          href="#about"
          onClick={(e) => handleAnchorClick(e, 'about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 inline-flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={18} className="animate-float" />
        </motion.a>
      </div>
    </section>
  )
}
