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
        brand: {
          bg: "#FAF7F4",
          rose: "#C9727A",
          burgundy: "#8B5E52",
          gold: "#C8A876",
          text: "#2C2C2C",
          "rose-light": "#F2D5D7",
          "cream": "#F5EDE6",
          "sage": "#7A9E7E",
          "muted": "#9C8B85",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        dm: ["var(--font-dm)", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "rose": "0 4px 24px rgba(201, 114, 122, 0.15)",
        "card": "0 2px 20px rgba(44, 44, 44, 0.08)",
        "card-hover": "0 8px 40px rgba(44, 44, 44, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
