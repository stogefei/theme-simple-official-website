/** @type {import('tailwindcss').Config} */
const { Icons } = require("tailwindcss-plugin-icons");
// const { colors } = require('tailwindcss-plugin-colors');
module.exports = {
  content: ["./templates/**/*.html", "./src/main.ts"],
  theme: {
    extend: {
      colors: {
        'main-red': '#E71419',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    Icons(() => ({
      tabler: {
        includeAll: true,
      },
    })),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  safelist: [
    "prose-sm",
    "prose-base",
    "prose-lg",
    "prose-xl",
    "prose-2xl",
    "prose-gray",
    "prose-slate",
    "prose-zinc",
    "prose-neutral",
    "prose-stone",
  ],
};
