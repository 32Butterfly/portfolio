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

        float: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
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
        float: 'float 4s ease-in-out infinite',
        bounceRight: 'bounceRight 1.2s ease-in-out infinite',
        flyInLeft: 'flyInLeft 1.2s ease-out forwards',
        flyInRight: 'flyInRight 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}

