import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E1A",
        slatey: "#101827",
        steel: "#1F2A44",
        electric: "#2F7CFF",
        neon: "#00E5A8",
        ember: "#FF4D4D",
      },
      boxShadow: {
        panel: "0 16px 60px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px rgba(47, 124, 255, 0.25), 0 22px 70px rgba(47, 124, 255, 0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
