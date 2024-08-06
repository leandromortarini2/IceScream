/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors:{
        Terciario:"#FD9594",
        Background:"#fff1e6",
        Primario:"#9381ff",
        Secundario:"#5aa9e6"
      },
      fontFamily:{
        cursiva: '"Pacifico", cursive',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        fadeOut: "fadeOut 0.5s ease-in",
      },
    },
  },
  plugins: [],
};
