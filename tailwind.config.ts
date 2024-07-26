import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: [
      {
        mytheme: {
          default: "#C7F9CC",
          primary: "#C7F9CC",
          secondary: "#38A3A5",
          accent: "#57CC99",
          neutral: "#80ED99",
          info: "#C7F9CC",
          success: "#C7F9CC",
          warning: "#C7F9CC",
          error: "#C7F9CC",
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        Navy: "#201E43",
        Blue: "#38A3A5",
        Teal: "#57CC99",
        Green: "#80ED99",
        LightGreen: "#C7F9CC",
        Grey: "#EEEEEE",
        DarkBlue: "#15142D",
        Gradient: "#babab9",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
export default config;
