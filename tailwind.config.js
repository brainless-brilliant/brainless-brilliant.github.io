/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'author': ['Author', 'Inter', 'sans-serif'],
      },
      colors: {
        'executive-orange': '#F59E0B',
        'executive-red': '#EF4444',
        'executive-blue': '#06B6D4',
        'executive-gray': '#F3F4F6',
  'executive-gray': '#F3F4F6',
  'executive-orange': '#FF9900',
  'executive-red': '#EF4444',
  'executive-blue': '#0EA5E9',
      },
    },
  },
  plugins: [],
}