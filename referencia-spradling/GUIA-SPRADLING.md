# Guía de referencia — Sitio Spradling / Proquinal (LATAM)

URL analizada: `https://lat.spradling.group/es-la`
Fecha de captura: 2026-09-10 · Navegador: Brave (motor Chromium) vía automatización
Todas las capturas están en la carpeta `capturas/`.

---

## 1. Qué es esta página

Sitio corporativo + catálogo de un fabricante de **telas recubiertas / vinilos técnicos y pisos**
(PVC, poliuretano) para industria: transporte, mobiliario (contract), marina, calzado y
marroquinería, protección, construcción y salud. No es e‑commerce: el objetivo es **mostrar
producto, generar contacto y dirigir a distribuidores**.

Stack aparente: React (SPA, rutas `/es-la/...`), imágenes/documentos servidos desde
`static.spradling.group`. Cookie banner tipo OneTrust. Chat flotante ("José") abajo a la derecha.
Marca doble en el header: logo **PROQUINAL®** + bajada "MIEMBRO DE SPRADLING GROUP".

---

## 2. Sistema de marca y diseño (design tokens)

### Tipografía
| Uso | Fuente | Peso | Notas |
|---|---|---|---|
| Titulares / display (h1, h2, nombres de producto, títulos de sección) | **Dala Moa** | 500 / 700 | Serif de alto contraste, elegante. Da toda la "personalidad". Tamaños grandes (h2 ≈ 60px / line-height 72px). |
| Texto corrido, navegación, botones, labels, tablas | **Gramatika** | 300 / 400 / 500 / 700 / 900 (+ itálicas) | Grotesca geométrica. Body 16px / line-height 24px. Nav 16px peso 500. |
| Fallbacks presentes en CSS | Gill Sans, Eternate, Poppins, Helvetica Neue | — | Secundarias/legacy. Para replicar basta Dala Moa + Gramatika. |
| Iconos | FontAwesome, `slick` (carrusel), `spglobal`/`spglobal` (iconos propios) | — | |

El contraste **serif display + grotesca de texto** es la firma tipográfica. Ej. hero:
línea 1 "Lo que hacemos hoy" en Gramatika light, línea 2 "trasciende al mañana." en Dala Moa bold.
Los títulos de sección llevan un **subrayado corto centrado** (regla de ~40px bajo el texto).

### Paleta
| Rol | HEX | Dónde |
|---|---|---|
| Tinta / texto principal | `#212529` | todo el body |
| Negro UI (header, footer botones) | `#000000` / `#0A0A0A` | barra de navegación superior |
| Gris oscuro (footer) | `#282828` | fondo del footer |
| Blanco | `#FFFFFF` | fondo general, megamenú |
| **Teal Spradling (primario)** | `#046E70` (≈ `#007B80`) | bandas de sección, panel de contacto, botón "Enviar", badge "Nuevo", CTA sólidos |
| **Teal brillante (acento/hover)** | `#04A0A4` | icono de búsqueda activo, subrayado de nav activa, hover de enlaces del megamenú |
| Verde EcoSense | `#00866F` | solo en la sección Sostenibilidad / EcoSense (submarca) |
| Crema / tarjeta | `#F9F8F5` | fondo de tarjetas de segmento y de "leer más" |
| Gris fila de tabla | `#F1F2F3` | filas alternas de la ficha técnica |
| Gris texto secundario | `#777777` / `#9B9B9B` | subtítulos, metadatos ("6 colors", "Cliente:") |
| Rosa de sección | `#FCD8E0` | barra "Somos Spradling" en la página Nosotros (acento decorativo) |

### Botones
- **Pill (cápsula) 100% redondeado**, sin borde, padding generoso. Variantes:
  - Blanco sobre imagen (hero): fondo `#FFF`, texto tinta.
  - Teal sólido (`#046E70`) texto blanco → CTA principal ("Enviar", "Quiero saber más").
  - Contorno fino ("Descargar imágenes / Descargar PDF") sobre blanco.
- **Enlace‑acción**: texto + chevron `›` o flecha `→` ("Ver mas ›", "VER MÁS →", "VER TODAS →").
- El `border-radius` global del sitio es `0` salvo en los pills; las tarjetas son rectas.

