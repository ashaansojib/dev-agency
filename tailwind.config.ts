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
        "primary": "#2a2b2b",
        "secondary": "#42436e",
        "accent": "#fff"
      },
      backgroundColor: {
        "primary": "#3658FF",
        "secondary": "#24CDFF",
        "accent": "#fff"
      },
      gradientColorStops: {
        "primary": "#3658FF",
        "secondary": "#24CDFF",
      }
    },
  },
  plugins: [],
};
export default config;
