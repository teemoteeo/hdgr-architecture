import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warmWhite: "#FDFAF6",
        anthracite: "#2B2D2F",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
