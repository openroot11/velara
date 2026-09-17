# VELARA — Taller de cuero y tapicería

Sitio corporativo para un **taller de cuero y tapicería en Barranquilla**:
tapizado automotriz y de motos, carpas y toldos para negocio, forros a la medida
y un catálogo de materiales.

La estructura está modelada sobre el sitio de **Spradling / Proquinal**: un sitio
de varias páginas con navegación profunda y ordenada —mega-menús, páginas por
«carpetas», migas de pan y un buscador que es a la vez mapa del sitio—, fondo
blanco, acento verde azulado (teal) y encabezado negro.

Toda la interfaz está en español.

---

## Stack

| Pieza | Tecnología |
|---|---|
| Build | [Vite](https://vitejs.dev) 5 |
| UI | React 18 + TypeScript |
| Estilos | Tailwind CSS 3 (design tokens en `tailwind.config.js`) |
| Animación | Framer Motion 11 |
| Scroll suave | Lenis |
| Routing | React Router 6 |
| Tipografías | Fraunces (display) + Manrope (UI) vía Google Fonts |

---

## Puesta en marcha

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # genera /dist (tsc + vite build)
npm run preview    # sirve /dist en http://localhost:4173
```

> Requiere Node 18+ (probado con Node 24).

---

## Mapa del sitio (rutas)

```
/                       Portada
/servicios              Índice de servicios
/servicios/:slug        Página de servicio (aplicaciones, ficha, proyectos)
/materiales             Catálogo de materiales, con filtros
/materiales/:slug       Ficha de material (specs, acordeones, relacionados)
/nosotros               El taller · por qué VELARA · historia · empleo
/proceso                Las seis etapas, en detalle
/recursos               Guías, instructivos, preguntas frecuentes, glosario
/recursos/:slug         Artículo de recursos
/proyectos              Galería de trabajos, con filtro por oficio
/proyectos/:slug        Página del proyecto (proceso, ficha, galería)
/cotizar                Formulario de cotización → WhatsApp
/contacto               Datos del taller + formulario general → correo
```

Rutas desconocidas caen en la página 404, que lista las secciones.

---

## El embudo de cotización (sin cambios)

Sigue siendo la pieza de marketing del sitio y funciona igual que antes:

1. **Cada sección termina en un botón** que lleva a `/cotizar`.
2. Muchos botones llevan el servicio ya escogido: `/cotizar?servicio=carpas-para-negocio`.
3. **`/cotizar`** (`src/pages/Cotizar.tsx`) pide nombre, teléfono, servicio,
   sector y el detalle, valida en el navegador y arma el mensaje.
4. Al enviar, **abre WhatsApp con el mensaje ya escrito**. La página no manda
   nada por su cuenta: la persona lo revisa y decide. También hay un botón para
   copiar el mensaje.

### Configurar el número de WhatsApp

Está en un solo sitio, arriba de `src/data/site.ts`:

```ts
const WHATSAPP_NUMBER = "573000000000";   // formato internacional, sólo dígitos
```

> **Pendiente:** hoy es un número de ejemplo. Cámbielo antes de publicar, junto
> con el teléfono, el correo y la dirección del taller (todo en `site.ts`).

---

## Dónde vive el contenido

**Todo el contenido editable está en `src/data/`.** No hay que tocar componentes
para cambiar textos, agregar servicios o materiales, o publicar un proyecto.

| Archivo | Qué controla |
|---|---|
| `site.ts` | Nombre, WhatsApp, teléfono, correo, dirección, horario, redes, enlaces legales, texto del boletín |
| `navigation.ts` | **El árbol de menús.** Mega-menús del encabezado, acordeón móvil, mapa del buscador y columnas del pie leen todos de aquí |
| `services.ts` | Los 4 servicios: descripción, aplicaciones (filas alternas), entregables, ficha |
| `materials.ts` | El catálogo: familia, resumen, usos y propiedades (alimentan los filtros), ficha técnica, cuidado, colores |
| `recursos.ts` | Los artículos de Recursos. El cuerpo se arma con bloques (`p`, `h2`, `ul`, `note`, `qa`, `term`…) |
| `projects.ts` | Proyectos + su página propia (proceso, ficha, galería). `categorySlug` los asocia a un servicio |
| `process.ts` | Las seis etapas de «De la idea al taller» |
| `testimonials.ts` | Testimonios de la portada |
| `images.ts` | Registro central de imágenes — ver abajo |

### Agregar un servicio o un material

Añada un objeto al arreglo en `services.ts` / `materials.ts`. La retícula de la
portada, el índice, el pie, el buscador y el formulario se actualizan solos.
Para que aparezca en el mega-menú, agregue también su enlace en `navigation.ts`.

### Agregar un proyecto

Añada un objeto a `projects.ts`. Genera la tarjeta en `/proyectos` y su página
en `/proyectos/<slug>`. `categorySlug` debe coincidir con el `slug` de un
servicio para que salga en «Trabajos de este servicio».

---

## Imágenes

Todas las fotos se referencian por una clave en **`src/data/images.ts`**.
El set actual usa Unsplash y es **provisional**: son fotos de archivo, no
trabajos del taller. Para sustituirlas:

1. Guarde los archivos en `public/img/` (JPG/WebP, ~2400 px de ancho).
2. En `src/data/images.ts`, cambie el `src` de cada entrada:

```ts
heroInterior: {
  src: "/img/hero-interior.jpg",
  alt: "Interior tapizado en negro con costuras hechas a mano",
  position: "center 65%",   // opcional: encuadre del recorte
},
```

Los colores de los materiales (`variants[].tone` en `materials.ts`) se pintan
como chips de color, no son imágenes: son hex y se editan a mano.

---

## Identidad

### Paleta — tokens en `tailwind.config.js`

```
ink          #1B1B1B   (texto, encabezado, pie)
paper        #FFFFFF   (fondo)   · paper.50 #FAF9F7 (paneles)
smoke        #6E6E6E   (texto secundario) · smoke.line #E2E0DB (filetes)
accent       #0E7C7C   (verde azulado — filetes, títulos grandes, marcadores)
accent.deep  #0A5A5A   (el único que pasa AA en texto pequeño sobre blanco)
```

El acento es **acento**, nunca color dominante. El encabezado y el pie son
`ink`; casi todo lo demás es `paper` con paneles `paper.50`.

### Tipografía

Fraunces (serif de display, con `SOFT`/`WONK` a 0 para que lea clásica) y
Manrope (UI). Escala: clases `text-display-xl … text-display-sm` y `overline`.
Los títulos de sección van centrados con un filete corto debajo (`.rule-under`),
gesto tomado de la referencia.

### Logotipo

`src/components/ui/Logo.tsx` contiene la marca felina (`VelaraMark`, SVG de
trazo único) más el wordmark. Si tiene el vector del diseñador, reemplace los
`<path>` y el `public/favicon.svg`.

---

## Navegación

- **Encabezado (desktop):** barra negra fija. Al pasar el cursor sobre
  «Servicios» o «Materiales» baja un mega-menú a todo el ancho; «Nosotros»,
  «Recursos» y «Proyectos» abren una lista compacta.
- **Móvil:** menú a pantalla completa con acordeón (cada sección se abre con
  un «+»), como navegar entre carpetas.
- **Buscador (ícono de lupa):** overlay con el índice completo del sitio
  agrupado por sección; filtra sobre servicios, aplicaciones, materiales,
  proyectos y recursos.
- **Migas de pan** en cada página interna: «Inicio / Servicios / Tapizado
  automotriz».

---

## Animación y accesibilidad

- Todas las animaciones respetan `prefers-reduced-motion`.
- Añada `?nomotion` a la URL para ver el sitio estático (útil para QA y capturas).
- El menú móvil y el buscador bloquean el scroll con `setScrollLocked()`, que
  además detiene Lenis.
- El formulario de cotización valida en el navegador, marca los errores con
  `role="alert"` y `aria-describedby`, y al enviar con errores el foco salta al
  primer campo malo.

---

## Deploy

Es un SPA estático. `npm run build` y publique `/dist`.

- **Netlify**: incluido `public/_redirects` (fallback SPA).
- **Vercel**: incluido `vercel.json` (rewrites SPA).
- **Otro hosting**: sirva `/dist` y redirija todas las rutas a `index.html`.
