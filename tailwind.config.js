/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
        fontFamily: {
          staatliches: ['Staatliches', 'cursive'],
        },

      keyframes: {
          flyInLeft: {
          '0%': { transform: 'translateX(-80px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        flyInRight: {
          '0%': { transform: 'translateX(80px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        flyInLeft: 'flyInLeft 1.2s ease-out forwards',
        flyInRight: 'flyInRight 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}

