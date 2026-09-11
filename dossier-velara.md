# VELARA — Dossier de contexto

> Documento único y autocontenido para cargar como **conocimiento de proyecto**
> en un proyecto de claude.ai. Resume el vault de Obsidian de `valera/`.
> Generado el 2026-09-10. Fuente: carpeta `notas/` + `referencia-spradling/`.
> Si el vault cambia, regenerar este archivo.

---

## 1 · Qué es VELARA

Taller de cuero y tapicería en **Barranquilla, Colombia**. Fundado en **2009**.
Razón social: VELARA Taller S.A.S.

**Servicios:**
- Tapizado automotriz y de motos (asientos, paneles, cielos, consolas)
- Carpas y toldos de lona para negocios
- Forros a la medida (muebles, asientos, equipos)
- Catálogo de materiales (lonas, vinilos, cuero sintético)

**No es tienda en línea.** El objetivo del sitio es mostrar el trabajo y **llevar
a la persona a pedir una cotización por WhatsApp**. El recorrido es:
botón → página `/cotizar` → abre WhatsApp con el mensaje ya escrito.

La estructura y la estética están modeladas sobre el sitio corporativo de
**Spradling / Proquinal** (ver §7).

---

## 2 · Estado del proyecto

- Sitio web funcional, hecho con React + Vite (código en `sitio/`).
- **El contenido es provisional:** textos de relleno realistas e imágenes de
  archivo de Unsplash. No son trabajos reales del taller todavía.

**Pendientes antes de publicar** (viven en `sitio/src/data/site.ts`):
- Número de WhatsApp real (hoy `573000000000`, de ejemplo)
- Teléfono, correo, dirección, horario reales
- Enlaces de redes reales
- Fotos reales del taller (reemplazar las de Unsplash)
- Logo vectorial del diseñador
- Revisar textos de servicios, materiales, proyectos y recursos

---

## 3 · Plataforma de marca *(borrador — por validar con el dueño)*

**Esencia:** oficio hecho a mano con acabado de catálogo. Un taller de barrio que
trabaja con la seriedad de una casa de diseño. Se ve la mano —costura, corte,
material— pero el resultado es impecable.

**Promesa (por validar):** trabajo de tapicería hecho a mano, con acabado de
catálogo y trato directo con quien lo hace.

**Atributos de personalidad (por validar):**

| Atributo | En la práctica |
|---|---|
| Artesanal | Se ve la mano. Nada de «fabricado en serie» |
| Confiable | Años de oficio, plazos que se cumplen, garantía por escrito |
| Sobrio | Estética editorial, sin estridencias; el trabajo habla |
| Cercano | Taller de barrio, se habla por WhatsApp, sin corporativismo |
| Técnico | Fichas, especificaciones, nombres correctos de los materiales |

**Público:** dueños de vehículo o moto que quieren renovar tapicería; negocios
que necesitan carpas, toldos o forros a la medida. Valoran el acabado y quieren
tratar con un taller serio, no con un intermediario.

---

## 4 · Voz y tono *(borrador — por validar)*

- **Idioma:** español de Colombia. Trato de **usted**.
- **Registro:** claro y directo, sin relleno. Muestra de tono ya escrita:
  *«Trabajos nuevos, guías de cuidado y avisos de disponibilidad de materiales.
  Un correo al mes, sin relleno.»*
- **Frases de acción:** imperativo corto — «Solicitar cotización», «Ver más →»,
  «Más información». Enlaces secundarios en VERSALITAS con flecha.
- **Sí:** nombres correctos del oficio (cielo, forro a la medida, lona náutica);
  cifras concretas (años, plazos, medidas); una idea por frase.
- **No:** superlativos vacíos («los mejores», «calidad insuperable»); tecnicismo
  de agencia; signos de admiración en cadena; emojis en textos del sitio.

---

## 5 · Identidad visual

Fuente de verdad en código: `sitio/tailwind.config.js`.

### Paleta

| Token | HEX | Uso |
|---|---|---|
| `ink` | `#1B1B1B` | Texto, encabezado, pie. Variantes 900–600 |
| `paper` | `#FFFFFF` | Fondo del sitio |
| `paper.50` | `#FAF9F7` | Paneles claros |
| `paper.100` / `paper.200` | `#F3F2EF` / `#E7E5E0` | Paneles y bordes suaves |
| `smoke` | `#6E6E6E` | Texto secundario |
| `smoke.line` | `#E2E0DB` | Filetes y bordes |
| `accent` | `#0E7C7C` | Verde azulado (teal). Títulos grandes, filetes, marcadores. Contraste 4.8:1 sobre blanco |
| `accent.deep` | `#0A5A5A` | El único que pasa AA en texto pequeño sobre blanco (7.6:1) |
| `accent.soft` | `#5AA9A9` | El válido sobre fondo `ink` (6.3:1) |
| `accent.pale` | `#E3F0F0` | Fondos teñidos muy claros |

**Regla de oro:** el acento es acento, **nunca el color dominante**. Encabezado y
pie son `ink`; casi todo lo demás es `paper` con paneles `paper.50`.

### Tipografía

- **Display / títulos:** **Fraunces** (serif de alto contraste), con `SOFT`/`WONK`
  a 0 para que lea clásica. Vía Google Fonts.
- **Texto e interfaz:** **Manrope**. Vía Google Fonts.
- Escala: clases `text-display-xl … text-display-sm` + `overline`.
- **Gesto firma:** títulos de sección **centrados con un filete corto debajo**.
- Enlaces de acción secundarios en mayúsculas pequeñas con flecha: `VER MÁS →`.

### Formas y movimiento

