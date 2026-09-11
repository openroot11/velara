---
titulo: Referencia Spradling / Proquinal
tags: [diseño, referencia]
---

# Referencia — Spradling / Proquinal

VELARA está modelado sobre el sitio corporativo de **Spradling / Proquinal
(LATAM)**: `https://lat.spradling.group/es-la`. Capturado el 2026-09-10.

## Documento completo

**`referencia-spradling/GUIA-SPRADLING.md`** (226 líneas) — el análisis
detallado: design tokens, arquitectura de navegación, plantillas de página,
componentes. Es la fuente; esta nota es solo el resumen.

## Material de apoyo (carpeta `referencia-spradling/`)

| Archivo | Qué es |
|---|---|
| `capturas/01-home.png` … `38-mobile-catalogo.png` | 30+ capturas de todas las plantillas de página |
| `capturas/design-tokens.json` | Tokens extraídos del CSS de la referencia |
| `capturas/30–34-*-limpio.png` | Versiones "limpias" (sin cookie banner ni chat) |
| `capturas/35–38-mobile-*.png` | Vistas móviles |
| `capturas-full/` | Capturas de página completa (`screencapture-*.png`) |
| `prompts/prompt-estetica-spradling.md` | Prompt de diseño reutilizable |
| `scripts/*.js` | Scripts de automatización usados para capturar y analizar |

## Lo esencial que se copió a VELARA

- **Sitio de varias páginas** con navegación profunda: mega-menús, páginas por
  «carpetas», migas de pan, buscador que es a la vez mapa del sitio.
- **Contraste tipográfico** serif display + grotesca de texto como firma.
  (Spradling usa Dala Moa + Gramatika; VELARA usa Fraunces + Manrope — ver
  [[identidad-visual]].)
- **Fondo blanco, tinta casi negra, un solo acento teal**, encabezado negro,
  pie oscuro.
- Títulos de sección centrados con **filete corto debajo**.
- **Botones pill** 100% redondeados; el resto de las esquinas rectas.
- Rejillas de 3 columnas; **bandas de color teal a sangre completa** entre
  bloques blancos.
- Header sticky negro; menú móvil a pantalla completa con acordeón «+».
- Plantillas replicadas: Home, Catálogo (con rail de filtros), Ficha de producto
  (specs + acordeones), Página de mercado/servicio (filas zig-zag), Nosotros
  (línea de tiempo con años gigantes), Proyectos.

## Diferencias deliberadas en VELARA

- Es un taller local, no un fabricante: el objetivo es cotización por WhatsApp,
  no distribuidores. Ver [[arquitectura-web]] § embudo de cotización.
- Sin selector de región, sin submarca tipo EcoSense, sin e-commerce.
- Paleta y tipografía propias (aunque de la misma lógica). Ver [[identidad-visual]].
