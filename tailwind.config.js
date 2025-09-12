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
        bounceRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(15px)' },
        },
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
        bounceRight: 'bounceRight 2s ease-in-out infinite',
        flyInLeft: 'flyInLeft 1.2s ease-out forwards',
        flyInRight: 'flyInRight 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}

