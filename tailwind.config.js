/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ec1d24",
        "primary-light": "rgb(236 29 36 / 50%)",
        "primary-dark": "rgb(175 38 42)",
        secondary: "#000000",
        "secondary-medium": "rgb(75 85 99)",
        "secondary-light": "rgb(209 213 219)",
      },
    },
  },
  plugins: [],
};
