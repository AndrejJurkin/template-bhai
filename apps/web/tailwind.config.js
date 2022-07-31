/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["../../packages/ui/**/*.{ts,tsx}", "./**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        lg: "4rem",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "Cantarell", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
