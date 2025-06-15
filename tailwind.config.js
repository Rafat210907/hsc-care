// /** @type {import('tailwindcss').Config} */
// export default {
//    content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
       animation: {
        rippling: "rippling var(--duration) ease-out",
        aurora: "aurora 8s ease-in-out infinite alternate",
        gradient: "gradient 8s linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",

      },
      keyframes: {
       orbit: {
          "0%": {
            transform:
              "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
          },
        },
           gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        aurora: {
          "0%": {
            backgroundPosition: "0% 50%",
            transform: "rotate(-5deg) scale(0.9)",
          },
          "25%": {
            backgroundPosition: "50% 100%",
            transform: "rotate(5deg) scale(1.1)",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            transform: "rotate(-3deg) scale(0.95)",
          },
          "75%": {
            backgroundPosition: "50% 0%",
            transform: "rotate(3deg) scale(1.05)",
          },
          "100%": {
            backgroundPosition: "0% 50%",
            transform: "rotate(-5deg) scale(0.9)",
          },
        },
      },
    },
  },
  plugins: [],
}
