/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Merriweather Sans"],
        global: ["Inter"],
        nav: ["Londrina Sketch"],
      },
    },
  },
  plugins: [],
};
