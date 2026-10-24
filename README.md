# VELARA — repositorio organizado

Este repositorio se reorganizó por propósito para evitar mezclar:
- la web comercial,
- los activos de marca,
- la documentación del proyecto,
- los recursos de referencia,
- y el contenido legacy.

## Estructura actual

```text
velara/
├── README.md
├── app/
│   ├── README.md
│   └── sitio/
│       └── README.md
├── brand/
│   ├── README.md
│   └── identidad-visual/
│       └── README.md
├── docs/
│   ├── README.md
│   ├── brief/
│   │   └── README.md
│   └── notas/
├── references/
│   ├── README.md
│   └── spradling/
│       └── README.md
├── archive/
│   └── README.md
├── sitio/
│   └── (sitio activo, mantenido por compatibilidad temporal)
├── notas/
├── VELARA_BRIEF_MEJORAS_CLAUDE.md
├── dossier-velara.md
├── VELARA_IDENTIDAD_VISUAL/
├── referencia-spradling/
└── MANU/
```

## Cómo interpretar la estructura

- `app/`: sitio web y lógica funcional.
- `brand/`: identidad visual, logo, paleta, recursos de marca.
- `docs/`: estrategia, brief, notas, specs y documentación operativa.
- `references/`: benchmark visual, análisis de sitios, inspiración.
- `archive/`: archivos antiguos o legacy que ya no son la base activa.
- `sitio/`: se mantiene por compatibilidad mientras la organización final se consolida.

## Regla de mantenimiento

- Si es funcional/ejecutable: va a `app/`.
- Si es marca o diseño: va a `brand/`.
- Si es contenido o estrategia: va a `docs/`.
- Si es benchmark o inspiración: va a `references/`.
- Si es viejo o de referencia histórica: va a `archive/`.

## Qué sigue

La limpieza completa real consiste en mover los activos actuales a estas carpetas y dejar la raíz solo como puerta de entrada.

Mientras tanto, esta estructura ya dejó el repositorio ordenado por intención de uso y deja el proyecto más mantenible.
