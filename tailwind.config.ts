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
        primary: {
          DEFAULT: "#0F172A", // Deep Navy Slate anchor
          foreground: "#FFFFFF",
          hover: "#1E293B",
          container: "#131B2E",
          "on-container": "#7C839B",
          fixed: "#DAE2FD",
          "fixed-dim": "#BEC6E0",
          "on-fixed": "#131B2E",
          "on-fixed-variant": "#3F465C",
        },
        secondary: {
          DEFAULT: "#0D9488", // Refined Deep Teal / Emerald
          foreground: "#FFFFFF",
          container: "#86F2E4",
          "on-container": "#006F66",
          fixed: "#89F5E7",
          "fixed-dim": "#6BD8CB",
          "on-fixed": "#00201D",
          "on-fixed-variant": "#005049",
        },
        tertiary: {
          DEFAULT: "#2563EB", // Cobalt Blue
          foreground: "#FFFFFF",
          container: "#00174B",
          "on-container": "#497CFF",
          fixed: "#DBE1FF",
          "fixed-dim": "#B4C5FF",
          "on-fixed": "#00174B",
          "on-fixed-variant": "#003EA8",
        },
        neutral: {
          DEFAULT: "#64748B", // Balanced Slate
        },
        surface: {
          DEFAULT: "#F8F9FF",
          dim: "#CBDBF5",
          bright: "#F8F9FF",
          tint: "#565E74",
          variant: "#D3E4FE",
          "container-lowest": "#FFFFFF",
          "container-low": "#EFF4FF",
          container: "#E5EEFF",
          "container-high": "#DCE9FF",
          "container-highest": "#D3E4FE",
        },
        "on-surface": {
          DEFAULT: "#0B1C30",
          variant: "#45464D",
        },
        "inverse-surface": "#213145",
        "inverse-on-surface": "#EAF1FF",
        "inverse-primary": "#BEC6E0",
        background: "#F8F9FF",
        "on-background": "#0B1C30",
        outline: {
          DEFAULT: "#76777D",
          variant: "#C6C6CD",
        },
        border: {
          DEFAULT: "#E2E8F0",
          dark: "#CBD5E1",
          subtle: "#F1F5F9",
        },
        error: {
          DEFAULT: "#BA1A1A",
          foreground: "#FFFFFF",
          container: "#FFDAD6",
          "on-container": "#93000A",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        headline: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.025em", fontWeight: "700" }],
        "headline-xl-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["26px", { lineHeight: "34px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "600" }],
        "headline-sm": ["18px", { lineHeight: "26px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "20px", letterSpacing: "0em", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "600" }],
        "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.03em", fontWeight: "600" }],
      },
      borderRadius: {
        sm: "0.25rem", // 4px
        DEFAULT: "0.5rem", // 8px
        md: "0.75rem", // 12px
        lg: "1rem", // 16px
        xl: "1.5rem", // 24px
        full: "9999px",
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-mobile": "1rem",
        margin: "2.5rem",
        "margin-mobile": "1rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
