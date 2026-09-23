/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* --------------------------------------------------------------------
         * VELARA palette — modelada sobre la referencia de Spradling / Proquinal:
         * fondo blanco, tinta casi negra, gris cálido para paneles y un acento
         * naranja vibrante. El acento nunca es el color dominante.
         * ------------------------------------------------------------------ */

        /* Tinta: texto, header y footer. */
        ink: {
          DEFAULT: "#1B1B1B",
          900: "#141414",
          800: "#232323",
          700: "#333333",
          600: "#4A4A4A",
        },

        /* Papel: el fondo del sitio y los paneles claros. */
        paper: {
          DEFAULT: "#FFFFFF",
          50: "#FAF9F7",
          100: "#F3F2EF",
          200: "#E7E5E0",
        },

        /* Humo: texto secundario, filetes y bordes. */
        smoke: {
          DEFAULT: "#6E6E6E",
          dark: "#4B4B4B",
          light: "#939393",
          line: "#E2E0DB",
        },

        /**
         * Acento naranja vibrante. Sobre blanco:
         *  - `accent` vale para títulos grandes, filetes y marcadores.
         *  - `accent.deep` es el que pasa AA en texto pequeño.
         * Sobre tinta, `accent.soft` es el válido.
         */
        accent: {
          DEFAULT: "#FF5A1F",
          deep: "#C7420E",
          dark: "#8C2E0A",
          soft: "#FF8F5E",
          pale: "#FFE7DA",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "Cambria", '"Times New Roman"', "serif"],
        sans: ['"Manrope"', "ui-sans-serif", "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        /* Escala más contenida que la anterior — títulos editoriales, no carteles. */
        "display-xl": ["clamp(2.5rem, 5.5vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.018em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.6rem, 3vw, 2.5rem)", { lineHeight: "1.12", letterSpacing: "-0.012em" }],
        "display-sm": ["clamp(1.3rem, 2.2vw, 1.9rem)", { lineHeight: "1.2", letterSpacing: "-0.008em" }],
        overline: ["0.7rem", { lineHeight: "1", letterSpacing: "0.18em" }],
        "overline-sm": ["0.64rem", { lineHeight: "1", letterSpacing: "0.16em" }],
      },
      letterSpacing: {
        widen: "0.18em",
      },
      spacing: {
        section: "clamp(3.5rem, 6.5vw, 6.5rem)",
      },
      maxWidth: {
        shell: "1440px",
        prose2: "64ch",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.16, 1, 0.3, 1)",
        "soft-in": "cubic-bezier(0.7, 0, 0.84, 0)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },
      keyframes: {
        "scroll-hint": {
          "0%": { transform: "translateY(-40%)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateY(140%)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-hint": "scroll-hint 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};
