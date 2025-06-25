/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        secondary: "#fff7ed",
        accent: "#ea580c",
      },
      fontFamily: {
        title: ["Playfair Display", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
