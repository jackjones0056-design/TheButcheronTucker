import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#8B1E1E",
          charcoal: "#1F1F1F",
          cream: "#F8F5F0",
        },
      },
    },
  },
  plugins: [],
};

export default config;
