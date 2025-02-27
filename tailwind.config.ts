import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",  // If using Next.js 13+ App Router (optional)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;