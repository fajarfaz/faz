module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 7px 20px rgba(99 239 40 / 61%)'
      }
    },
  },
  plugins: [],
}