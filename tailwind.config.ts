import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070A12",
        graphite: "#0F172A",
        steel: "#111827",
        slatey: "#0B1220",
        fog: "#94A3B8",
        ember: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B"
        },
      },
      boxShadow: {
        panel: "0 18px 70px rgba(0,0,0,0.45)",
        ember: "0 0 0 1px rgba(239, 68, 68, 0.28), 0 24px 80px rgba(239, 68, 68, 0.18)",
      },
      backgroundImage: {
        "grid-faint": "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-faint": "120px 120px",
      },
    },
  },
  plugins: [],
} satisfies Config;