### Layout / grid
- Ancho de contenido centrado (~1140–1280px) con mucho aire; secciones full‑bleed para imágenes y bandas de color.
- Rejillas de **3 columnas** (segmentos, proyectos) y **3–4 columnas** (catálogo, recursos, productos relacionados).
- Bandas de color teal a **sangre completa** entre bloques blancos para separar secciones.
- Formas curvas/diagonales teal superpuestas a las imágenes hero (páginas de Mercado y Proyectos).
- Header **fijo (sticky)**: transparente/negro sobre el hero, se vuelve negro sólido al hacer scroll.

---

## 3. Arquitectura de navegación (todas las "ventanas de botones")

### Header (fijo, siempre visible)
`Logo` · **Productos** · **Nosotros** · **Recursos** · **Proyectos** · **Sostenibilidad** · **Contacto** · separador · **Dónde comprar** · **🔍 búsqueda**

| Botón | Acción | Destino / contenido | Captura |
|---|---|---|---|
| **Logo PROQUINAL** | link | Home `/es-la` | `01-home`, `30-home-limpio` |
| **Productos** | abre **megamenú** al hover | `/es-la/productos` (catálogo) | `02-menu-productos`, `08/31-catalogo`, `09-sector` |
| **Nosotros** | link directo (sin dropdown) | `/es-la/acerca-de/somos-spradling` | `10-nosotros-somos-spradling` |
| **Recursos** | link directo | `/es-la/biblioteca-documentos` ("Información de productos") | `11-recursos-biblioteca` |
| **Proyectos** | link directo | `/es-la/proyectos` | `12-proyectos` |
| **Sostenibilidad** | link directo | `/es-la/acerca-de/ecosense` | `13-sostenibilidad-ecosense` |
| **Contacto** | link directo | `/es-la/contacto` | `14-contacto` |
| **Dónde comprar** | link directo | `/es-la/donde-comprar` (mapa) | `16-donde-comprar` |
| **🔍** | despliega input **"BUSCAR"** de ancho completo dentro de la barra negra; el icono se pone teal | overlay de búsqueda | `19-busqueda` |

### Megamenú de "Productos" (`02-menu-productos`)
Panel blanco full‑width. **7 columnas** = mercados, cada una con encabezado teal en mayúsculas y sub‑enlaces grises:

1. **Construcción y agroindustria** → `/mercados/construccion-agroinsdustria` · sub: Agroindustria y Contención
2. **Contract** → `/mercados/contract` · sub: Espacios públicos, Hotelería, Lugar de trabajo, Muebles para exteriores, Residencial, Salud
3. **Calzado y marroquinería** → `/mercados/calzado-marroquineria` · sub: Calzado, Marroquinería
4. **Marina** → `/mercados/marina` · sub: Exterior, Interior
5. **Protección** → `/mercados/proteccion` · sub: Carpas/Toldos/Lonas, Forros de protección, Ropa de protección, Vestuario
6. **Transporte** → `/mercados/transporte` · sub: automóviles, Buses Escolares, Camiones, Caravanas y autocaravanas, Deportes Motorizados, Motocicletas, Transporte Masivo, Vehículos Industriales
7. **Soluciones para la Industria Médica** → sitio externo `healthcaresolutions.spradling.group`

Debajo, franja divisoria y **2 bloques promocionales** con título teal:
- **COLECCIONES** — "Conoce todas las colecciones que tenemos en Spradling." → `/es-la/productos`
- **BIBLIOTECA DE DOCUMENTOS** — → `/es-la/productos/biblioteca-documentos`

Cada sub‑enlace de mercado va a `/es-la/productos?sector=<base64>` (filtra el catálogo).
El `sector` es un id en Base64, p. ej. `U2VjdG9yTm9kZTozNg==` = `SectorNode:36` = **automóviles**.
IDs vistos: 32 Transporte masivo · 33 Marroquinería · 35 Marina interior · 36 automóviles · 37 Residencial ·
39 Deportes motorizados · 40 Camiones · 41 Salud · 42 Hotelería · 43 Espacios públicos · 44 Lugar de trabajo ·
45 Vestuario · 47 Agroindustria · 48 Vehículos industriales · 49 Buses escolares · 50 Caravanas ·
51 Motocicletas · 53 Calzado · 54 Forros · 55 Carpas · 56 Ropa de protección · 57 Muebles exteriores · 58 Marina exterior.

