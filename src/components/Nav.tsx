import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const sections = [
  { id: 'hero', label: '00 // HOME' },
  { id: 'about', label: '01 // BRIEF' },
  { id: 'skills', label: '02 // STACK' },
  { id: 'experience', label: '03 // LOG' },
  { id: 'freelance', label: '04 // OPS' },
  { id: 'contact', label: '05 // COMM' },
]

export default function Nav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (!el) return
      const ob = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(s.id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
      )
      ob.observe(el)
      observers.push(ob)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-space-500/40 bg-space-900/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-xs sm:text-sm">
        <a
          href="#hero"
          className="font-sci font-bold tracking-[0.2em] text-neon-cyan neon-text-cyan glitch"
        >
          {profile.callsign}
        </a>
        <nav className="hidden gap-5 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`uppercase tracking-widest transition-colors ${
                active === s.id
                  ? 'text-neon-cyan neon-text-cyan'
                  : 'text-hud-dim hover:text-neon-cyan'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href={`./${profile.resumeFile}`}
          download
          className="hidden border border-neon-amber/60 px-3 py-1 text-xs uppercase tracking-widest text-neon-amber transition hover:bg-neon-amber/10 hover:shadow-neon-amber sm:inline-block"
        >
          ↓ RESUME
        </a>
      </div>
    </header>
  )
}
