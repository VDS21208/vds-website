/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1120',
          light: '#1A2235',
          tint: '#E5E9F0',
        },
        orange: {
          DEFAULT: '#E8621A',
          dark: '#C44F0F',
          tint: '#FFF1E6',
        },
        gold: {
          DEFAULT: '#C9A84C',
        },
        offwhite: '#F4F6F8',
        slate: {
          DEFAULT: '#555555',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'eyebrow': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
        'hero': ['clamp(2.25rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.2' }],
        'h3': ['clamp(1.375rem, 2.5vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '12px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
