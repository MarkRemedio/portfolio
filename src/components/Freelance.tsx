import { motion } from 'framer-motion'
import { SectionHeader } from './About'
import TerminalWindow from './TerminalWindow'
import { freelance } from '../data/content'

export default function Freelance() {
  return (
    <section id="freelance" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="04" title="SIDE_OPERATIONS.dat" />
        <TerminalWindow title="// freelance ops" prompt="ls -la /ops" accent="pink">
          <div className="grid gap-4 sm:grid-cols-2">
            {freelance.map((op, i) => (
              <motion.article
                key={op.client}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative border border-space-500/60 bg-space-900/60 p-5 transition hover:border-neon-pink/50 hover:shadow-neon-pink"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-hud-dim">
                    OP-{String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-neon-pink/70 shadow-neon-pink animate-pulse-slow" />
                </div>

                {op.url ? (
                  <a
                    href={op.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block font-sci text-base font-bold uppercase tracking-wider text-white hover:text-neon-cyan"
                  >
                    {op.client} ↗
                  </a>
                ) : (
                  <div className="font-sci text-base font-bold uppercase tracking-wider text-white">
                    {op.client}
                  </div>
                )}
                <div className="mt-1 text-sm text-neon-cyan">{op.project}</div>

                <ul className="mt-4 space-y-1.5 text-sm text-hud-text/85">
                  {op.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-neon-pink">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {op.stack.map((t) => (
                    <span key={t} className="tag tag-pink">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}
