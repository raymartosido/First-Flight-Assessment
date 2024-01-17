/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [
      "./snippets/*.liquid",
      "./sections/*.liquid",
      "./templates/*.liquid",
      "./layout/*.liquid",
    ],
  },
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      colors: {
        primary: "#151737",
        'primary-darker': "#0d0e26"
      }
    },
  },
  plugins: [],
}

