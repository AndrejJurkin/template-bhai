module.exports = {
  content: ["./**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2177F2",
          light: "#C8E1FF",
        },
        logoColor: "#1A0C06",
        pColor: "#5E646B",
        bgGreen: "#ECFFDD",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
