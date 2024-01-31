/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/flowbite/**/*.js"], // Corrected syntax
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
