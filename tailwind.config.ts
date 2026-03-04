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
          navy: "#0f1623",
          "navy-light": "#151d2e",
          cream: "#f5f5f0",
          "cream-dark": "#e8e8e3",
          green: "#00FF94",
          "green-dim": "#00FF9418",
          "green-hover": "#00E085",
          white: "#FAFAFA",
          gray: "#999999",
          "gray-light": "#BBBBBB",
          "gray-dark": "#666666",
          border: "#1e2a3a",
          "border-light": "#ddd",
          "text-dark": "#1a1a1a",
          "text-muted": "#555555",
        },
      },
      fontFamily: {
        heading: ["var(--font-barlow-condensed)", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
