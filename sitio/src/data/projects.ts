import type { ImageKey } from "./images";

export interface ProcessStep {
  index: string;
  title: string;
  body: string;
  image: ImageKey;
}

export interface Project {
  slug: string;
  /** Qué se trabajó: un carro, una moto, una terraza, un lote de piezas. */
  subject: string;
  /** Etiqueta visible del oficio, p. ej. "Tapizado automotriz". */
  category: string;
  /** Slug del servicio al que pertenece — filtra la galería y las páginas de servicio. */
  categorySlug: string;
  /** Título del trabajo, p. ej. "Tapizado completo". */
  title: string;
  location: string;
  /** Peso visual en la retícula editorial de la portada. */
  size: "hero" | "tall" | "wide" | "regular";
  cover: ImageKey;
  /** Frase que aparece al pasar el cursor en la galería. */
  teaser: string;
  /** Texto de entrada en la página del proyecto. */
  intro: string;
  /** Ficha técnica del trabajo. */
  facts: { label: string; value: string }[];
  /** Las seis etapas, ajustadas a cada proyecto. */
  process: ProcessStep[];
  gallery: ImageKey[];
}

type StepKey = "diag" | "measure" | "design" | "craft" | "assembly" | "detail";

/**
 * Las seis etapas por las que pasa todo trabajo. Cada proyecto reescribe el
 * texto - y donde hace falta, la imagen - de las etapas que se salen del guion.
 */
const baseProcess = (
  over: Partial<Record<StepKey, string>> = {},
  imgs: Partial<Record<StepKey, ImageKey>> = {},
): ProcessStep[] => [
  {
    index: "01",
    title: "Revisión",
    body:
      over.diag ??
      "Revisamos cada superficie, anotamos los daños y definimos qué se conserva y qué se rehace.",
    image: imgs.diag ?? "procDiagnosis",
  },
  {
    index: "02",
    title: "Medición",
    body:
      over.measure ??
      "Desmontaje ordenado y toma de medidas. Cada pieza se marca y se guarda para el montaje.",
    image: imgs.measure ?? "procStrip",
  },
  {
    index: "03",
    title: "Patronaje",
    body:
      over.design ??
      "Trazamos el patrón sobre el material y lo probamos en la pieza antes de dar el primer corte.",
    image: imgs.design ?? "procPattern",
  },
  {
    index: "04",
    title: "Confección",
    body:
      over.craft ??
      "Corte y costura a la medida. Igualamos hilos, pasos de costura y perforaciones al diseño de la pieza.",
    image: imgs.craft ?? "procCraft",
  },
  {
    index: "05",
    title: "Montaje",
    body:
      over.assembly ??
      "Instalación con ajuste de tensiones, holguras y alineación de todas las líneas.",
    image: imgs.assembly ?? "procAssembly",
  },
  {
    index: "06",
    title: "Entrega",
    body:
      over.detail ??
      "Limpieza final, revisión a contraluz y entrega con el registro fotográfico del proceso.",
    image: imgs.detail ?? "procDetail",
  },
];

