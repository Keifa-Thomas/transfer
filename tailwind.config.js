/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Times New Roman"', 'serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        float: 'float 3s ease-in-out infinite',
        bounce: 'bounce 1s infinite',
        blob: 'blob 20s infinite cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.2) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.8) rotate(240deg)' },
          '100%': { transform: 'translate(0, 0) scale(1) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};