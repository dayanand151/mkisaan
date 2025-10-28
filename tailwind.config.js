/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          emerald: {
            900: "#064e3b",
            800: "#065f46"
          }
        }
      }
    },
    plugins: []
  };