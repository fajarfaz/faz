module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 7px 20px rgba(99 239 40 / 61%)',
        '4xl': '0 7px 20px rgba(243 5 255 / 61%)',
        '5xl': '0 7px 20px rgba(5 101 255 / 65%)'
      }
    },
  },
  plugins: [],
}