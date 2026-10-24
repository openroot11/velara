# VELARA — repositorio organizado

Este repositorio estaba mezclando varias cosas: branding, contenido de marketing, referencias visuales, notas de proyecto y el sitio web. Para dejarlo más claro, se creó una estructura base de trabajo y se documentó la limpieza propuesta.

## Estructura recomendada

```text
VELARA/
├── README.md
├── app/
│   └── sitio/
├── brand/
│   ├── identidad-visual/
│   ├── logo/
│   └── palette/
├── docs/
│   ├── brief/
│   ├── notas/
│   └── especificacion/
├── references/
│   ├── spradling/
│   └── inspiracion/
├── assets/
│   └── images/
├── archive/
│   └── legacy/
└── legacy-root-files/
    └── (archivos antiguos que quedaron fuera de la estructura)
```

## Qué se mantiene y qué se mueve

- `sitio/` → contenido del sitio web corporativo
- `brand/` → identidad visual, paleta, tipografía y recursos gráficos
- `docs/` → brief, especificaciones, notas de negocio y decisiones
- `references/` → inspiración visual, benchmarks y estudios de referencia
- `archive/` → archivos obsoletos o experimentales que ya no son activos

## Estado actual de la limpieza

La limpieza se está haciendo en rama de trabajo (`chore/organize-velara`).

- Se dejó una estructura base para que el repositorio tenga sentido.
- Los archivos viejos en la raíz aún pueden quedar temporalmente allí mientras se reorganiza el contenido completo.
- El objetivo es mover el contenido funcional a carpetas temáticas y dejar la raíz solo como punto de entrada.

## Recomendación práctica

Para terminar la organización real del repo, conviene:

1. Mover `sitio/` a `app/sitio/`.
2. Mover el material visual a `brand/`.
3. Mover briefing y documentos a `docs/`.
4. Mover referencias de benchmark a `references/`.
5. Dejar en `archive/` los archivos de pruebas, imágenes sueltas o copias viejas.

> Si quieres, el siguiente paso es mover los archivos reales del repositorio a esta estructura y dejarlo listo para uso y mantenimiento.
