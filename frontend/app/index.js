/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF8C42',
        paprika: '#E66A32',
        nougat: '#FFD9A0',
        maroon: '#8C2F2B',
        rust: '#C24C30',
        carbon: '#2B2B2B',
        emerald: '#4CAF50',
        amber: '#FFC107',
        crimson: '#F44336',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};