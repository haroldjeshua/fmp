/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "hsl(0, 0%, 8%)",
        "card-color": "hsl(0, 0%, 9%)",
        "text-color": "hsl(0, 0%, 64%)",
        "icon-color": "hsl(0, 0%, 32%)",
        "border-color": "hsl(0deg 0% 100% / 10%)",
      },
      fontFamily: {
        main: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
