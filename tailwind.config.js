/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0abb87",
        "primary-light": "#90e8be",
        secondary: " #eef0f5",
        "secondary-light": "#f9fbff",
        "secondary-dark": "#cad6dc",
      },
    },
  },
  plugins: [],
};
