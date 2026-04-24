/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      colors: {
        brand: {
          pink: '#ff1493',
          purple: '#a855f7',
          dark: '#07080f',
          card: '#0d0f1e',
          border: '#1e2240',
        },
      },
    },
  },
  plugins: [],
};
