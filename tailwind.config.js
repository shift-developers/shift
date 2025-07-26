/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl2: "1200px",
      },
      colors: {
        "pure-white": "#FFFFFF",
        white: "#F3F6F8",
        "dark-blue": "#062287",
        blue: "#0076DE",
        black: "#151515",
        "neutral-750": "#393E4B ",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        proxima: ['"Proxima Nova"', "sans-serif"],
        gothic: ['"Century Gothic Paneuropean"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
