# Prompt de diseño — Estética "Spradling" (limpia, minimalista, premium industrial)

> Contexto: [[00-mapa]] · [[referencia-spradling]] · [[identidad-visual]]

> Copia y pega este prompt en Claude, ChatGPT, v0, Lovable, Figma AI o cualquier herramienta de generación de páginas. Sustituye los `[corchetes]` con los datos de tu marca.

---

## PROMPT

Diseña una página web para **[nombre de la marca]**, del sector **[sector]**, con una estética editorial limpia, minimalista y premium, inspirada en catálogos de diseño de materiales de alta gama. La página debe transmitir solidez, trayectoria y sofisticación técnica sin sentirse fría. Sigue estas reglas al pie de la letra:

### 1. Concepto general
- Estilo: minimalismo editorial con aire de revista de diseño/arquitectura. Mucho espacio en blanco, pocas palabras, fotografía protagonista.
- Personalidad: sobria, confiable, artesanal-industrial. Nada de degradados llamativos, sombras fuertes, neones ni elementos decorativos innecesarios.
- La fotografía hace el trabajo emocional (texturas, materiales, espacios reales, personas trabajando); la interfaz se mantiene neutra y silenciosa alrededor de ella.

### 2. Paleta de colores (usar exactamente esta lógica)
- Fondo principal: blanco puro `#FFFFFF`.
- Fondo alternativo de secciones: blanco hueso cálido `#F9F8F5` y gris muy claro `#F1F1F1` (para tarjetas y bloques informativos).
- Texto principal: casi negro `#212529`; texto secundario gris `#777777`.
- Color de acento ÚNICO: un verde azulado profundo (petróleo) `#00575F`, usado con moderación en bandas destacadas de ancho completo y en alguna tarjeta resaltada, siempre con texto blanco encima.
- Footer: gris carbón oscuro `#282828` con texto blanco.
- Botones sólidos: negro `#141413` con texto blanco.
- Regla de oro: máximo un color de acento en toda la página. El resto es blanco/negro/grises cálidos.

### 3. Tipografía (el contraste tipográfico ES la identidad)
- Titulares de sección (H1/H2): una **serif display elegante de alto contraste** (estilo didona/editorial). Usar Playfair Display, Prata o Butler de Google Fonts. Peso 500, grande (48–60 px en desktop), en mayúscula inicial tipo título ("Somos…", "Nuestra Experiencia"), color negro sobre claro o blanco sobre foto/acento.
- Todo lo demás (párrafos, menús, botones, tarjetas, footer): una **sans-serif geométrica moderna** tipo Poppins o Jost. Cuerpo 16 px / interlineado 24 px, peso 400–500; subtítulos de tarjeta 24 px peso 700.
- Detalle firma: bajo cada titular serif, una **línea subrayado corta y fina** (≈80–140 px de ancho, 1–2 px de grosor, color del texto) centrada, como gesto editorial.
- Enlaces de acción secundarios en MAYÚSCULAS pequeñas con flecha: `VER MÁS →`, `QUIERO SABER MÁS →`.

### 4. Componentes
- **Header**: barra oscura (negra o sobre-foto con degradado sutil hacia transparente), logo a la izquierda, menú sans-serif en blanco de 6–7 ítems, un CTA textual a la derecha y un icono de búsqueda. Sin bordes ni sombras.
- **Hero**: carrusel/imagen fotográfica a sangre completa (full-bleed, sin márgenes), con un único CTA en forma de **píldora blanca** (border-radius completo) con texto oscuro. Indicadores de carrusel como puntos pequeños.
- **Botones primarios**: píldora negra sólida (`border-radius: 999px`), texto blanco 16 px, padding generoso (aprox. 12×32 px). Botones secundarios: píldora "ghost" con borde fino negro de 1 px sobre fondo claro.
- **Tarjetas**: imagen arriba (esquinas rectas o radio mínimo), sin sombra o con sombra apenas perceptible, fondo `#F9F8F5` o blanco, título sans bold, extracto gris de 2–3 líneas y enlace `VER MÁS →`. Grillas de 3 columnas en desktop, 1 en móvil.
- **Banda destacada**: sección de ancho completo dividida 50/50 — mitad fotografía, mitad bloque de color petróleo `#00575F` con titular serif blanco, metadatos en negrita ("Cliente:", "Sector:") y enlace en mayúsculas con flecha.
- **Footer**: fondo carbón, 4 columnas de enlaces en blanco/gris, bloque de newsletter con input gris de esquinas rectas y botón píldora negro, iconos de redes minimalistas, logo centrado al final con copyright pequeño.

### 5. Layout y espaciado
- Contenedor central de máx. 1140–1200 px; las fotos y bandas de color sí rompen el contenedor a ancho completo.
- Secciones muy aireadas: 90–120 px de padding vertical entre secciones.
- Texto introductorio de sección: párrafo centrado, máx. ~70 caracteres por línea, precedido por el titular serif con su subrayado.
- Ritmo de página: hero fotográfico → bloque "quiénes somos" centrado → grilla de tarjetas por segmento → grilla de novedades/blog → banda 50/50 con acento de color → footer oscuro.
- Esquinas: contenido rectangular (imágenes, inputs, tarjetas) contrastado con botones 100 % redondeados. Ese contraste recto/píldora es parte del estilo.

### 6. Lo que NO debe aparecer
- Ni degradados de colores, ni sombras duras, ni bordes gruesos, ni más de un color de acento.
- Ni tipografías decorativas adicionales: solo la serif display para titulares y la sans geométrica para todo lo demás.
- Ni iconografía ilustrada de colores: iconos lineales monocromos únicamente.
- Ni bloques con mucho texto: cada sección respira, con un titular, 2–4 líneas y un CTA.

Contenido a usar: **[pega aquí los textos/secciones de tu página]**.

---

## Referencia rápida (cheat sheet de la estética analizada)

| Elemento | Valor observado en lat.spradling.group |
|---|---|
| Serif display (titulares) | "Dala Moa" → sustituir por Playfair Display / Prata |
| Sans geométrica (todo lo demás) | "Gramatika" (similar a Poppins/Jost) |
| Cuerpo de texto | 16 px / 24 px de interlineado, peso 400–500 |
| H2 | 60 px / 72 px, peso 500 |
| Títulos de tarjeta | 24 px, peso 700 |
| Fondo | `#FFFFFF`, alterno `#F9F8F5` y `#F1F1F1` |
| Texto | `#212529` (principal), `#777777` (secundario) |
| Acento único | Petróleo `#00575F` |
| Footer | Carbón `#282828` |
| Botón primario | Píldora negra `#141413`, radio completo, texto blanco |
| Botón secundario | Píldora ghost con borde fino |
| Links de acción | MAYÚSCULAS + flecha → |
| Firma editorial | Subrayado corto y fino bajo cada titular serif |
| Imágenes | Full-bleed, esquinas rectas, fotografía de materiales/espacios reales |
