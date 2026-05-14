import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        k: {
          bg: "#070707",
          surface: "#101010",
          card: "#131313",
          accent: "#D0FF3E",
          "accent-hover": "#E2FF74",
          "accent-dim": "rgba(208,255,62,0.12)",
          "accent-border": "rgba(208,255,62,0.2)",
          border: "rgba(255,255,255,0.06)",
          "border-strong": "rgba(255,255,255,0.1)",
          text: "#ffffff",
          "text-2": "rgba(255,255,255,0.55)",
          "text-3": "rgba(255,255,255,0.25)",
          green: "#4ADE80",
          red: "#F87171",
          blue: "#60A5FA",
          purple: "#A78BFA",
          orange: "#FB923C",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(208,255,62,0.08), 0 0 80px rgba(208,255,62,0.04)",
        "glow-sm": "0 0 20px rgba(208,255,62,0.1)",
        "glow-md": "0 0 40px rgba(208,255,62,0.15)",
        card: "0 1px 3px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.03) inset",
        "card-hover": "0 4px 20px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.06) inset",
        panel: "1px 0 0 rgba(255,255,255,0.05)",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(135deg, #D0FF3E 0%, #E2FF74 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "fade-in": "fadeIn 0.4s ease-out",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
