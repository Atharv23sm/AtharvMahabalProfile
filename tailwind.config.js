/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': 'url("/img/back.jpg")'
      },
      fontFamily: {
        'phonk': ['phonk', 'sans'],
      },
      keyframes: {
        'motion': {
          '0%': {
            transform: 'translateY(0%)',
            transform: 'translateX(0%)'
          },
          '30%': { transform: 'translateY(15%)' },
          '70%': { transform: 'translatex(15%)' },

          '100%': { transform: 'translateY(0%)' },
          transform: 'translateX(0%)'
        },
        'slide': {
          '0%': { transform: 'translateX(20vw)' },
          '30%': { transform: 'translateX(20vw)' },
          '100%': { transform: 'translateX(0)' }
        },
        'wipe': {
          '0%': { transform: 'translateX(-200%)' },
          '20%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' }
        },
      }
    },
  },
  plugins: [],
}