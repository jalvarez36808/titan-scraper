/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'titan': {
          'red': '#FF4500',
          'red-dark': '#CC3700',
          'orange': '#FF8C00',
          'orange-dark': '#CC7000',
          'black': '#1A1A1A',
          'black-light': '#2A2A2A',
          'gray': '#4A4A4A',
          'gray-light': '#6A6A6A'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px rgba(255, 69, 0, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(255, 69, 0, 0.8), 0 0 30px rgba(255, 69, 0, 0.6)' }
        }
      }
    }
  },
  plugins: []
}