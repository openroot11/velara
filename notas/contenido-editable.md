---
titulo: Contenido editable
tags: [código, contenido]
---

# Contenido editable

**Todo el contenido editable está en `sitio/src/data/`.** No hay que tocar
componentes para cambiar textos, agregar servicios/materiales o publicar un
proyecto. Ver también [[arquitectura-web]].

## Qué controla cada archivo

| Archivo | Qué controla | Líneas aprox. |
|---|---|---|
| `site.ts` | Nombre, WhatsApp, teléfono, correo, dirección, horario, redes, enlaces legales, texto del boletín | 79 |
| `navigation.ts` | **El árbol de menús.** Mega-menús, acordeón móvil, mapa del buscador y columnas del pie leen de aquí | 246 |
| `services.ts` | Los 4 servicios: descripción, aplicaciones (filas alternas), entregables, ficha | 282 |
| `materials.ts` | El catálogo: familia, resumen, usos y propiedades (alimentan los filtros), ficha técnica, cuidado, colores | 341 |
| `recursos.ts` | Artículos de Recursos. Cuerpo por bloques (`p`, `h2`, `ul`, `note`, `qa`, `term`…) | 222 |
| `projects.ts` | Proyectos + su página propia (proceso, ficha, galería). `categorySlug` los asocia a un servicio | 302 |
| `process.ts` | Las seis etapas de «De la idea al taller» | 47 |
| `testimonials.ts` | Testimonios de la portada | 39 |
| `images.ts` | Registro central de imágenes (claves → `src`, `alt`, `position`) | 280 |

## Recetas

### Agregar un servicio o un material

Añadir un objeto al arreglo en `services.ts` / `materials.ts`. La retícula de la
portada, el índice, el pie, el buscador y el formulario se actualizan solos.
Para que salga en el mega-menú, agregar también su enlace en `navigation.ts`.

### Agregar un proyecto

Añadir un objeto a `projects.ts`. Genera la tarjeta en `/proyectos` y su página
en `/proyectos/<slug>`. `categorySlug` debe coincidir con el `slug` de un
servicio para que aparezca en «Trabajos de este servicio».

### Cambiar una imagen

1. Guardar el archivo en `sitio/public/img/` (JPG/WebP, ~2400 px de ancho).
2. En `src/data/images.ts`, cambiar el `src` de la entrada:

```ts
heroInterior: {
  src: "/img/hero-interior.jpg",
  alt: "Interior tapizado en negro con costuras hechas a mano",
  position: "center 65%",   // opcional: encuadre del recorte
},
```

Los colores de material (`variants[].tone` en `materials.ts`) son chips de color
en HEX, no imágenes: se editan a mano.

### Cambiar datos de contacto / WhatsApp

Todo en `site.ts`. Ver la lista de pendientes en [[proyecto-velara]].
