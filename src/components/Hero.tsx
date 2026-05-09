import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const bootLines = [
  '> initializing transponder…',
  '> establishing uplink to deep-space relay…',
  '> identity packet verified ✓',
  '> loading mission profile…',
]

function useTypewriter(lines: string[], speed = 28, lineDelay = 220) {
  const [out, setOut] = useState<string[]>([''])
  useEffect(() => {
    let cancelled = false
    let lineIdx = 0
    let charIdx = 0
    const tick = () => {
      if (cancelled) return
      const current = lines[lineIdx]
      charIdx += 1
      setOut((prev) => {
        const next = [...prev]
        next[lineIdx] = current.slice(0, charIdx)
        return next
      })
      if (charIdx >= current.length) {
        lineIdx += 1
        charIdx = 0
        if (lineIdx < lines.length) {
          setOut((prev) => [...prev, ''])
          setTimeout(tick, lineDelay)
        }
      } else {
        setTimeout(tick, speed)
      }
    }
    setTimeout(tick, 400)
    return () => {
      cancelled = true
    }
  }, [lines, speed, lineDelay])
  return out
}

export default function Hero() {
  const lines = useTypewriter(bootLines)
  const done = lines.length === bootLines.length && lines[lines.length - 1] === bootLines[bootLines.length - 1]

  return (
    <section id="hero" className="relative flex min-h-screen items-center px-4 pt-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* HUD coords ribbon */}
        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.25em] text-hud-dim">
          <span className="text-neon-cyan">[ DEEP-SPACE RELAY ]</span>
          <span>STARDATE 78231.4</span>
          <span>SYS:OK</span>
          <span className="text-neon-amber">CLEARANCE: SR-ENG</span>
        </div>

        {/* Boot console */}
        <div className="mb-10 max-w-xl text-sm sm:text-base">
          {lines.map((l, i) => (
            <div
              key={i}
              className={`whitespace-pre text-hud-text/90 ${i === lines.length - 1 && !done ? 'cursor' : ''}`}
            >
              {l}
            </div>
          ))}
        </div>

        {/* Name block */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="font-sci text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          MARK <span className="text-neon-cyan neon-text-cyan">JOSEPH</span>
          <br />
          H. <span className="text-neon-pink neon-text-pink">REMEDIO</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="mt-6 max-w-2xl"
        >
          <div className="font-display text-2xl text-neon-amber neon-text-amber sm:text-3xl">
            // {profile.role.toUpperCase()}
          </div>
          <p className="mt-3 text-hud-text/80">
            10+ years building production systems across enterprise, ad-tech, telecom and SaaS.
            Backend-first, full-stack capable, currently piloting agentic workflows with Claude.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#experience"
            className="border border-neon-cyan/70 bg-neon-cyan/5 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-neon-cyan transition hover:bg-neon-cyan/15 hover:shadow-neon-cyan"
          >
            ► VIEW MISSION LOG
          </a>
          <a
            href={`./${profile.resumeFile}`}
            download
            className="border border-neon-amber/70 bg-neon-amber/5 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-neon-amber transition hover:bg-neon-amber/15 hover:shadow-neon-amber"
          >
            ↓ DOWNLOAD RESUME
          </a>
          <a
            href="#contact"
            className="border border-neon-pink/70 bg-neon-pink/5 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-neon-pink transition hover:bg-neon-pink/15 hover:shadow-neon-pink"
          >
            ✉ OPEN COMMS
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-hud-dim"
        >
          <span className="h-px w-10 bg-hud-dim/50" />
          <span className="animate-pulse-slow">SCROLL TO ENGAGE</span>
        </motion.div>
      </div>
    </section>
  )
}
