/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#b6895b",
        bg: "#010101",
        bgNavbar: "rgba(1,1,1,0.8)",
      },
    },
  },

  plugins: [],
};
