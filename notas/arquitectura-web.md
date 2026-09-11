---
titulo: Arquitectura del sitio
tags: [código, arquitectura]
---

# Arquitectura del sitio

Raíz del código: `sitio/`. Doc oficial: `sitio/README.md`.

## Stack

| Pieza | Tecnología |
|---|---|
| Build | Vite 5 |
| UI | React 18 + TypeScript |
| Estilos | Tailwind CSS 3 (tokens en `tailwind.config.js` — ver [[identidad-visual]]) |
| Animación | Framer Motion 11 |
| Scroll suave | Lenis |
| Routing | React Router 6 |
| Tipografías | Fraunces + Manrope (Google Fonts) |

## Puesta en marcha

```bash
cd "sitio"
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist (tsc + vite build)
npm run preview  # sirve /dist en http://localhost:4173
```

Requiere Node 18+.

## Rutas (definidas en `src/App.tsx`)

```
/                     Portada
/servicios            Índice de servicios
/servicios/:slug      Página de servicio
/materiales           Catálogo con filtros
/materiales/:slug     Ficha de material
/nosotros             El taller
/proceso              Las seis etapas
/recursos             Guías, FAQ, glosario
/recursos/:slug       Artículo
/proyectos            Galería con filtro por oficio
/proyectos/:slug      Página de proyecto
/cotizar              Formulario → WhatsApp
/contacto             Datos + formulario → correo
*                     404 (lista las secciones)
```

## Estructura de `src/`

| Carpeta | Contenido |
|---|---|
| `src/data/` | **Todo el contenido editable.** Ver [[contenido-editable]] |
| `src/pages/` | Una por ruta (`Home.tsx`, `Materiales.tsx`, `MaterialDetail.tsx`…) |
| `src/components/layout/` | `Header`, `Footer`, `MegaMenu`, `MobileNav`, `SearchOverlay` |
| `src/components/sections/` | Bloques de la portada (`HomeHero`, `Materials`, `Process`…) |
| `src/components/ui/` | Piezas reutilizables (`Accordion`, `Breadcrumbs`, `PageHero`, `Logo`…) |
| `src/components/system/` | `SmoothScroll` (Lenis) |
| `src/lib/` | `cn.ts` (clases), `hooks.ts` (incl. `setScrollLocked`) |
| `src/index.css` | Estilos base y utilidades como `.rule-under` |

## El embudo de cotización

1. Cada sección termina en un botón a `/cotizar`.
2. Muchos botones ya llevan el servicio: `/cotizar?servicio=carpas-para-negocio`.
3. `src/pages/Cotizar.tsx` valida en el navegador y arma el mensaje.
4. Al enviar, **abre WhatsApp con el mensaje escrito** — la página no manda nada
   sola. También hay botón de copiar.

Número de WhatsApp: constante `WHATSAPP_NUMBER` en `src/data/site.ts`. Ver
pendientes en [[proyecto-velara]].

## Navegación

`src/data/navigation.ts` es la **única fuente de verdad** para: mega-menú
desktop, acordeón móvil, mapa del buscador y columnas del pie.

## Deploy

SPA estático. `npm run build` → publicar `/dist`. `_redirects` (Netlify) y
`vercel.json` (Vercel) ya incluidos para el fallback de rutas.
