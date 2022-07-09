const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "full-width": "1920px",
      },

      backgroundImage: {
        "hero-bg": "url('../assets/images/hero-bg.jpg')",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#0d0d0d",
        secondary: "#fff",
        popping: colors.yellow[400],
        "sticky-nav": "#353956fa",
      },

      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(20rem, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
