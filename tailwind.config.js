/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ADD8E6', // Light blue color from the app
          DEFAULT: '#4A90E2',
          dark: '#2563EB',
        },
        dark: {
          lighter: '#2D2D2D',
          DEFAULT: '#121212', // Dark background from app.json
          darker: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
      },
      transitionDelay: {
        '75': '75ms',
        '150': '150ms',
      },
    },
  },
  plugins: [],
}
