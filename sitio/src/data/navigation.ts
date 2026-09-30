/**
 * Árbol de navegación — la única fuente de verdad para:
 *   · el mega-menú del encabezado (desktop)
 *   · el menú acordeón (móvil)
 *   · el mapa del sitio del buscador
 *   · las columnas del pie
 *
 * Para agregar o quitar una sección, edite `mainNav`. Nada más en el código
 * arma menús por su cuenta.
 */

export interface NavLink {
  label: string;
  to: string;
  /** Descripción corta — se muestra en el mega-menú y en el buscador. */
  description?: string;
}

export interface NavColumn {
  /** Encabezado de la columna (en color acento). */
  label: string;
  /** Opcional: el encabezado de la columna también es un enlace. */
  to?: string;
  links: NavLink[];
}

export interface NavFeature {
  label: string;
  to: string;
  blurb: string;
}

export interface NavItem {
  label: string;
  /** Si se define y no hay columnas, es un enlace directo. */
  to?: string;
  /** Estilo del desplegable. */
  layout?: "mega" | "list";
  columns?: NavColumn[];
  /** Fila inferior del mega-menú (estilo «COLECCIONES / BIBLIOTECA»). */
  feature?: NavFeature[];
}

export const mainNav: NavItem[] = [
  {
    label: "Servicios",
    to: "/servicios",
    layout: "mega",
    columns: [
      {
        label: "Forros para carros",
        to: "/servicios/forros-para-carros",
        links: [
          { label: "Asientos delanteros", to: "/servicios/forros-para-carros#delanteros" },
          { label: "Banca trasera", to: "/servicios/forros-para-carros#traseros" },
          { label: "Timón y palanca", to: "/servicios/forros-para-carros#volante" },
          { label: "Juego completo", to: "/servicios/forros-para-carros#juego-completo" },
          { label: "Flotas y taxis", to: "/servicios/forros-para-carros#flotas" },
        ],
      },
      {
        label: "Tapizado automotriz",
        to: "/servicios/tapizado-automotriz",
        links: [
          { label: "Sillas y asientos", to: "/servicios/tapizado-automotriz#sillas" },
          { label: "Paneles y tableros", to: "/servicios/tapizado-automotriz#paneles" },
          { label: "Cielos y techos", to: "/servicios/tapizado-automotriz#cielos" },
          { label: "Timones y consolas", to: "/servicios/tapizado-automotriz#timones" },
          { label: "Flotas de trabajo", to: "/servicios/tapizado-automotriz#flotas" },
        ],
      },
      {
        label: "Tapizado de motos",
        to: "/servicios/tapizado-de-motos",
        links: [
          { label: "Sillines individuales", to: "/servicios/tapizado-de-motos#sillines" },
          { label: "Asientos biplaza", to: "/servicios/tapizado-de-motos#biplaza" },
          { label: "Baúles y maletas", to: "/servicios/tapizado-de-motos#maletas" },
          { label: "Motos de reparto", to: "/servicios/tapizado-de-motos#reparto" },
          { label: "Restauración de clásicas", to: "/servicios/tapizado-de-motos#clasicas" },
        ],
      },
      {
        label: "Carpas y toldos",
        to: "/servicios/carpas-para-negocio",
        links: [
          { label: "Toldos de fachada", to: "/servicios/carpas-para-negocio#fachada" },
          { label: "Carpas para terraza", to: "/servicios/carpas-para-negocio#terraza" },
          { label: "Cubiertas y lonas", to: "/servicios/carpas-para-negocio#cubiertas" },
          { label: "Cerramientos y faldones", to: "/servicios/carpas-para-negocio#cerramientos" },
          { label: "Mantenimiento y retensado", to: "/servicios/carpas-para-negocio#mantenimiento" },
        ],
      },
      {
        label: "Forros para muebles y equipos",
        to: "/servicios/forros",
        links: [
          { label: "Forros de sillas", to: "/servicios/forros#sillas" },
          { label: "Fundas de muebles", to: "/servicios/forros#muebles" },
          { label: "Cobertores de equipos", to: "/servicios/forros#equipos" },
          { label: "Forros en serie", to: "/servicios/forros#serie" },
          { label: "Forros náuticos", to: "/servicios/forros#nauticos" },
        ],
      },
    ],
    feature: [
      {
        label: "Ver todos los servicios",
        to: "/servicios",
        blurb: "Los cinco oficios del taller, con sus tiempos y materiales.",
      },
      {
        label: "¿No sabe cuál es el suyo?",
        to: "/cotizar",
        blurb: "Cuéntenos qué hay que cubrir y lo revisamos con usted.",
      },
    ],
  },
  {
    label: "Materiales",
    to: "/materiales",
    layout: "mega",
    columns: [
      {
        label: "Cueros",
        to: "/materiales?familia=cueros",
        links: [
          { label: "Plena flor", to: "/materiales/cuero-plena-flor" },
          { label: "Semianilina", to: "/materiales/cuero-semianilina" },
          { label: "Nobuck y ante", to: "/materiales/ante" },
        ],
      },
      {
        label: "Vinilos y cuerinas",
        to: "/materiales?familia=vinilos",
        links: [
          { label: "Cuerina técnica", to: "/materiales/vinilo-tecnico" },
          { label: "Vinilo náutico", to: "/materiales/vinilo-nautico" },
          { label: "Microfibra Alcántara", to: "/materiales/alcantara" },
        ],
      },
      {
        label: "Exteriores",
        to: "/materiales?familia=exteriores",
        links: [
          { label: "Lona acrílica", to: "/materiales/lona-acrilica" },
          { label: "Lona de PVC", to: "/materiales/lona-pvc" },
          { label: "Telas técnicas", to: "/materiales/telas-tecnicas" },
        ],
      },
      {
        label: "Herrajes e hilos",
        to: "/materiales?familia=herrajes",
        links: [
          { label: "Hilo encerado", to: "/materiales/hilo-encerado" },
          { label: "Cremalleras y broches", to: "/materiales/herrajes" },
        ],
      },
    ],
    feature: [
      {
        label: "Ver catálogo completo",
        to: "/materiales",
        blurb: "Todos los materiales con su ficha técnica y sus usos.",
      },
      {
        label: "Pedir muestras físicas",
        to: "/cotizar",
        blurb: "Le llevamos las muestras al taller o a su local antes de cortar.",
      },
    ],
  },
  {
    label: "Nosotros",
    to: "/nosotros",
    layout: "list",
    columns: [
      {
        label: "El taller",
        links: [
          { label: "Quiénes somos", to: "/nosotros", description: "El oficio, el equipo y cómo trabajamos." },
          { label: "Por qué VELARA", to: "/nosotros#por-que", description: "Lo que nos diferencia de un tapicero de esquina." },
          { label: "El proceso", to: "/proceso", description: "De la consulta a la entrega, paso a paso." },
          { label: "Trabaja con nosotros", to: "/nosotros#empleo", description: "Buscamos manos con oficio." },
        ],
      },
    ],
  },
  {
    label: "Recursos",
    to: "/recursos",
    layout: "list",
    columns: [
      {
        label: "Guías y consulta",
        links: [
          { label: "Guía de cuidado del cuero", to: "/recursos/cuidado-del-cuero", description: "Limpieza, hidratación y qué no hacer." },
          { label: "Cómo medir su vehículo", to: "/recursos/como-medir", description: "Lo que necesitamos para cotizar sin verlo." },
          { label: "Preguntas frecuentes", to: "/recursos/preguntas-frecuentes", description: "Tiempos, precios, garantía y traslados." },
          { label: "Glosario de materiales", to: "/recursos/glosario", description: "Plena flor, semianilina, denier, hidrófugo…" },
        ],
      },
    ],
    feature: [
      {
        label: "Ver todos los recursos",
        to: "/recursos",
        blurb: "Guías de cuidado, fichas y respuestas, en un solo lugar.",
      },
    ],
  },
  {
    label: "Proyectos",
    to: "/proyectos",
    layout: "list",
    columns: [
      {
        label: "Por oficio",
        links: [
          { label: "Todos los trabajos", to: "/proyectos" },
          { label: "Forros para carros", to: "/proyectos?categoria=forros-para-carros" },
          { label: "Tapizado automotriz", to: "/proyectos?categoria=tapizado-automotriz" },
          { label: "Tapizado de motos", to: "/proyectos?categoria=tapizado-de-motos" },
          { label: "Carpas y toldos", to: "/proyectos?categoria=carpas-para-negocio" },
          { label: "Forros para muebles y equipos", to: "/proyectos?categoria=forros" },
        ],
      },
    ],
  },
  {
    label: "Contacto",
    to: "/contacto",
  },
];

/** Aplana el árbol a una lista de enlaces — para el buscador y el mapa del sitio. */
export interface FlatEntry {
  label: string;
  to: string;
  section: string;
  description?: string;
}

export const navIndex: FlatEntry[] = mainNav.flatMap((item) => {
  const entries: FlatEntry[] = [];
  if (item.to) entries.push({ label: item.label, to: item.to, section: item.label });
  item.columns?.forEach((col) => {
    if (col.to) entries.push({ label: col.label, to: col.to, section: item.label });
    col.links.forEach((l) =>
      entries.push({ label: l.label, to: l.to, section: item.label, description: l.description }),
    );
  });
  item.feature?.forEach((f) =>
    entries.push({ label: f.label, to: f.to, section: item.label, description: f.blurb }),
  );
  return entries;
});
