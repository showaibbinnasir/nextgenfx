/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";

const Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default keepTheme(Config)

