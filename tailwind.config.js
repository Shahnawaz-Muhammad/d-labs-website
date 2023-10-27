/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#fff",
        black: "#000",
        yellow: "#ffd60a",
        lightGray: "#d4d2d2",
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
};
