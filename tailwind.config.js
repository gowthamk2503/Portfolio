/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Editorial Palette
        ivory: '#F7F6F2',
        white: '#FFFFFF',
        charcoal: '#171717',
        'warm-grey': '#77736F',
        'border-subtle': '#E7E4DE',
        'electric-violet': '#7057F5',
        'soft-lavender': '#B5A0FF',
        'soft-lime': '#D9F86A',
        
        // Dark Mode Complementary
        'dark-bg': '#111110',
        'dark-card': '#1A1918',
        'dark-card-hover': '#242220',
        'dark-border': '#2C2B29',
        'dark-text': '#F7F6F2',
        'dark-muted': '#9C9893',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.02)',
        'float': '0 20px 40px -15px rgba(23, 23, 23, 0.07)',
        'float-violet': '0 20px 40px -15px rgba(112, 87, 245, 0.25)',
        'capsule': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(231, 228, 222, 0.8)',
        'capsule-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(44, 43, 41, 0.8)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float-gentle': 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
