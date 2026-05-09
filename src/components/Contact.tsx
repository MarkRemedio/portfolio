import TerminalWindow from './TerminalWindow'
import { SectionHeader } from './About'
import { profile, education } from '../data/content'

export default function Contact() {
  const visibleSocials = profile.socials.filter((s) => s.url)

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="05" title="TRANSMISSION.cmd" />
        <TerminalWindow title="// open comms" prompt="ssh contact@remedio" accent="cyan">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.25em] text-hud-dim">
                # primary_channels
              </div>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex items-baseline gap-3">
                  <span className="w-20 text-hud-dim">email</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-neon-cyan hover:text-neon-amber"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="w-20 text-hud-dim">phone</span>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, '')}`}
                    className="text-neon-cyan hover:text-neon-amber"
                  >
                    {profile.phone}
                  </a>
                </li>
                {visibleSocials.length > 0 && (
                  <li className="flex items-baseline gap-3">
                    <span className="w-20 text-hud-dim">links</span>
                    <span className="flex flex-wrap gap-2">
                      {visibleSocials.map((s) => (
                        <a
                          key={s.label}
                          href={s.url}
                          target={s.url.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="tag tag-cyan transition hover:shadow-neon-cyan"
                        >
                          {s.label} ↗
                        </a>
                      ))}
                    </span>
                  </li>
                )}
              </ul>

              <a
                href={`./${profile.resumeFile}`}
                download
                className="mt-8 inline-flex items-center gap-3 border border-neon-amber/70 bg-neon-amber/5 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-neon-amber transition hover:bg-neon-amber/15 hover:shadow-neon-amber"
              >
                ↓ DOWNLOAD RESUME (.PDF)
              </a>
            </div>

            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.25em] text-hud-dim">
                # academy_record
              </div>
              <ul className="space-y-3 text-sm">
                {education.map((e) => (
                  <li key={`${e.level}-${e.school}`} className="border-l-2 border-neon-cyan/40 pl-3">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-hud-dim">
                      {e.level}
                    </div>
                    <div className="font-semibold text-hud-text">{e.school}</div>
                    {e.detail && <div className="text-hud-text/70">{e.detail}</div>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}