- Todo de esquinas rectas **salvo los botones**, que son píldora 100 % redondeada.
- Bandas de color teal a sangre completa entre bloques blancos.
- Framer Motion + Lenis (scroll suave). Todo respeta `prefers-reduced-motion`.

### Logotipo

Vive en `sitio/src/components/ui/Logo.tsx` (marca felina SVG de trazo único +
wordmark) y `sitio/public/favicon.svg`. Falta el vector del diseñador.

---

## 6 · Brief del logo (para IA de diseño)

**Concepto:** un **felino de trazo único y continuo** —una sola línea que no se
levanta— sereno y elegante, de línea limpia. Evoca a la vez el animal (cuero,
piel) y la precisión del oficio. Dibujado a mano alzada pero resuelto con
exactitud geométrica.

**Wordmark:** «VELARA» en mayúsculas, serif display de alto contraste (tipo
Playfair Display / Prata), peso medio.

**Color:** un solo color. Principal negro `#1B1B1B` sobre blanco; también versión
blanco sobre negro.

**Requisitos:** fondo plano, sin degradados, sin sombras, sin 3D. Grosor de línea
constante. Legible a 16 px. Versión con wordmark y versión de solo el símbolo.

**Evitar:** mascota caricaturesca, gato tierno, degradados, más de un color,
tipografía decorativa/manuscrita, iconos genéricos de sofá, aguja o silla.

---

## 7 · Referencia — Spradling / Proquinal

VELARA está modelado sobre el sitio corporativo de **Spradling / Proquinal
(LATAM)**: `https://lat.spradling.group/es-la`. Análisis completo en
`referencia-spradling/GUIA-SPRADLING.md` (con 30+ capturas).

### Lo que se copió

- Sitio de varias páginas con navegación profunda: mega-menús, páginas por
  «carpetas», migas de pan, buscador que es a la vez mapa del sitio.
- Contraste tipográfico serif display + grotesca de texto como firma.
- Fondo blanco, tinta casi negra, un solo acento teal, encabezado negro, pie oscuro.
- Títulos de sección centrados con filete corto debajo.
- Botones pill; el resto de esquinas rectas.
- Rejillas de 3 columnas; bandas teal a sangre completa entre bloques blancos.
- Plantillas: Home, Catálogo con filtros, Ficha de producto, Página de
  mercado/servicio (filas zig-zag), Nosotros (línea de tiempo con años gigantes),
  Proyectos.

### Tipografía de la referencia

| Uso | Tipo | Detalle |
|---|---|---|
| Titulares / display | **Dala Moa** | Serif de alto contraste. Pesos 500/700. Foundry: Blaze Type. De pago |
| Texto, nav, botones, tablas | **Gramatika** | Grotesca geométrica. Pesos 300–900 + itálicas. Body 16/24. Foundry: atipo. De pago |

VELARA **no** usa esas (son de pago): replica la lógica con Fraunces + Manrope,
gratuitas de Google Fonts.

### Diferencias deliberadas de VELARA

- Taller local, no fabricante: el objetivo es cotización por WhatsApp, no
  distribuidores.
- Sin selector de región, sin submarca, sin e-commerce.
- Paleta y tipografía propias (misma lógica, distintos tipos).

---

## 8 · Arquitectura del sitio (resumen)

- **Stack:** Vite 5 · React 18 + TypeScript · Tailwind CSS 3 · Framer Motion 11 ·
  Lenis · React Router 6.
- **Correr:** `cd sitio && npm install && npm run dev` (localhost:5173).
  `npm run build` genera `/dist`. Node 18+.
- **Rutas:** `/`, `/servicios`, `/servicios/:slug`, `/materiales`,
  `/materiales/:slug`, `/nosotros`, `/proceso`, `/recursos`, `/recursos/:slug`,
  `/proyectos`, `/proyectos/:slug`, `/cotizar`, `/contacto`, `*` (404).
- **Deploy:** SPA estático, publicar `/dist`. Config lista para Netlify y Vercel.

### Contenido editable

Todo en `sitio/src/data/`:

| Archivo | Qué controla |
|---|---|
| `site.ts` | Nombre, WhatsApp, teléfono, correo, dirección, horario, redes, legales, boletín |
| `navigation.ts` | El árbol de menús (mega-menú, acordeón móvil, mapa del buscador, pie) |
| `services.ts` | Los 4 servicios |
| `materials.ts` | El catálogo de materiales (alimenta los filtros) |
| `recursos.ts` | Artículos de Recursos (cuerpo por bloques) |
| `projects.ts` | Proyectos + su página propia |
| `process.ts` | Las seis etapas de «De la idea al taller» |
| `testimonials.ts` | Testimonios de la portada |
| `images.ts` | Registro central de imágenes (clave → src, alt, position) |

Imágenes nuevas: guardar en `sitio/public/img/` y cambiar el `src` en `images.ts`.

---

## 9 · Glosario

**Del proyecto:**
- **VELARA** — la marca / el taller
- **Embudo de cotización** — el recorrido botón → `/cotizar` → WhatsApp
- **Design token** — valor de diseño con nombre (color, tamaño) definido una vez
  en `tailwind.config.js`
- **Slug** — el trozo de URL que identifica una página (`/materiales/lona-nautica`)
- **Full-bleed / a sangre** — elemento que ocupa todo el ancho de la ventana

**Del oficio:**
- **Tapizado automotriz** — renovar asientos, paneles, cielos y consolas de un vehículo
- **Cielo / techo interior** — el forro de la parte de arriba de la cabina
- **Forro a la medida** — cubierta hecha a medida para un mueble, asiento o equipo
- **Carpa / toldo** — estructura de lona para un local o negocio
- **Lona** — tela recia y recubierta, resistente a la intemperie
- **Vinilo / cuero sintético** — material de PVC o poliuretano que imita cuero
