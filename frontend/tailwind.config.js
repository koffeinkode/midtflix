/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midtflix-blue': '#003366',
        'midtflix-light': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
