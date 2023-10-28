/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#384cff",
        green: "#77f835",
        purple: "#ac36fe",
        orange: "#fa5c37"
      }
    },
  },
  plugins: [],
}

