/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1120', light: '#1A2235', tint: '#E5E9F0', deeper: '#070C18' },
        orange: { DEFAULT: '#E8621A', dark: '#C44F0F', light: '#FF7A2E', tint: '#FFF1E6', glow: 'rgba(232, 98, 26, 0.6)' },
        gold: { DEFAULT: '#C9A84C', light: '#D8BC65' },
        offwhite: '#F4F6F8',
        slate: { DEFAULT: '#555555', 50: '#F8FAFC', 100: '#F1F5F9', 200: '#E2E8F0', 300: '#CBD5E1', 400: '#94A3B8', 500: '#64748B', 600: '#475569', 700: '#334155', 800: '#1E293B', 900: '#0F172A' },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'eyebrow': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
        'hero': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'h2': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h3': ['clamp(1.5rem, 2.8vw, 2rem)', { lineHeight: '1.2' }],
      },
      borderRadius: { 'sm': '4px', 'md': '8px', 'lg': '14px', 'xl': '24px' },
      transitionTimingFunction: { 'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)', 'in-out-expo': 'cubic-bezier(0.65, 0, 0.35, 1)' },
      animation: { 'fade-up': 'fadeUp 800ms cubic-bezier(0.16, 1, 0.3, 1)' },
      keyframes: { fadeUp: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } } },
    },
  },
  plugins: [],
};
