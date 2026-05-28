import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        linen:   { DEFAULT: '#F4F1EA', 2: '#ECE7DA' },
        paper:   '#FBFAF6',
        ink:     { DEFAULT: '#0E0F0C', 2: '#2A2B26', 3: '#5A5C53' },
        mute:    '#8C8E83',
        line:    { DEFAULT: '#DCD7C7', 2: '#E8E3D4' },
        emerald: {
          50:  '#E8F1EB',
          100: '#C9E0CF',
          300: '#6FA88A',
          500: '#1F6F4A',
          700: '#145238',
          900: '#0B2E1F',
        },
        gold: {
          100: '#F2E2B8',
          300: '#D9B66A',
          500: '#B8862A',
          700: '#8A621A',
          900: '#5B4112',
        },
      },
      fontFamily: {
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono:  ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '4px', DEFAULT: '8px', md: '12px', lg: '16px', pill: '999px',
      },
      boxShadow: {
        sm:   '0 1px 2px rgba(11,46,31,0.06)',
        md:   '0 4px 12px -2px rgba(11,46,31,0.08)',
        lg:   '0 12px 28px -8px rgba(11,46,31,0.14)',
        xl:   '0 24px 48px -24px rgba(11,46,31,0.18)',
        card: '0 24px 40px -16px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
