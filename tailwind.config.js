/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors:{
        durazno:"#FD9594",
        Background:"#fff1e6",
        violeta:"#9381ff",
        azul:"#5aa9e6"
      }
    },
  },
  plugins: [],
};
