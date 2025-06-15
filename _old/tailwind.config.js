/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "main" : "#030014",
        "primary" :"#01e0c3",
        // "secondary" : "#fc537e",
        "secondary" : "#e033e7",
        "dark" : "#b3b3b3"
      }
    },
  },
  plugins: [],
};
