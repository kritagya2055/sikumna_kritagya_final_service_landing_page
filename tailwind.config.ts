import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B14",
        card: "#15151E",
        cardDeep: "#0E0E1E",
        cardBorder: "rgba(255,255,255,0.08)",
        accent: "#7C5CFC",
        accentSoft: "#A78BFA",
        muted: "#A1A1AA",
        inputBg: "#1A1A24",
        inputBorder: "rgba(255,255,255,0.10)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "24px",
      },
    },
  },
  plugins: [],
};

export default config;
