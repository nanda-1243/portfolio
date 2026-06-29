import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Target,
  Workflow,
  Database,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Rocket,
  Layers,
  ImageIcon,
} from 'lucide-react'
import { getProject } from '../data/projects'
import ProjectBanner from '../components/ProjectBanner'

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55 },
}

function Block({
  icon,
  title,
  accent,
  children,
}: {
  icon: React.ReactNode
  title: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <motion.section {...fade} className="glass rounded-[24px] border border-white/5 p-7 sm:p-9">
      <h2 className="flex items-center gap-3 text-xl font-semibold text-white sm:text-2xl">
        <span
          className="grid h-10 w-10 place-items-center rounded-xl"
          style={{ background: `${accent}22`, color: accent }}
        >
          {icon}
        </span>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </motion.section>
  )
}

function BulletList({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-sm leading-relaxed text-white/70">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
          {it}
        </li>
      ))}
    </ul>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = slug ? getProject(slug) : undefined
  if (!project) return <Navigate to="/" replace />

  const backToProjects = () => navigate('/', { state: { scrollTo: 'projects' } })

  const { accent } = project

  return (
    <>
      <div className="aurora-bg" />

      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <button
            type="button"
            onClick={backToProjects}
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} /> Back to projects
          </button>
          <div className="flex items-center gap-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/85 transition-colors hover:bg-white/10"
            >
              <Github size={15} /> GitHub
            </a>
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-ink-950"
                style={{ background: `linear-gradient(120deg, ${accent.from}, ${accent.to})` }}
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 pb-28 pt-10">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span
            className="inline-block rounded-full border px-3 py-1 text-xs font-medium"
            style={{ color: accent.text, borderColor: accent.ring, background: 'rgba(255,255,255,0.02)' }}
          >
            {project.domain}
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-2 text-lg font-medium" style={{ color: accent.text }}>
            {project.org}
          </p>

          <div
            className="gradient-border mt-8 overflow-hidden rounded-[28px]"
            style={{ ['--grad-from' as string]: accent.from, ['--grad-to' as string]: accent.to }}
          >
            <ProjectBanner project={project} tall />
          </div>
        </motion.div>

        {/* Overview */}
        <motion.section {...fade} className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            Project Overview
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-white/80">{project.shortDescription}</p>
        </motion.section>

        <div className="mt-10 space-y-6">
          <Block icon={<AlertTriangle size={20} />} title="Problem Statement" accent={accent.to}>
            <p className="text-base leading-relaxed text-white/70">{project.problemStatement}</p>
          </Block>

          <Block icon={<Target size={20} />} title="Objectives" accent={accent.to}>
            <BulletList items={project.objectives} accent={accent.to} />
          </Block>

          {/* Architecture diagram */}
          <Block icon={<Layers size={20} />} title="Architecture Diagram" accent={accent.to}>
            <div className="flex flex-col items-center gap-1 md:flex-row md:flex-wrap md:justify-center md:gap-y-3">
              {project.architecture.map((node, i) => (
                <div
                  key={node.id}
                  className="flex w-full flex-col items-center md:w-auto md:flex-row"
                >
                  <div
                    className="flex w-full flex-col justify-center rounded-2xl border p-4 text-center md:h-[112px] md:w-[160px]"
                    style={{
                      borderColor: accent.ring,
                      background: `linear-gradient(160deg, ${accent.from}1a, transparent)`,
                    }}
                  >
                    <p className="text-sm font-semibold text-white">{node.label}</p>
                    <p className="mt-1 text-xs leading-snug text-white/55">{node.detail}</p>
                  </div>
                  {i < project.architecture.length - 1 && (
                    <span className="my-1 select-none text-lg text-white/30 md:mx-2 md:my-0">
                      <span className="md:hidden">↓</span>
                      <span className="hidden md:inline">→</span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Block>

          <Block icon={<Workflow size={20} />} title="Workflow" accent={accent.to}>
            <ol className="space-y-3">
              {project.workflow.map((step, i) => (
                <li key={step} className="flex gap-4 text-sm leading-relaxed text-white/70">
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold text-ink-950"
                    style={{ background: `linear-gradient(120deg, ${accent.from}, ${accent.to})` }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </Block>

          <div className="grid gap-6 md:grid-cols-2">
            <Block icon={<Database size={20} />} title="Dataset" accent={accent.to}>
              <p className="text-sm leading-relaxed text-white/70">{project.dataset}</p>
            </Block>
            <Block icon={<Cpu size={20} />} title="ML / DL Model" accent={accent.to}>
              <p className="text-sm leading-relaxed text-white/70">{project.model}</p>
            </Block>
          </div>

          {/* Technologies — interactive badges */}
          <Block icon={<Sparkles size={20} />} title="Technologies" accent={accent.to}>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="cursor-default rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                  style={{ color: accent.text, borderColor: accent.ring, background: 'rgba(255,255,255,0.02)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = `${accent.from}22`)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
                >
                  {t}
                </span>
              ))}
            </div>
          </Block>

          <Block icon={<CheckCircle2 size={20} />} title="Features" accent={accent.to}>
            <BulletList items={project.keyFeatures} accent={accent.to} />
          </Block>

          <div className="grid gap-6 md:grid-cols-2">
            <Block icon={<AlertTriangle size={20} />} title="Challenges Faced" accent={accent.to}>
              <ul className="space-y-3">
                {project.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-relaxed text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent.to }} />
                    {c}
                  </li>
                ))}
              </ul>
            </Block>
            <Block icon={<CheckCircle2 size={20} />} title="Results" accent={accent.to}>
              <ul className="space-y-3">
                {project.results.map((r) => (
                  <li key={r} className="flex gap-3 text-sm leading-relaxed text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent.to }} />
                    {r}
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <Block icon={<Rocket size={20} />} title="Future Improvements" accent={accent.to}>
            <BulletList items={project.futureImprovements} accent={accent.to} />
          </Block>

          {/* Gallery / Screenshots */}
          <Block icon={<ImageIcon size={20} />} title="Image Gallery & Screenshots" accent={accent.to}>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.gallery.map((g) => (
                <motion.div
                  key={g.title}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="gradient-border overflow-hidden rounded-2xl"
                  style={{ ['--grad-from' as string]: accent.from, ['--grad-to' as string]: accent.to }}
                >
                  <ProjectBanner project={project} />
                  <div className="p-4">
                    <p className="text-sm font-semibold text-white">{g.title}</p>
                    <p className="mt-0.5 text-xs text-white/55">{g.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/40">
              Visuals are stylized representations of the system. Drop real screenshots into
              <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5">/public</code>
              and reference them here when available.
            </p>
          </Block>
        </div>

        {/* Footer CTA */}
        <motion.div
          {...fade}
          className="glass gradient-border mt-10 flex flex-col items-center justify-between gap-5 rounded-[24px] p-8 sm:flex-row"
          style={{ ['--grad-from' as string]: accent.from, ['--grad-to' as string]: accent.to }}
        >
          <div>
            <h3 className="text-xl font-semibold text-white">Explore the code</h3>
            <p className="mt-1 text-sm text-white/60">
              See the implementation behind {project.title}.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
            >
              <Github size={16} /> GitHub
            </a>
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink-950"
                style={{ background: `linear-gradient(120deg, ${accent.from}, ${accent.to})` }}
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </main>
    </>
  )
}
