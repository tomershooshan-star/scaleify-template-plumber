/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1600px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        brand: {
          // Hard industrial palette
          blue: "#1E40E8",          // vivid cobalt (CTAs, panels)
          blueDeep: "#0B2C7A",      // deep navy-blue (panels, bg)
          blueDark: "#0A1F5C",      // even darker
          blueLight: "#3B5BF0",     // hover
          blueTint: "#EAEFFE",      // light section bg
          yellow: "#FFD400",        // bright marker yellow
          yellowDark: "#E6BE00",
          black: "#0A0A0A",
          ink: "#0F1115",
          paper: "#FFFFFF",
          grayLight: "#F3F4F7",
          gray: "#8A8F9A",
          // Back-compat aliases so shared components Just Work
          navy: "#0B2C7A",
          navyDeep: "#0A1F5C",
          navySoft: "#1E40E8",
          red: "#FFD400",
          redDark: "#E6BE00",
          cream: "#F3F4F7",
          creamDeep: "#EAEFFE",
          charcoal: "#0A0A0A",
        },
      },
      fontFamily: {
        // NO serif — sharp industrial sans only
        sans: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        grotesk: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        ultratight: "-0.055em",
      },
      boxShadow: {
        soft: "0 24px 70px -22px rgba(11,44,122,0.30)",
        card: "0 1px 2px rgba(11,44,122,0.05), 0 8px 28px -10px rgba(11,44,122,0.12)",
        bluepanel: "0 40px 100px -30px rgba(30,64,232,0.55)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
