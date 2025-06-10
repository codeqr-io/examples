import forms from "@tailwindcss/forms";
import scrollbarHide from "tailwind-scrollbar-hide";
import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/pliny/**/*.js",
    "./layouts/**/*.{js,ts,tsx}",
    "./data/**/*.mdx",
  ],
  darkMode: "selector",
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["2rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.5rem", { lineHeight: "3.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1.1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
      "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
      "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
      "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
    },
    current: "currentColor",
    extend: {
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      screens: {
        xs: "420px",
      },
      colors: {
        blue: {
          "50": "#e6ecfc", // Muito claro
          "100": "#cdd9fa", // Mais claro
          "200": "#b3c6f8", // Claro
          "300": "#99b3f6", // Levemente claro
          "400": "#7fa0f4", // Pouco mais claro que a base
          "500": "#1B59F5", // Cor base
          "600": "#174de0", // Pouco mais escuro que a base
          "700": "#1341cb", // Escuro
          "800": "#0f35b6", // Mais escuro
          "900": "#0b29a1", // Muito escuro
          "950": "#081d8c", // Extremamente escuro
        },
        black: "#0B1520",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderColor: {
        "primary-500": "#1B59F5",
      },
      fontFamily: {
        default: ["var(--font-inter)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        title: ["var(--font-title)", ...fontFamily.sans],
        lora: ["var(--font-lora)", ...fontFamily.serif],
        work: ["var(--font-work)", ...fontFamily.sans],
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
        openSans: ["var(--font-open-sans)", ...fontFamily.sans],
        lato: ["var(--font-lato)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
        raleway: ["var(--font-raleway)", ...fontFamily.sans],
        sourceCodePro: ["var(--font-source-code-pro)", ...fontFamily.mono],
        playfairDisplay: ["var(--font-playfair-display)", ...fontFamily.serif],
        mono: ["Consolas", ...fontFamily.mono],
        // sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: `${theme("colors.primary.600")}`,
              },
              code: { color: theme("colors.primary.400") },
            },
            "h1,h2,h3": {
              letterSpacing: theme("letterSpacing.tight"),
            },
            h3: {
              fontWeight: "600",
            },
            code: {
              color: theme("colors.indigo.500"),
            },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
          invert: {
            css: {
              a: {
                color: theme("colors.primary.500"),
                "&:hover": {
                  color: `${theme("colors.primary.400")}`,
                },
                code: { color: theme("colors.primary.400") },
              },
              "h1,h2,h3,h4,h5,h6": {
                color: theme("colors.gray.100"),
              },
            },
          },
        },
      }),
      animation: {
        // Modal
        "scale-in": "scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.2s ease-out forwards",
        // Popover, Tooltip
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade":
          "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        // Navigation menu
        "enter-from-right": "enter-from-right 0.25s ease",
        "enter-from-left": "enter-from-left 0.25s ease",
        "exit-to-right": "exit-to-right 0.25s ease",
        "exit-to-left": "exit-to-left 0.25s ease",
        "scale-in-content": "scale-in-content 0.2s ease",
        "scale-out-content": "scale-out-content 0.2s ease",
        // Accordion
        "accordion-down": "accordion-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "accordion-up": "accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        // Custom wiggle animation
        wiggle: "wiggle 0.75s infinite",
        // Custom spinner animation (for loading-spinner)
        spinner: "spinner 1.2s linear infinite",
        // Custom blink animation (for loading-dots)
        blink: "blink 1.4s infinite both",
        "infinite-scroll": "infinite-scroll 22s linear infinite",
        // Text appear animation
        "text-appear": "text-appear 0.15s ease",
      },
      keyframes: {
        // Modal
        "scale-in": {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Popover, Tooltip
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(2px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: "0", transform: "translateX(-2px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: "0", transform: "translateY(-2px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: "0", transform: "translateX(2px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        // Navigation menu
        "enter-from-right": {
          "0%": { transform: "translateX(200px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "enter-from-left": {
          "0%": { transform: "translateX(-200px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "exit-to-right": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(200px)", opacity: "0" },
        },
        "exit-to-left": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-200px)", opacity: "0" },
        },
        "scale-in-content": {
          "0%": { transform: "rotateX(-30deg) scale(0.9)", opacity: "0" },
          "100%": { transform: "rotateX(0deg) scale(1)", opacity: "1" },
        },
        "scale-out-content": {
          "0%": { transform: "rotateX(0deg) scale(1)", opacity: "1" },
          "100%": { transform: "rotateX(-10deg) scale(0.95)", opacity: "0" },
        },
        // Accordion
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Custom wiggle animation
        wiggle: {
          "0%, 100%": {
            transform: "translateX(0%)",
            transformOrigin: "50% 50%",
          },
          "15%": { transform: "translateX(-4px) rotate(-4deg)" },
          "30%": { transform: "translateX(6px) rotate(4deg)" },
          "45%": { transform: "translateX(-6px) rotate(-2.4deg)" },
          "60%": { transform: "translateX(2px) rotate(1.6deg)" },
          "75%": { transform: "translateX(-1px) rotate(-0.8deg)" },
        },
        // Custom spinner animation (for loading-spinner)
        spinner: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        // Custom blink animation (for loading-dots)
        blink: {
          "0%": {
            opacity: "0.2",
          },
          "20%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0.2",
          },
        },
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-150%)" },
        },
        // Text appear animation
        "text-appear": {
          "0%": {
            opacity: "0",
            transform: "rotateX(45deg) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "rotateX(0deg) scale(1)",
          },
        },
      },
      maxWidth: {
        "2xl": "40rem",
      },
      // Custom gradient backgrounds
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(180px at 274.672px 65px, white, transparent)",
      },
      // Custom mask images
      maskImage: {
        "radial-gradient":
          "radial-gradient(180px at 274.672px 65px, white, transparent)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    forms,
    scrollbarHide,
    function ({ addUtilities }) {
      const newUtilities = {
        ".mask-image-radial": {
          maskImage:
            "radial-gradient(180px at 274.672px 65px, white, transparent)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

export default config;
