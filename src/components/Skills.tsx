import TerminalWindow from './TerminalWindow'
import { SectionHeader } from './About'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="02" title="TECH_STACK.json" />
        <TerminalWindow title="// tech_stack" prompt="jq . stack.json" accent="amber">
          <div className="font-mono text-sm leading-relaxed">
            <div className="text-hud-dim">{'{'}</div>
            {Object.entries(skills).map(([category, items], i, arr) => (
              <div key={category} className="ml-4 mb-4 last:mb-0">
                <div className="mb-2">
                  <span className="text-neon-cyan">"{category}"</span>
                  <span className="text-hud-dim">: [</span>
                </div>
                <div className="ml-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="tag tag-amber transition hover:bg-neon-amber/10 hover:shadow-neon-amber"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="text-hud-dim">{i < arr.length - 1 ? '],' : ']'}</div>
              </div>
            ))}
            <div className="text-hud-dim">{'}'}</div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}
