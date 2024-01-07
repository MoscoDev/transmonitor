/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1875f0",
        "brand-grey": "#414042",
        "brand-lighter-grey": "#787878",
        "brand-nav-color": "#647787",
        "brand-light-grey": "#eaeef0",
        "brand-yellow": "#FDC203",
        "brand-green": "#27AE60",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        segoe: ["Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
