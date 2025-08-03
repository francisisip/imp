module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5c710eff",
        accent: "#726f76",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
