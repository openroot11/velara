---
titulo: Mapa del vault
tags: [indice, moc]
---

# 00 · Mapa del vault VELARA

Nota índice. Todo cuelga de aquí. En Obsidian, `Ctrl+O` para saltar a cualquier
nota y `Ctrl+Shift+F` para buscar texto en todo el vault.

## Notas

- [[info-velara]] — datos de la empresa: contacto, dirección, horario, servicios
- [[proyecto-velara]] — qué es el proyecto, en qué estado está, qué falta
- [[manual-de-marca]] — plataforma de marca, voz y tono, uso del logo, fotografía, aplicaciones
- [[identidad-visual]] — paleta, tipografía, logo, gestos de diseño
- [[arquitectura-web]] — stack, rutas, estructura de carpetas del sitio
- [[contenido-editable]] — dónde se edita cada texto (guía de `src/data/*.ts`)
- [[referencia-spradling]] — el sitio en el que se modeló todo
- [[glosario]] — términos del oficio y del proyecto

## Prompts

- [[prompt-estetica-spradling|Prompt · estética Spradling]] — prompt reutilizable de diseño

## Archivos fuera del vault de notas (pero dentro de la carpeta)

| Ruta | Qué es |
|---|---|
| `sitio/` | El sitio web (código React + Vite). Ver [[arquitectura-web]] |
| `sitio/README.md` | Documentación oficial del sitio — la fuente más completa |
| `referencia-spradling/GUIA-SPRADLING.md` | Análisis largo de la referencia. Ver [[referencia-spradling]] |
| `referencia-spradling/capturas/` | 30+ capturas de la referencia + `design-tokens.json` |
| `referencia-spradling/capturas-full/` | Capturas de página completa de la referencia |
| `referencia-spradling/prompts/` | Prompts de diseño reutilizables |
| `referencia-spradling/scripts/` | Scripts de scraping usados para el análisis |

## Cómo mantener esto

- Una nota = un tema. Enlaza con `[[nombre-de-nota]]`.
- Si creas un enlace a una nota que aún no existe, Obsidian la marca en gris:
  es una tarea pendiente, no un error.
- Cuando cambies algo en el código que estas notas describan, actualiza la nota.
