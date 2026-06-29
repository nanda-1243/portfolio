import { motion } from 'framer-motion'
import { profile, skillGroups } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <>
      <section id="about" className="mx-auto max-w-5xl px-4 py-24">
        <SectionHeading eyebrow="About" title="Machine Learning, end to end" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass gradient-border mx-auto max-w-3xl rounded-[24px] p-8 sm:p-10"
          style={{ ['--grad-from' as string]: 'rgba(99,102,241,0.5)', ['--grad-to' as string]: 'rgba(34,211,238,0.4)' }}
        >
          <p className="text-lg leading-relaxed text-white/75">{profile.summary}</p>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          subtitle="The languages, frameworks and infrastructure I build with."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl border border-white/5 p-6 transition-colors hover:border-white/15"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/45">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/80 transition-all hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