### Footer (todas las páginas, fondo `#282828`)
- **Columna 1** — selector de región: Spradling® LATAM / MÉXICO / USA / MARINE / RESOURCES / EUROPE + bloque **CALYPSO** ("Nuestras Tiendas en Colombia y Costa Rica" · VER MÁS →).
- **Columna 2** — Preguntas, Quejas y Reclamos (`/contacto/pqrs`) · Política de privacidad · Línea Ética (PDF) · Ingreso proveedores.
- **Columna 3** — NEWSLETTER: input "Tu correo" + botón pill negro **Suscribirme**.
- **Columna 4** — REDES SOCIALES: Facebook, Instagram, Linkedin (con iconos).
- Barra inferior: logo PROQUINAL en gris + "©2026 SPRADLING® GROUP".

### Menú móvil (`36-mobile-menu`)
Hamburguesa → overlay blanco a pantalla completa, ítems en teal, con **"+"** expandible en
**Productos** y **Nosotros** (los que tienen subniveles). El resto son enlaces directos.
Catálogo móvil (`37/38`): rejilla de **2 columnas**, filtro colapsado en un botón **"Filtrar"**.

---

## 4. Plantillas de página (tipos de "ventana")

### A. Home (`01`, `30`)
1. **Hero carrusel** full‑bleed (video/imagen), titular mixto serif+grotesca, subtítulo, 1 pill CTA, dots de paginación.
2. Párrafo introductorio + pill "Descubre más".
3. **"Nuestra Experiencia"** — grid 3×3 de tarjetas de mercado: imagen arriba, título serif, texto, pill "Quiero saber más", fondo crema `#F9F8F5`.
4. **"Lo más reciente"** — tarjetas de blog/noticias con etiqueta "LATAM" y "VER MÁS →" (1 grande + varias chicas, una en teal).
5. **"Nuestras creaciones"** — banda teal con proyecto destacado (Cliente / Sector) + "VER TODAS →".
6. Footer.

### B. Catálogo de productos (`08`, `31`, `09`, `34`)
- Título serif ("Catálogo de productos y características" o el nombre del sector, p. ej. *automóviles*, en minúsculas).
- **Rail de filtros a la izquierda**: buscador "Buscar por nombre", "Filtrar" / "Remover todo", acordeones: **Sectores, Diseño, Composición, Color, Características, Marcas**.
- **Grid 3 columnas** (2 en móvil) de tarjetas de material: swatch (foto de la textura), badge **"Nuevo"** (teal, esquina), nombre, y "N colors". Skeletons grises mientras carga / scroll infinito.
- Footer.

### C. Ficha de producto / colección (`27`, `32`, `33`)
- **Hero full‑bleed con la textura del material** de fondo; nombre en Dala Moa grande, color/variante debajo, badge "Nuevo", pill "Contáctanos para solicitar catálogo".
- **Fila de swatches de color** con su nombre (ALMENDRA, AVELLANA, AVENA…).
- Nota legal en cursiva sobre fidelidad de color en pantalla.
- Botones contorno **"Descargar imágenes"** y **"Descargar PDF"**.
- **Ficha técnica**: tabla con Peso, Ancho, Longitud del rollo, Composición (PVC), Calibre.
- **Acordeones**: Base textil · Retardantes al fuego · Otros Atributos · Pruebas Adicionales · Términos y condiciones (abren sub‑tablas norma/resultado).
- **"Productos relacionados"** — grid igual al del catálogo.
- Footer.

### D. Página de Mercado (`20`–`23`)
- Hero: imagen + **forma curva/diagonal teal** superpuesta + título serif encima.
- Banda teal con párrafo introductorio.
- **Filas alternas en zig‑zag** (imagen full‑bleed a un lado / texto al otro): subtítulo serif + párrafo + pill "ver más" por cada subsegmento.
- Footer.

### E. Nosotros (`10`)
- Hero oscuro (planta industrial) + título serif.
- **Barra rosa `#FCD8E0`** con la etiqueta de sección "Somos Spradling".
- "El hogar de la manufactura": 2 tarjetas de planta (Colombia / Costa Rica) con pill "Conocer más".
- "Lo que somos, creemos y hacemos": manifiesto centrado, lista de frases.
- **"Hacemos historia"**: línea de tiempo vertical, **años en Dala Moa gigante** alternando izq/der con hito + descripción (1959 → 2024).
- Footer.

