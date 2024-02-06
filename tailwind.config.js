/** @type {import(tailwindcss).Config} */
// const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5c5fc0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
