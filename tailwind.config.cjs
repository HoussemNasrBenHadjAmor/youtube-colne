/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
