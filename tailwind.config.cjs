/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      dark_mode: "#121212",
      light_mode: "#ffffff",
      dark_color: "#ffffff",
      light_color: "#000000",
      bg_search_dark: "rgb(23 23 23)",
      bg_zinc: "rgb(63 63 70)",
    },
    extend: {
      animation: {
        openMenu: "openmenu 1s ease-in",
        closeMenu: "closemenu 1s ease-in",
      },
      keyframes: {
        openmenu: {
          // initial position
          "0%": { left: "-100px" },
          // final position
          "100%": { left: "0px" },
        },
        closemenu: {
          // initial position
          "0%": { left: "0px" },
          // final position
          "100%": { left: "-100px" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
