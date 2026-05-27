import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New v2 palette — bold, high-energy, light base.
        surface: "#FFFFFF",
        alt: "#F4F6FA",
        primary: "#1E5FFF", // electric blue — CTAs
        deep: "#0A1F66", // deep blue — headlines
        accent: "#FFD60A", // bright yellow — highlights, checkmarks
        ink: "#0E0E10", // charcoal text
        muted: "#5A5A66", // muted text
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
