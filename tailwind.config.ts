import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        verde: '#C8F000',
        preto: '#0A0A0A',
        'cinza-escuro': '#1A1A1A',
        'cinza-medio': '#2E2E2E',
        'cinza-claro': '#6B6B6B',
        'cinza-texto': '#9A9A9A',
        branco: '#FAFAFA',
      },
      fontFamily: {
        sans:    ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-plus-jakarta-sans)', 'ui-sans-serif', 'system-ui'],
        brand:   ['var(--font-syne)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

export default config
