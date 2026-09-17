import type { ImageKey } from "./images";

/** Una aplicación concreta dentro de un servicio (fila alterna en su página). */
export interface ServiceApplication {
  /** Ancla en la URL: /servicios/<slug>#<id> */
  id: string;
  title: string;
  body: string;
  image: ImageKey;
}

export interface Service {
  index: string;
  /** Viaja en /cotizar?servicio=... — no lo cambie sin actualizar los enlaces. */
  slug: string;
  title: string;
  /** Etiqueta corta para menús y migas de pan. */
  menuLabel: string;
  /** Bajo el título en la retícula de la portada. */
  scope: string;
  /** Frase de una línea para tarjetas y encabezados. */
  tagline: string;
  /** Descripción breve (tarjetas). */
  description: string;
  /** Párrafo de entrada de la página del servicio. */
  standfirst: string;
  image: ImageKey;
  heroImage: ImageKey;
  /** Lo que entra en el trabajo. */
  deliverables: string[];
  /** Ficha rápida del servicio. */
  facts: { label: string; value: string }[];
  /** Sub-aplicaciones — se listan como filas alternas en la página. */
  applications: ServiceApplication[];
}

/**
 * Los cuatro oficios del taller. Agregar un quinto no exige tocar layout:
 * la retícula de la portada, el índice de /servicios, la columna del pie y la
 * lista del formulario leen todos de este arreglo.
 */
