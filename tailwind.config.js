/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navy: {
          DEFAULT: "#101C2C",
          deep: "#07111D",
          soft: "#1A2E46",
        },
        gold: {
          DEFAULT: "#F7C600",
          deep: "#DDA400",
          soft: "#FFF9DB",
          hover: "#FFD21A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F4F7FA",
        },
        muted: {
          DEFAULT: "#667085",
          light: "#98A2B3",
        },
        border: {
          DEFAULT: "#E5EAF0",
          dark: "rgba(255, 255, 255, 0.12)",
        }
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["'Instrument Serif'", "serif"],
      },
      boxShadow: {
        'gold-glow': '0 8px 24px rgba(247, 198, 0, 0.18)',
        'gold-hover': '0 12px 30px rgba(247, 198, 0, 0.28)',
        'premium': '0 18px 50px rgba(7, 17, 29, 0.08)',
        'premium-hover': '0 24px 60px rgba(7, 17, 29, 0.14)',
        'dark-card': '0 20px 45px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
