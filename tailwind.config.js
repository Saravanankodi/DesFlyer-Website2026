/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0C10',
        paper: '#FAFAFA',
        signal: {
          DEFAULT: '#2E6FFF',
          soft: '#5C8CFF',
          dim: '#1D4FCC',
        },
        deep: '#0F2557',
        ice: '#EAF1FF',
        graphite: '#171A1F',
        line: {
          light: 'rgba(15,37,87,0.12)',
          dark: 'rgba(234,241,255,0.10)',
        },
      },

      fontFamily: {
        display: ['"Chakra Petch"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],

        // Iceberg
        iceberg: ['"Iceberg"', 'sans-serif'],
      },

      maxWidth: {
        shell: '1400px',
      },

      backdropBlur: {
        xs: '2px',
      },

      keyframes: {
        'pulse-node': {
          '0%, 100%': {
            opacity: 0.35,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.4)',
          },
        },

        'fade-up': {
          from: {
            opacity: 0,
            transform: 'translateY(24px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        'pulse-node': 'pulse-node 2.4s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },

  plugins: [],
}