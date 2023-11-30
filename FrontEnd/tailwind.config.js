/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#041C32",
        secondary: "#F0ECE5",
        logo: "#FFC436",
      },
    },
  },
  plugins: [],
};
