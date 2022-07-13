/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
        "noto-serif": ['"Noto Serif"', "serif"],
      },
      fontSize: {
        tiny: "9px",
        "tiny-medium": "11px",
      },
      colors: {
        primary: "#ED9E2D",
        "primary-text": "#694A1C",
        "primary-light": "#F9E5CA",
        "primary-bold": "#121236",
        "primary-very-light": "#B3ACA4",
      },
    },
  },
  plugins: [],
};
