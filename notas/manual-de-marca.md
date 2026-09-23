---
titulo: Manual de marca
tags: [marca, identidad, moc]
---

# Manual de marca — VELARA

Nota paraguas de la marca. Aquí vive lo **estratégico y verbal**; lo **visual con
detalle técnico** (HEX, tipos, tokens) está en [[identidad-visual]]. Qué es el
negocio: [[proyecto-velara]]. De dónde sale la estética: [[referencia-spradling]].

> Estado: **borrador**. Las secciones marcadas «por validar» son propuestas a
> partir del material existente; hay que confirmarlas con el dueño del taller.
> Las marcadas «pendiente» aún no tienen contenido.

---

## 1 · Plataforma de marca

### Qué es VELARA

Taller de cuero y tapicería en Barranquilla (Colombia), fundado en 2009.
Tapizado automotriz y de motos, carpas y toldos para negocio, forros a la medida
y catálogo de materiales. No vende en línea: el sitio lleva a **pedir cotización
por WhatsApp**.

### Promesa · *por validar*

Trabajo de tapicería hecho a mano, con acabado de catálogo y trato directo con
quien lo hace.

### Atributos de personalidad · *por validar*

| Atributo | Qué significa en la práctica |
|---|---|
| **Artesanal** | Se ve la mano: costura, corte, material. Nada de «fabricado en serie» |
| **Confiable** | Años de oficio, plazos que se cumplen, garantía por escrito |
| **Sobrio** | Estética editorial, sin estridencias; el trabajo habla |
| **Cercano** | Taller de barrio, se habla por WhatsApp, sin corporativismo |
| **Técnico** | Fichas, especificaciones, nombres correctos de los materiales |

### Público

Dueños de vehículo o moto que quieren renovar tapicería; negocios que necesitan
carpas, toldos o forros a la medida. Valoran el acabado y quieren tratar con un
taller serio, no con un intermediario.

---

## 2 · Voz y tono · *por validar*

Cómo escribe VELARA en textos del sitio, WhatsApp, redes y papelería.

- **Idioma:** español de Colombia. Trato de **usted** (ya se usa así en el
  código: «Su correo», «edite estos valores»).
- **Registro:** claro y directo, sin relleno. Referencia de tono ya escrita:
  *«Trabajos nuevos, guías de cuidado y avisos de disponibilidad de materiales.
  Un correo al mes, sin relleno.»*
- **Frases de acción:** en imperativo corto — «Solicitar cotización»,
  «Ver más →», «Más información». Enlaces secundarios en versalitas con flecha.
- **Sí:** nombres correctos del oficio (cielo, forro a la medida, lona náutica);
  cifras concretas (años, plazos, medidas); una idea por frase.
- **No:** superlativos vacíos («los mejores», «calidad insuperable»); tecnicismo
  de agencia; signos de admiración en cadena; emojis en textos del sitio.

Glosario del oficio para mantener los términos: [[glosario]].

**Ejemplos** *(pendiente: redactar 3–4 pares antes/después de copy real —
mensaje de WhatsApp, titular de servicio, pie de foto, respuesta a reseña).*

---

## 3 · Identidad visual (resumen)

Detalle completo y fuente de verdad en código: [[identidad-visual]]
(`sitio/tailwind.config.js`).

| | |
|---|---|
| **Color** | Tinta `#1B1B1B` + papel `#FFFFFF` y grises cálidos. Un solo acento naranja `#FF5A1F`. Regla: el acento nunca domina |
| **Tipografía** | Fraunces (títulos, serif de alto contraste) + Manrope (texto e interfaz) |
| **Gesto firma** | Título de sección centrado con filete corto debajo |
| **Formas** | Todo recto salvo los botones, que son píldora 100 % redondeada |
| **Fotografía** | Protagonista, a sangre; la interfaz calla a su alrededor |

---

## 4 · Uso del logo · *pendiente*

Vive en `sitio/src/components/ui/Logo.tsx` (marca felina SVG + wordmark) y
`sitio/public/favicon.svg`. Falta el vector del diseñador.

Por definir: área de protección · tamaño mínimo · versiones (horizontal, solo
marca, monocromo, negativo) · fondos permitidos · usos incorrectos.

---

## 5 · Fotografía · *pendiente*

Hoy el sitio usa fotos de archivo de Unsplash (provisionales — ver pendientes en
[[proyecto-velara]]). Por definir la dirección de foto real del taller:

Qué fotografiar (material, manos trabajando, antes/después, taller, resultado
montado) · encuadre y luz · tratamiento (color, contraste) · qué evitar.

---

## 6 · Aplicaciones · *pendiente*

Marca aplicada fuera del sitio: firma de WhatsApp y correo · perfiles y
plantillas de Instagram/Facebook · rotulación y fachada del taller · cotización
y factura · tarjeta · garantía por escrito.

---

## Estado — qué falta

- [ ] Validar plataforma de marca (promesa, atributos) con el dueño
- [ ] Redactar voz y tono definitivos + ejemplos de copy
- [ ] Recibir el logo vectorial y escribir sus reglas de uso
- [ ] Definir dirección de fotografía y hacer la sesión real
- [ ] Definir aplicaciones y crear plantillas
