---
titulo: Proyecto VELARA
tags: [proyecto]
---

# Proyecto VELARA

## Qué es

Sitio corporativo para **VELARA**, un taller de cuero y tapicería en
Barranquilla (Colombia). Servicios: tapizado automotriz y de motos, carpas y
toldos para negocio, forros a la medida, y un catálogo de materiales.

No es tienda en línea. El objetivo es mostrar el trabajo y **llevar a la persona
a pedir una cotización por WhatsApp**.

La estructura y la estética están modeladas sobre el sitio de **Spradling /
Proquinal** — ver [[referencia-spradling]].

## Estado

- Sitio funcional, construido con React + Vite. Ver [[arquitectura-web]].
- El contenido es **provisional**: textos de relleno realistas e imágenes de
  archivo de Unsplash (no son trabajos reales del taller).

## Pendientes antes de publicar

Todo esto vive en `sitio/src/data/site.ts` salvo donde se indique:

- [ ] **Número de WhatsApp real** — hoy es `573000000000` (ejemplo).
      Está en la constante `WHATSAPP_NUMBER` arriba de `site.ts`.
- [ ] Teléfono, correo y dirección reales (`site.contact`, `site.location`).
- [ ] Horario real (`site.hours`).
- [ ] Enlaces de redes reales (`site.social`).
- [ ] **Fotos reales del taller** — reemplazar las de Unsplash.
      Guardar en `sitio/public/img/` y cambiar el `src` en
      `src/data/images.ts`. Ver [[contenido-editable]].
- [ ] Logo vectorial del diseñador, si existe — reemplazar los `<path>` en
      `src/components/ui/Logo.tsx` y `public/favicon.svg`. Ver [[identidad-visual]].
- [ ] Revisar textos de servicios, materiales, proyectos y recursos.

## Publicación

SPA estático. `npm run build` genera `/dist`, se publica esa carpeta.
Config lista para Netlify (`public/_redirects`) y Vercel (`vercel.json`).
