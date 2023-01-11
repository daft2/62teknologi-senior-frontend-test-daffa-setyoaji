/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ["Roboto Mono", "monospace"],
        robotoSlab: ["Roboto Slab", "serif"],
        silkscreen: ["Silkscreen", "cursive"],
      },
    },
  },
  plugins: [],
};
