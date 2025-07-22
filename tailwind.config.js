/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
      keyframes: {
        slowPulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
        mediumPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        fastPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        slowPulse: 'slowPulse 6s ease-in-out infinite',
        mediumPulse: 'mediumPulse 4s ease-in-out infinite',
        fastPulse: 'fastPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

