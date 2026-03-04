import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        xs: {
          black: "#050505",
          dark: "#0C0C0C",
          card: "#111111",
          border: "#1C1C1C",
          "border-light": "#2A2A2A",
          green: "#00FF94",
          "green-dim": "#00FF9418",
          "green-hover": "#00E085",
          white: "#FAFAFA",
          gray: "#999999",
          "gray-light": "#BBBBBB",
          "gray-dark": "#666666",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
