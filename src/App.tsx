import Starfield from './components/Starfield'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Freelance from './components/Freelance'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Starfield />

      {/* CRT overlays */}
      <div className="pointer-events-none fixed inset-0 z-20 crt-vignette" aria-hidden />
      <div className="pointer-events-none fixed inset-0 z-20 crt-scanlines opacity-40" aria-hidden />
      <div className="scan-bar" aria-hidden />

      <Nav />

      <main className="relative z-10 animate-flicker">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Freelance />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-space-500/40 bg-space-900/70 py-6 text-center text-xs uppercase tracking-[0.3em] text-hud-dim">
        <div className="mx-auto max-w-6xl px-4">
          [ END_OF_TRANSMISSION ] · M.J. REMEDIO · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}
