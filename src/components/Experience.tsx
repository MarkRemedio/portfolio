import { motion } from 'framer-motion'
import TerminalWindow from './TerminalWindow'
import { SectionHeader } from './About'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="03" title="MISSION_LOG.txt" />
        <TerminalWindow title="// full-time deployments" prompt="tail -f mission.log" accent="cyan">
          <div className="relative">
            {/* Vertical timeline */}
            <div className="absolute bottom-0 left-3 top-0 hidden w-px bg-gradient-to-b from-neon-cyan/60 via-space-500/60 to-transparent sm:block" />

            <div className="space-y-10">
              {experience.map((role, idx) => (
                <motion.article
                  key={`${role.company}-${idx}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative pl-0 sm:pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 hidden h-6 w-6 items-center justify-center sm:flex">
                    <div className="absolute h-3 w-3 rotate-45 border border-neon-cyan bg-space-800" />
                    <div className="h-1.5 w-1.5 rotate-45 bg-neon-cyan animate-pulse-slow" />
                  </div>

                  <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-base text-neon-amber">[{role.range}]</span>
                    {role.url ? (
                      <a
                        href={role.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-sci text-lg font-bold uppercase tracking-wider text-white hover:text-neon-cyan"
                      >
                        {role.company} ↗
                      </a>
                    ) : (
                      <span className="font-sci text-lg font-bold uppercase tracking-wider text-white">
                        {role.company}
                      </span>
                    )}
                    <span className="text-neon-cyan">::</span>
                    <span className="text-sm uppercase tracking-widest text-neon-cyan">
                      {role.title}
                    </span>
                  </header>

                  <div className="mt-4 space-y-5">
                    {role.projects.map((p) => (
                      <div
                        key={p.name}
                        className="border-l border-space-500/60 pl-4"
                      >
                        <div className="mb-2 flex flex-wrap items-baseline gap-2">
                          <span className="text-xs uppercase tracking-widest text-hud-dim">
                            ▸ project
                          </span>
                          {p.url ? (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm font-semibold text-neon-pink hover:text-neon-cyan"
                            >
                              {p.name} ↗
                            </a>
                          ) : (
                            <span className="text-sm font-semibold text-neon-pink">{p.name}</span>
                          )}
                        </div>

                        <ul className="space-y-1.5 text-sm text-hud-text/90">
                          {p.bullets.map((b, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-neon-cyan">›</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {p.stack.map((t) => (
                            <span key={t} className="tag tag-cyan">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}
