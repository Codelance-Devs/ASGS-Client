/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#F9F2E6",
        secondaryBg: "#C4FF88",
        primaryText: "#004B1A",
      },
      fontFamily: {
        primaryFont: ['Playfair Display', 'serif'],
        secondaryFont: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}