export const services: Service[] = [
  {
    index: "01",
    slug: "tapizado-automotriz",
    title: "Tapizado automotriz",
    menuLabel: "Tapizado automotriz",
    scope: "Carros · camionetas · flotas",
    tagline: "El interior completo, rehecho a la medida del vehículo.",
    description:
      "Sillas, paneles, techos y timones. Patronaje a la medida del vehículo y costura que respeta el diseño original.",
    standfirst:
      "Rehacemos interiores de carro sin adaptar patrones genéricos: cada silla, panel y techo se traza sobre la pieza real del vehículo. Igualamos hilos, pasos de costura y perforaciones al diseño de fábrica, y conservamos lo que todavía sirve. Trabajamos autos particulares, camionetas de trabajo y flotas enteras.",
    image: "svcAutomotriz",
    heroImage: "svcAutomotriz",
    deliverables: [
      "Diagnóstico superficie por superficie",
      "Patronaje sobre el vehículo, sin moldes universales",
      "Espumas nuevas donde la original ya no aguanta",
      "Costura igualada al diseño de fábrica",
      "Registro fotográfico del proceso",
    ],
    facts: [
      { label: "Tiempo típico", value: "1 a 3 semanas" },
      { label: "Materiales", value: "Cuero · vinilo técnico · Alcántara · telas técnicas" },
      { label: "Cobertura", value: "Taller en Barranquilla · vamos a medir en el área metropolitana" },
      { label: "Garantía", value: "12 meses en costura y material" },
    ],
    applications: [
      {
        id: "sillas",
        title: "Sillas y asientos",
        body: "Desde una silla del conductor gastada hasta el juego completo. Reconstruimos espuma, forma y forro, con doble pespunte en las zonas de más roce.",
        image: "transformDetail",
      },
      {
        id: "paneles",
        title: "Paneles y tableros",
        body: "Paneles de puerta, apoyabrazos y molduras forrados en el mismo material y acabado de las sillas, para que el interior lea como un conjunto.",
        image: "procCraft",
      },
      {
        id: "cielos",
        title: "Cielos y techos",
        body: "El calor del Caribe despega el cielo de fábrica. Lo rehacemos en material tratado, tensado sobre la estructura original sin arrugas ni caídas.",
        image: "procRestore",
      },
      {
        id: "timones",
        title: "Timones y consolas",
        body: "Forrado de timón, palanca y freno de mano en cuero cosido a mano, con la costura marcada donde va el agarre.",
        image: "craftHands",
      },
      {
        id: "flotas",
        title: "Flotas y vehículos de trabajo",
        body: "Un patrón maestro sobre el primer vehículo, probado en servicio, y luego la producción en serie por lotes para no parar la operación.",
        image: "projCamioneta",
      },
    ],
  },
  {
    index: "02",
    slug: "tapizado-de-motos",
    title: "Tapizado de motos",
    menuLabel: "Tapizado de motos",
    scope: "Sillines · asientos · maletas",
    tagline: "Un sillín que aguanta el sol, la lluvia y los kilómetros.",
    description:
      "Reconstruimos el sillín desde la base: espuma, forma y material tratado para aguantar sol, lluvia y kilómetros.",
    standfirst:
      "Quien trabaja en moto pasa más horas sentado que un oficinista, y con mucho peor asiento. Reconstruimos el sillín desde la base — espuma en dos densidades, forma corregida y material tratado contra el sol — y resolvemos maletas y baúles en el mismo acabado. También restauramos sillines de motos clásicas con el patrón de época.",
    image: "svcMoto",
    heroImage: "svcMoto",
    deliverables: [
      "Perfilado de espuma en dos densidades para repartir el peso",
      "Forro en material tratado contra rayos UV",
      "Costura sellada para que no entre agua",
      "Anclajes reforzados sobre la base original",
      "Prueba en calle antes de la entrega",
    ],
    facts: [
      { label: "Tiempo típico", value: "3 a 7 días" },
      { label: "Materiales", value: "Vinilo náutico · cuero · espuma de alta densidad · hilo encerado" },
      { label: "Cobertura", value: "Recepción en el taller · servicio para talleres de motos" },
      { label: "Garantía", value: "12 meses en costura y material" },
    ],
    applications: [
      {
        id: "sillines",
        title: "Sillines individuales",
        body: "El caso más común: sillín roto o duro. Rehacemos la base, corregimos la forma para que reparta el peso y forramos en material antideslizante tratado.",
        image: "projMoto",
      },
      {
        id: "biplaza",
        title: "Asientos biplaza",
        body: "Asiento corrido o en dos alturas, con costura de contraste o al tono. Igualamos el material del sillín del piloto y del parrillero.",
        image: "svcMoto",
      },
      {
        id: "maletas",
        title: "Baúles y maletas",
        body: "Juego de maletas laterales y top case cosidas a mano en el mismo acabado del sillín, con refuerzos internos y cierre sellado.",
        image: "motoSaddlebags",
      },
      {
        id: "reparto",
        title: "Motos de reparto",
        body: "Para quien vive sobre la moto: sillín de jornada larga, material fácil de limpiar y costura que no se abre con el uso diario.",
        image: "motoDelivery",
      },
      {
        id: "clasicas",
        title: "Restauración de clásicas",
        body: "Sillines de moto de época rehechos con el perfil original, tachuelas incluidas, sobre base nueva para que la pieza vuelva a montarse.",
        image: "craftTools",
      },
    ],
  },
  {
    index: "03",
    slug: "carpas-para-negocio",
    title: "Carpas y toldos para negocio",
    menuLabel: "Carpas y toldos",
    scope: "Toldos · cubiertas · terrazas",
    tagline: "Lona técnica cortada, reforzada y montada a la medida del local.",
    description:
      "Lona técnica cortada y reforzada a la medida. Medimos en su local, confeccionamos con refuerzos y montamos para que aguante a la intemperie.",
    standfirst:
      "Cubrir una terraza o dar sombra a una vitrina no es poner una lona encima: es resolver por dónde corre el agua, dónde se puede anclar y cómo se tensa para que aguante el viento. Medimos en el local, patronamos los paños con solapes calculados, confeccionamos con costura doble sellada y cinchas de refuerzo, y montamos.",
    image: "svcCarpas",
    heroImage: "svcCarpas",
    deliverables: [
      "Visita al local y levantamiento de medidas reales",
      "Patronaje de los paños con caída de agua calculada",
      "Costura doble sellada y cinchas de refuerzo en cada línea de tensión",
      "Ojales de bronce y herrajes tratados",
      "Montaje, tensado punto por punto e instrucciones por temporada",
    ],
    facts: [
      { label: "Tiempo típico", value: "2 a 4 semanas" },
      { label: "Materiales", value: "Lona acrílica · lona de PVC · cincha de refuerzo · herrajes de bronce" },
      { label: "Cobertura", value: "Barranquilla y municipios cercanos · visita de medición sin costo" },
      { label: "Garantía", value: "24 meses en costura · según fabricante en la lona" },
    ],
    applications: [
      {
        id: "fachada",
        title: "Toldos de fachada",
        body: "Sombra para la vitrina sin tapar el aviso. Toldo fijo o retráctil de proyección corta, montado por encima de la línea del letrero.",
        image: "projLocal",
      },
      {
        id: "terraza",
        title: "Carpas para terraza",
        body: "Cubierta completa para no cerrar la terraza en invierno. Varios paños con solapes, faldones laterales desmontables cuando no llueve.",
        image: "projCarpa",
      },
      {
        id: "cubiertas",
        title: "Cubiertas y lonas",
        body: "Lonas de camión, cobertores de bodega, cerramientos de patio. Cortadas y reforzadas para el uso real, no medidas de catálogo.",
        image: "matCanvas",
      },
      {
        id: "cerramientos",
        title: "Cerramientos y faldones",
        body: "Paneles laterales en lona translúcida o cristal flexible para cerrar el local en temporada de lluvia sin perder luz.",
        image: "awningNight",
      },
      {
        id: "mantenimiento",
        title: "Mantenimiento y retensado",
        body: "Revisión de carpas ya instaladas: retensado, cambio de cinchas, sellado de costuras y limpieza sin dañar el tratamiento.",
        image: "svcCarpas",
      },
    ],
  },
  {
    index: "04",
    slug: "forros",
    title: "Forros a la medida",
    menuLabel: "Forros a la medida",
    scope: "Sillas · muebles · equipos",
    tagline: "Nada universal: el patrón se levanta sobre la pieza real.",
    description:
      "Forros con patrón propio para cada pieza. Nada universal: se corta sobre la medida real del objeto.",
    standfirst:
      "El forro universal nunca queda: hace bolsas, se sale y se rompe por el mismo sitio. Levantamos el patrón sobre el objeto real — una silla, un sofá, un equipo, el asiento de un carro — y confeccionamos en tela técnica con cremallera para poder sacarlo y lavarlo. Cuando son varios iguales, producimos en serie con un patrón maestro.",
    image: "svcForros",
    heroImage: "svcForros",
    deliverables: [
      "Patrón levantado sobre la pieza, no adaptado",
      "Tela técnica transpirable o impermeable según el uso",
      "Cremallera reforzada para quitar y lavar sin desmontar",
      "Malla en las zonas de contacto para que no se acumule el calor",
      "Juego de repuesto opcional",
    ],
    facts: [
      { label: "Tiempo típico", value: "3 días a 2 semanas" },
      { label: "Materiales", value: "Tela técnica transpirable · vinilo · malla · cremallera reforzada" },
      { label: "Cobertura", value: "Recepción en el taller · recogida para lotes" },
      { label: "Garantía", value: "6 meses en costura y cremallera" },
    ],
    applications: [
      {
        id: "sillas",
        title: "Forros de sillas",
        body: "Sillas de comedor, de oficina o de carro. Patrón ajustado a la forma real, con caída limpia y sin bolsas.",
        image: "svcForros",
      },
      {
        id: "muebles",
        title: "Fundas de muebles",
        body: "Sofás, poltronas y camas. Fundas desmontables que protegen del sol y las mascotas y se lavan en casa.",
        image: "procPattern",
      },
      {
        id: "equipos",
        title: "Cobertores de equipos",
        body: "Cobertores a la medida para maquinaria, motos, parrillas o equipos a la intemperie, en lona tratada con ojales y cordón.",
        image: "motosParqueadas",
      },
      {
        id: "serie",
        title: "Forros en serie",
        body: "Flotas y salas de espera: un patrón maestro probado en servicio y luego la producción de todos los juegos, idénticos entre sí.",
        image: "projFlota",
      },
      {
        id: "nauticos",
        title: "Forros náuticos",
        body: "Cojinería y cobertores de lancha en vinilo náutico y espuma de célula cerrada, resistente al agua salada y al sol directo.",
        image: "projTaxi",
      },
    ],
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
