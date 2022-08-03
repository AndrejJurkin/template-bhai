/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        bgColor: "#C2E4FF",
        dGray: "#2D2D2D",
        cGray: "#4C4C4C",
        borColor: "#FFF5EC",
        bgColor2: "#FFDDC2",
        borColor2: "#E5D7CC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
