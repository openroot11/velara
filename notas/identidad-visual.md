---
titulo: Identidad visual
tags: [diseño, identidad]
---

# Identidad visual

Fuente de verdad en código: `sitio/tailwind.config.js`.
Parte visual del [[manual-de-marca]]. Referencia de la que sale todo: [[referencia-spradling]].

## Paleta

Tokens en `tailwind.config.js` → `theme.extend.colors`.

| Token | HEX | Uso |
|---|---|---|
| `ink` | `#1B1B1B` | Texto, encabezado, pie. Variantes 900–600 |
| `paper` | `#FFFFFF` | Fondo del sitio |
| `paper.50` | `#FAF9F7` | Paneles claros |
| `paper.100` / `paper.200` | `#F3F2EF` / `#E7E5E0` | Paneles y bordes suaves |
| `smoke` | `#6E6E6E` | Texto secundario |
| `smoke.line` | `#E2E0DB` | Filetes y bordes |
| `accent` | `#FF5A1F` | Naranja vibrante. Títulos grandes, filetes, marcadores |
| `accent.deep` | `#C7420E` | El que pasa AA en texto pequeño sobre blanco |
| `accent.soft` | `#FF8F5E` | El válido sobre fondo `ink` |
| `accent.pale` | `#FFE7DA` | Fondos teñidos muy claros |

**Regla de oro:** el acento es acento, nunca el color dominante. Encabezado y
pie son `ink`; casi todo lo demás es `paper` con paneles `paper.50`.

> Nota: el [[prompt-estetica-spradling|prompt de estética]] y la
> `GUIA-SPRADLING.md` citan HEX ligeramente distintos (`#212529`, `#00575F`,
> `#282828`…) porque describen la **referencia**. Los valores reales del sitio
> VELARA son los de la tabla de arriba.

## Tipografía

- **Display:** Fraunces (serif de alto contraste), con `SOFT`/`WONK` a 0 para
  que lea clásica. Vía Google Fonts.
- **UI / texto:** Manrope. Vía Google Fonts.
- Escala: clases `text-display-xl … text-display-sm` y `overline` (definidas en
  `tailwind.config.js` → `fontSize`).
- **Gesto firma:** títulos de sección centrados con un filete corto debajo
  (`.rule-under` en `src/index.css`).
- Enlaces de acción secundarios en mayúsculas pequeñas con flecha: `VER MÁS →`.

## Logotipo

`sitio/src/components/ui/Logo.tsx` — marca felina (`VelaraMark`, SVG de
trazo único) + wordmark. Para sustituir por el vector del diseñador: reemplazar
los `<path>` y `public/favicon.svg`.

## Movimiento

- Framer Motion + Lenis (scroll suave).
- Todo respeta `prefers-reduced-motion`.
- `?nomotion` en la URL → sitio estático, útil para QA y capturas.