export const projects: Project[] = [
  {
    slug: "camioneta-de-trabajo-tapizado-completo",
    subject: "Camioneta de trabajo",
    category: "Tapizado automotriz",
    categorySlug: "tapizado-automotriz",
    title: "Tapizado completo",
    location: "Barranquilla",
    size: "hero",
    cover: "projCamioneta",
    teaser: "Ocho años de sol y polvo recuperados silla por silla.",
    intro:
      "Una camioneta de trabajo con ocho años encima y todos los kilómetros a la vista: sillas descosidas, espumas hundidas y el techo despegado por el calor. Rehicimos el interior completo en vinilo técnico, conservando lo que todavía servía y cambiando sólo lo que ya no aguantaba otra temporada.",
    facts: [
      { label: "Pieza", value: "Camioneta doble cabina" },
      { label: "Trabajo", value: "Sillas, paneles y techo" },
      { label: "Duración", value: "3 semanas" },
      { label: "Materiales", value: "Vinilo técnico · espuma de alta densidad · hilo encerado" },
    ],
    process: baseProcess(
      {
        diag:
          "El calor había despegado el techo y hundido las espumas. Anotamos pieza por pieza qué se recuperaba y qué se rehacía desde cero.",
        craft:
          "Corte y costura de sillas, paneles de puerta y techo en vinilo técnico, con doble pespunte en las zonas de más roce.",
      },
      { craft: "procRestore" },
    ),
    gallery: ["projCamioneta", "svcAutomotriz", "matVinyl", "transformDetail", "craftHands", "procCraft"],
  },
  {
    slug: "moto-de-reparto-sillin-a-la-medida",
    subject: "Moto de reparto",
    category: "Tapizado de motos",
    categorySlug: "tapizado-de-motos",
    title: "Sillín a la medida",
    location: "Barranquilla",
    size: "tall",
    cover: "projMoto",
    teaser: "Un sillín que aguanta diez horas diarias de calle.",
    intro:
      "Quien trabaja en moto pasa más horas sentado que un oficinista, y con mucho peor asiento. Reconstruimos el sillín en dos densidades de espuma para repartir el peso, lo forramos en material tratado contra el sol y añadimos un juego de maletas cosidas a mano en el mismo acabado.",
    facts: [
      { label: "Pieza", value: "Moto de reparto" },
      { label: "Trabajo", value: "Sillín y maletas" },
      { label: "Duración", value: "1 semana" },
      { label: "Materiales", value: "Material tratado contra UV · espuma en dos densidades · hilo encerado" },
    ],
    process: baseProcess(
      {
        diag:
          "Hablamos con el conductor antes que con la moto: dónde le dolía después de la jornada y en qué parte se estaba rompiendo el forro.",
        craft:
          "Perfilado de la espuma en dos densidades para repartir el peso y forrado en material tratado contra el sol.",
        assembly:
          "Montaje sobre la base original con anclajes reforzados y prueba en calle antes de la entrega.",
      },
      { diag: "motoDelivery", craft: "procRestore", assembly: "motoSaddlebags" },
    ),
    gallery: ["projMoto", "svcMoto", "motoSaddlebags", "motoDelivery", "matLeather", "craftTools"],
  },
  {
    slug: "terraza-de-restaurante-carpa-y-toldos",
    subject: "Terraza de restaurante",
    category: "Carpas y toldos",
    categorySlug: "carpas-para-negocio",
    title: "Carpa y toldos",
    location: "Barranquilla",
    size: "wide",
    cover: "projCarpa",
    teaser: "Una cubierta completa para no cerrar la terraza en invierno.",
    intro:
      "El encargo era fácil de enunciar y exigente de resolver: cubrir una terraza irregular sin perder luz ni cerrar la fachada. Medimos en el local, desarrollamos una cubierta de lona técnica en tres paños con refuerzos en cada punto de tensión y resolvimos los faldones laterales como piezas aparte, desmontables cuando no llueve.",
    facts: [
      { label: "Pieza", value: "Terraza de 46 m²" },
      { label: "Trabajo", value: "Carpa y toldos laterales" },
      { label: "Duración", value: "3 semanas" },
      { label: "Materiales", value: "Lona técnica tratada · cincha de refuerzo · ojales de bronce" },
    ],
    process: baseProcess(
      {
        diag:
          "Visita al local: medimos la terraza, miramos por dónde entra el sol y qué puntos de anclaje daba la fachada.",
        measure:
          "Levantamiento de medidas reales, no de plano. La terraza no era un rectángulo y la cubierta tampoco podía serlo.",
        design:
          "Patronaje de los tres paños en lona, con solapes calculados para que el agua siempre corra hacia el mismo lado.",
        craft:
          "Confección con costura doble sellada y cinchas de refuerzo cosidas en cada línea de tensión.",
        assembly:
          "Montaje sobre la estructura, tensado punto por punto y ajuste de los faldones desmontables.",
        detail:
          "Entrega con las indicaciones de tensado por temporada y cómo limpiar la lona sin dañar el tratamiento.",
      },
      { diag: "svcCarpas", measure: "svcCarpas", craft: "matCanvas", assembly: "awningNight", detail: "awningNight" },
    ),
    gallery: ["projCarpa", "awningNight", "matCanvas", "svcCarpas", "craftTools"],
  },
  {
    slug: "taxi-urbano-juego-de-forros",
    subject: "Taxi urbano",
    category: "Forros a la medida",
    categorySlug: "forros",
    title: "Juego de forros",
    location: "Barranquilla",
    size: "regular",
    cover: "projTaxi",
    teaser: "Forros desmontables para un carro que trabaja doce horas al día.",
    intro:
      "Un taxi entra y sale de servicio cientos de veces al día, y el forro es lo primero que se rinde. Levantamos el patrón sobre el propio carro y confeccionamos un juego en tela técnica, con cremallera para poder sacarlo y lavarlo sin desmontar nada.",
    facts: [
      { label: "Pieza", value: "Sedán de servicio público" },
      { label: "Trabajo", value: "Juego completo de forros" },
      { label: "Duración", value: "4 días" },
      { label: "Materiales", value: "Tela técnica transpirable · malla · cremallera reforzada" },
    ],
    process: baseProcess(
      {
        diag:
          "Miramos dónde se rompe primero un forro que aguanta cientos de entradas y salidas al día: el borde del asiento y el respaldo del conductor.",
        design:
          "Patrón levantado sobre el propio carro, con cremallera pensada para poder sacar el forro y lavarlo.",
        craft:
          "Confección en tela técnica transpirable, con malla en la zona de contacto para que el calor no se acumule.",
      },
      { diag: "transformBefore", craft: "svcForros", detail: "transformAfter" },
    ),
    gallery: ["projTaxi", "transformBefore", "transformAfter", "matFabric", "procPattern"],
  },
  {
    slug: "local-comercial-toldo-de-fachada",
    subject: "Local comercial",
    category: "Carpas y toldos",
    categorySlug: "carpas-para-negocio",
    title: "Toldo de fachada",
    location: "Barranquilla",
    size: "wide",
    cover: "projLocal",
    teaser: "Un toldo que da sombra a la vitrina sin tapar el aviso.",
    intro:
      "La vitrina recibía sol directo toda la tarde y la mercancía se estaba decolorando. El reto era dar sombra sin tapar el aviso ni oscurecer el local: resolvimos con un toldo de proyección corta en lona a rayas, montado por encima de la línea del letrero.",
    facts: [
      { label: "Pieza", value: "Fachada de 6 metros" },
      { label: "Trabajo", value: "Toldo fijo de proyección corta" },
      { label: "Duración", value: "2 semanas" },
      { label: "Materiales", value: "Lona a rayas tratada · estructura en aluminio · ojales de bronce" },
    ],
    process: baseProcess(
      {
        diag:
          "Estudiamos a qué hora pega el sol en la vitrina y hasta dónde tenía que llegar la sombra sin tapar el aviso.",
        measure:
          "Medición de la fachada y revisión de los anclajes: en obra vieja, dónde se puede taladrar decide el diseño.",
        craft:
          "Confección de la lona a rayas con dobladillo reforzado y ojales en toda la línea de tensión.",
        assembly:
          "Montaje de la estructura por encima de la línea del letrero y tensado de la lona.",
      },
      { diag: "svcCarpas", craft: "matCanvas", assembly: "projLocal", detail: "awningNight" },
    ),
    gallery: ["projLocal", "svcCarpas", "matCanvas", "awningNight", "procAssembly"],
  },
  {
    slug: "flota-de-reparto-forros-en-serie",
    subject: "Flota de reparto",
    category: "Forros a la medida",
    categorySlug: "forros",
    title: "Forros en serie",
    location: "Barranquilla",
    size: "regular",
    cover: "projFlota",
    teaser: "Catorce vehículos forrados pieza por pieza, con un mismo patrón.",
    intro:
      "Una flota de reparto que perdía sillas cada seis meses. Levantamos el patrón sobre el primer vehículo, lo probamos en servicio durante dos semanas y a partir de ahí produjimos los catorce juegos restantes en vinilo técnico, idénticos entre sí y desmontables para lavado.",
    facts: [
      { label: "Pieza", value: "14 vehículos" },
      { label: "Trabajo", value: "Forros en serie" },
      { label: "Duración", value: "6 semanas" },
      { label: "Materiales", value: "Vinilo técnico · malla transpirable · cremallera reforzada" },
    ],
    process: baseProcess(
      {
        diag:
          "Miramos el desgaste real de la flota: dónde se rompe primero una silla que recibe cuarenta entradas y salidas al día.",
        design:
          "Patrón maestro sobre el primer vehículo, probado en servicio durante dos semanas antes de replicarlo.",
        craft:
          "Producción de los catorce juegos con el mismo patrón y control de medidas pieza por pieza.",
        assembly:
          "Instalación por lotes para no parar la operación: dos vehículos por jornada, dentro del horario del cliente.",
      },
      { design: "procPattern", craft: "svcForros", assembly: "motosParqueadas" },
    ),
    gallery: ["projFlota", "svcForros", "matVinyl", "motosParqueadas", "procPattern"],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

/** Proyectos de un servicio, por su slug (p. ej. "tapizado-automotriz"). */
export const getProjectsByCategory = (categorySlug: string): Project[] =>
  projects.filter((p) => p.categorySlug === categorySlug);

export const getAdjacentProject = (slug: string): Project => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
