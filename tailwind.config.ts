import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'figora-purple':       '#7B2FFF',
        'figora-purple-mid':   '#A855F7',
        'figora-purple-light': '#C084FC',
        'figora-black':        '#050508',
        'figora-black-2':      '#0D0D14',
        'figora-black-3':      '#141420',
      },
    },
  },
  plugins: [],
} satisfies Config
