/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#15508B",
      },

      screens: {
        sxl: "1286px",
        xxl: "1150px",
      },
    },
  },
  plugins: [],
};
