import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  title: string
  prompt?: string
  accent?: 'cyan' | 'pink' | 'amber'
  children: ReactNode
  className?: string
}

const dotColor = {
  cyan: 'bg-neon-cyan',
  pink: 'bg-neon-pink',
  amber: 'bg-neon-amber',
}

const accentBorder = {
  cyan: 'border-neon-cyan/30',
  pink: 'border-neon-pink/30',
  amber: 'border-neon-amber/30',
}

export default function TerminalWindow({
  title,
  prompt,
  accent = 'cyan',
  children,
  className = '',
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`panel ${accent === 'pink' ? 'panel-corners-pink' : ''} ${className}`}
    >
      {/* Title bar */}
      <div
        className={`flex items-center justify-between border-b ${accentBorder[accent]} bg-space-800/80 px-4 py-2`}
      >
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${dotColor.pink}`} />
          <span className={`h-2 w-2 rounded-full ${dotColor.amber}`} />
          <span className={`h-2 w-2 rounded-full ${dotColor.cyan}`} />
          <span className="ml-3 text-[11px] uppercase tracking-[0.2em] text-hud-dim">
            {title}
          </span>
        </div>
        {prompt && (
          <span className="hidden text-[11px] text-hud-dim sm:block">
            {prompt}
          </span>
        )}
      </div>
      {/* Content */}
      <div className="p-5 sm:p-7">{children}</div>
    </motion.div>
  )
}
