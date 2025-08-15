/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2C7A57",
          dark: "#1f5a40",
          light: "#e6f3ed"
        }
      }
    },
  },
  plugins: [],
};
