/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        mysteryQuest: ["Mystery Quest"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        titleColor: "#291507",
        currentColor: "rgba(41, 21, 7, 1)",
        readMoreColor: "rgba(41, 21, 7, 0.6)",
        cancelColor: "rgba(151, 151, 151, 0.1)",
        borderColor: "rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
