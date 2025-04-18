/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Garante que Tailwind escaneie todos os arquivos JS/TS/JSX/TSX
    ],
    theme: {
      extend: {
        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"]
        }
      },
    },
    plugins: [],
  }