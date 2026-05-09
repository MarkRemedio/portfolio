/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#03060f',
          800: '#050814',
          700: '#0a0e1f',
          600: '#0f1530',
          500: '#1a2540',
          400: '#2a3a5e',
        },
        neon: {
          cyan: '#00ffd1',
          pink: '#ff2975',
          amber: '#ffaa00',
          violet: '#9d4edd',
          green: '#39ff14',
        },
        hud: {
          text: '#c8d8e8',
          dim: '#6b7a99',
          danger: '#ff4040',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        display: ['"VT323"', '"JetBrains Mono"', 'monospace'],
        sci: ['"Orbitron"', '"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'cursor-blink': 'blink 1s steps(2) infinite',
        'flicker': 'flicker 6s infinite',
        'scanline': 'scanline 8s linear infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.85' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 8px rgba(0,255,209,0.6), 0 0 24px rgba(0,255,209,0.2)',
        'neon-pink': '0 0 8px rgba(255,41,117,0.6), 0 0 24px rgba(255,41,117,0.2)',
        'neon-amber': '0 0 8px rgba(255,170,0,0.6), 0 0 24px rgba(255,170,0,0.2)',
      },
    },
  },
  plugins: [],
}
