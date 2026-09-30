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

        /* Tinta: negro carbón / grafito de la marca. */
        ink: {
          DEFAULT: "#0B0B0B",
          900: "#0B0B0B",
          800: "#252525",
          700: "#333333",
          600: "#4A4A4A",
        },

        /* Papel: blanco roto de la marca (#F2F0EA) para paneles. */
        paper: {
          DEFAULT: "#FFFFFF",
          50: "#F8F7F3",
          100: "#F2F0EA",
          200: "#E6E3DB",
        },

        /* Humo: plata metálico de la marca (#A7A9AC) y grises de apoyo. */
        smoke: {
          DEFAULT: "#6B6D70",
          dark: "#4B4C4E",
          light: "#A7A9AC",
          line: "#E2E0DB",
        },

        /**
         * Rojo deportivo de la marca (#D71920, Pantone 485 C).
         *  - `accent` sirve sobre blanco (contraste AA) y como filete/marcador.
         *  - `accent.soft` es el válido para texto pequeño sobre tinta.
         */
        accent: {
          DEFAULT: "#D71920",
          deep: "#B3141A",
          dark: "#7F0E12",
          soft: "#F0565B",
          pale: "#FBE3E4",
        },
      },
      fontFamily: {
        display: ["Manrope", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
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
