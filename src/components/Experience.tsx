import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award } from 'lucide-react'
import { experience, education, certifications } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-24">
      <SectionHeading eyebrow="Journey" title="Experience & Education" />

      {/* Experience */}
      <div className="space-y-6">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass gradient-border rounded-[24px] p-7 sm:p-8"
            style={{ ['--grad-from' as string]: 'rgba(99,102,241,0.5)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-400/30 text-cyan-200">
                  <Briefcase size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-white/60">{exp.company}</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/60">
                {exp.period}
              </span>
            </div>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {exp.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Education + Certifications */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {education.map((ed, i) => (
            <motion.div
              key={ed.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass flex items-start justify-between gap-4 rounded-2xl border border-white/5 p-5"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-purple-200">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <h4 className="font-semibold text-white">{ed.school}</h4>
                  <p className="text-sm text-white/55">{ed.detail}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/55">{ed.period}</p>
                <p className="text-sm font-medium text-cyan-200/90">{ed.score}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl border border-white/5 p-6"
        >
          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/45">
            <Award size={16} /> Certifications
          </h4>
          <ul className="mt-4 space-y-3">
            {certifications.map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-white/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
