/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
      keyframes: {
        flyIn: {
          '0%': { transform: 'translateY(-80px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        flyIn: 'flyIn 1.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

