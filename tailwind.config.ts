import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import scrollbar from "tailwind-scrollbar"
import animate from "tailwindcss-animate"

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        quicksand: ["var(--font-quicksand)", ...fontFamily.sans],
        bangers: ["var(--font-bangers)", ...fontFamily.sans],
        "roboto-condensed": [
          "var(--font-roboto-condensed)",
          ...fontFamily.sans,
        ],
      },
      colors: {
        primary: "#d1411e",
        secondary: "#ffa323",
        tertiary: "#331812",
        black: "#231714",
        orange: "#FF7A30",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [scrollbar, animate],
}

export default config
