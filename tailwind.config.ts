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
        primary: "#0A0A0A",
        secondary: "#666666",
        tertiary: "#999999",
        border: "#E5E5E5",
        background: "#FAF8F5",
      },
      fontFamily: {
        sans: ["SF Mono", "SFMono-Regular", "ui-monospace", "Menlo", "Monaco", "Consolas", "monospace"],
        mono: ["SF Mono", "SFMono-Regular", "ui-monospace", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        "hero": ["72px", { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "300" }],
        "hero-mobile": ["42px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        DEFAULT: "150ms",
        "600": "600ms",
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
