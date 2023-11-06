/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        main: "#DCF3CA",
        gray: "#C6C6C6",
        subMain: "#F3F9FF",
        border: "#F1F8FF",
      },
      screens: {
        xs: "475px",
      },
      fontFamily: {
        main: ["Public Sans", "sans-serif"],
        subMain: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
