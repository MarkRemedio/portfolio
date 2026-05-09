import TerminalWindow from './TerminalWindow'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="01" title="MISSION_BRIEF.md" />
        <TerminalWindow title="// mission_brief" prompt="cat brief.md" accent="cyan">
          <div className="space-y-4 text-hud-text/90 leading-relaxed">
            {about.summary.map((para, i) => (
              <p key={i}>
                <span className="mr-2 text-neon-cyan">▸</span>
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-space-500/40 pt-6">
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-hud-dim">
              # career_highlights
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {about.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-l-2 border-neon-amber/50 bg-space-800/40 px-3 py-2 text-sm text-hud-text/90"
                >
                  <span className="text-neon-amber">[+]</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}

export function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-4">
      <span className="font-display text-3xl text-neon-pink neon-text-pink">{index}</span>
      <span className="h-px flex-1 bg-gradient-to-r from-neon-pink/60 to-transparent" />
      <h2 className="font-sci text-sm font-bold uppercase tracking-[0.3em] text-hud-text">
        {title}
      </h2>
    </div>
  )
}
