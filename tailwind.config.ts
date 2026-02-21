import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#0F172A",
        crimson: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D"
        },
        volt: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B"
        }
      },
      boxShadow: {
        soft: "0 14px 40px rgba(2, 6, 23, 0.14)",
        glow: "0 0 0 1px rgba(239, 68, 68, 0.25), 0 18px 50px rgba(239, 68, 68, 0.25)"
      }
    },
  },
  plugins: [],
} satisfies Config;
