/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        mysteryQuest: ["Mystery Quest"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: { titleColor: "#291507" },
    },
  },
  plugins: [],
};