### F. Sostenibilidad / EcoSense (`13`) — submarca con identidad propia
- Logo **eco/sense** con hoja; verde `#00866F` en vez de teal.
- Bloques de video con botón play circular grande, ilustraciones de línea dibujadas a mano.
- Paneles verdes con datos ("+800 paneles solares"), carruseles con flechas.
- Iconos de los **ODS de la ONU**, tabs de "Certificaciones de excelencia" (ISO 50001/14001/45001, Carbon Neutral), sellos Great Place To Work.
- CTA pill "Informe de Sostenibilidad 2024 (PDF)".

### G. Recursos / "Información de productos" (`11`)
- Título serif centrado + subrayado.
- Grid 4 columnas de tarjetas crema: imagen + título (Manuales, Guías de producto, Manejo de reclamos, Políticas, …) + "Ver mas ›".

### H. Proyectos (`12`)
- Hero imagen + forma teal + título "Conoce nuestras creaciones".
- Banda teal introductoria.
- Grid 3 columnas de proyectos: imagen + título serif + "**Cliente:** X". Paginación numérica.

### I. Contacto (`14`)
- Hero imagen; **panel teal `#046E70` superpuesto** con formulario (inputs blancos): Nombre, Apellido, Correo, Teléfono, Dirección, Sector (select), Tipo de compañía (select), Mensaje (textarea), checkbox "He leído y acepto la Política de privacidad", pill **Enviar**.
- Bloque serif "**Llámanos**" con tarjetas de oficina (Colombia / Costa Rica: dirección, teléfono, email).

### J. Dónde comprar (`16`)
- Banda teal + título "Encuentra nuestros distribuidores".
- **Google Maps** full‑width con tarjeta oscura superpuesta: "¿Qué tipo de búsqueda quieres hacer?" → 2 botones negros redondeados **"Por ubicación"** / **"Por producto"**.

### K. Páginas legales / PQRS (`25`, `26`)
Layout simple: título serif + contenido a una columna + footer.

---

## 5. Micro‑interacciones y detalles a replicar
- Header sticky que cambia de transparente a negro al scrollear; subrayado teal bajo el ítem activo/hover.
- Megamenú a ancho completo con fade‑in al hover.
- Badge "Nuevo" en pastilla teal, esquina superior derecha de cada swatch.
- Skeleton loaders grises + carga progresiva (scroll infinito) en el catálogo.
- Botón de búsqueda que "expande" un input dentro de la propia barra.
- Chat widget flotante circular abajo‑derecha.
- Títulos de sección siempre centrados con regla corta debajo.
- Imágenes a sangre; texto en contenedor centrado y angosto.
- Cursivas de Dala Moa / Gramatika para notas legales y acentos.

---

## 6. Inventario de capturas (`capturas/`)
| Archivo | Contenido |
|---|---|
| `01-home.png` / `30-home-limpio.png` | Home completo (con y sin banner de cookies) |
| `02-menu-productos.png` | Megamenú Productos desplegado |
| `03..07-menu-*.png` | Hover sobre Nosotros/Recursos/Proyectos/Sostenibilidad/Contacto (sin dropdown → confirman que son enlaces directos) |
| `08-productos.png` / `31-catalogo-limpio.png` | Catálogo general |
| `09-productos-sector36.png` | Catálogo filtrado por sector "automóviles" (la URL que enviaste) |
| `34-catalogo-filtros-abiertos.png` | Catálogo con todos los acordeones de filtro abiertos |
| `10-nosotros-somos-spradling.png` | Página Nosotros (timeline incluida) |
| `11-recursos-biblioteca.png` / `24-*` | Recursos / "Información de productos" |
| `12-proyectos.png` | Proyectos |
| `13-sostenibilidad-ecosense.png` | Sostenibilidad / EcoSense |
| `14-contacto.png` | Contacto (formulario + Llámanos) |
| `16-donde-comprar.png` | Mapa de distribuidores |
| `19-busqueda.png` | Overlay de búsqueda desplegado |
| `20..23-mercado-*.png` | Páginas de mercado: Transporte, Contract, Marina, Protección |
| `25-pqrs.png` / `26-politica-privacidad.png` | Páginas legales |
| `27-detalle-coleccion.png` / `32-detalle-limpio.png` | Ficha de producto (BATAN CR3) |
| `33-detalle-acordeon-abierto.png` | Ficha con acordeones de especificación abiertos |
| `35-mobile-home.png` | Home en móvil (390px) |
| `36-mobile-menu.png` | Menú hamburguesa |
| `37-mobile-menu-productos.png` / `38-mobile-catalogo.png` | Catálogo en móvil |
| `design-tokens.json` | Volcado de fuentes, colores y estilos computados |
