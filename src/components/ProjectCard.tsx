import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import type { Project } from '../data/projects'
import ProjectBanner from './ProjectBanner'

export default function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState({ x: 50, y: 50, active: false })

  // Tilt — motion values driven by pointer position, smoothed with springs.
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 150, damping: 18 })
  const sry = useSpring(ry, { stiffness: 150, damping: 18 })
  const rotateX = useTransform(srx, (v) => `${v}deg`)
  const rotateY = useTransform(sry, (v) => `${v}deg`)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * 10) // left/right tilt
    rx.set((0.5 - py) * 10) // up/down tilt
    setSpot({ x: px * 100, y: py * 100, active: true })
  }

  const onLeave = () => {
    rx.set(0)
    ry.set(0)
    setSpot((s) => ({ ...s, active: false }))
  }

  const { accent } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.21, 0.5, 0.3, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          // gradient-border colors
          ['--grad-from' as string]: accent.from,
          ['--grad-to' as string]: accent.to,
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="gradient-border glass group relative flex flex-col overflow-hidden rounded-[24px] p-3 shadow-2xl shadow-black/40"
      >
        {/* Spotlight glow following the cursor */}
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[24px] transition-opacity duration-300"
          style={{
            opacity: spot.active ? 1 : 0,
            background: `radial-gradient(22rem 22rem at ${spot.x}% ${spot.y}%, ${accent.glow}, transparent 60%)`,
          }}
        />

        {/* Banner */}
        <div className="relative z-10 overflow-hidden rounded-[16px]">
          <ProjectBanner project={project} />
          <span
            className="absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md"
            style={{
              color: accent.text,
              borderColor: accent.ring,
              background: 'rgba(0,0,0,0.35)',
            }}
          >
            {project.domain}
          </span>
        </div>

        {/* Body */}
        <div className="relative z-10 flex flex-1 flex-col p-5">
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-0.5 text-sm font-medium" style={{ color: accent.text }}>
            {project.org}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {project.shortDescription}
          </p>

          {/* Problem statement */}
          <div className="mt-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
              Problem
            </p>
            <p className="mt-1 text-sm leading-relaxed text-white/55">
              {project.problemStatement}
            </p>
          </div>

          {/* Key features */}
          <div className="mt-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
              Key Features
            </p>
            <ul className="mt-2 space-y-1.5">
              {project.keyFeatures.slice(0, 3).map((f) => (
                <li key={f} className="flex gap-2 text-sm text-white/65">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: accent.to }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights */}
          <div className="mt-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
              Highlights
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/70"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
              Technologies
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-2.5 py-1 text-xs font-medium transition-colors duration-200"
                  style={{
                    color: accent.text,
                    borderColor: accent.ring,
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition-all hover:bg-white/10"
            >
              <Github size={16} /> GitHub
            </a>

            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition-all hover:bg-white/10"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}

            <Link
              to={`/project/${project.slug}`}
              className="ml-auto inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-ink-950 transition-transform hover:gap-2.5"
              style={{
                background: `linear-gradient(120deg, ${accent.from}, ${accent.to})`,
              }}
            >
              Read More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
