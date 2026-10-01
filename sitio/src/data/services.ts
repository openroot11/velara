import type { ImageKey } from "./images";

/** Una aplicación concreta dentro de un servicio (fila alterna en su página). */
export interface ServiceApplication {
  /** Ancla en la URL: /servicios/<slug>#<id> */
  id: string;
  title: string;
  body: string;
  image: ImageKey;
  /** Opcional: segunda foto que aparece al pasar el mouse (p. ej. el equipo sin forro). */
  hoverImage?: ImageKey;
  /** Etiquetas de la foto normal y de la que aparece al pasar el mouse. */
  hoverLabels?: [string, string];
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
 * Los cinco oficios del taller. Agregar uno más no exige tocar layout:
 * la retícula de la portada, el índice de /servicios, la columna del pie y la
 * lista del formulario leen todos de este arreglo.
 *
 * Orden pensado para Google Ads / SEO: los tres servicios que más venden
 * (forros para carros, tapizado automotriz, sillines de moto) van primero.
 */
export const services: Service[] = [
  {
    index: "01",
    slug: "forros-para-carros",
    title: "Forros para carros",
    menuLabel: "Forros para carros",
    scope: "Asientos · puertas · techo",
    tagline: "El forro que se ajusta a su carro, no al revés.",
    description:
      "Forros a la medida para asientos, puertas y techo. Patrón levantado sobre su carro — no una talla genérica de tienda — con entrega rápida.",
    standfirst:
      "Un forro de talla única nunca queda: hace bolsas en la espalda, se corre con el uso y tapa los controles. Levantamos el patrón sobre los asientos reales de su carro, cortamos y cosemos a la medida, y lo entregamos listo para instalar el mismo día, sin herramientas. Es la opción más rápida y económica para proteger o renovar el interior sin tocar la tapicería original.",
    image: "nvForroAsiento",
    heroImage: "nvAsientoCueroVw",
    deliverables: [
      "Patrón levantado sobre los asientos reales del carro",
      "Corte y costura en tela técnica o cuerina, a elección",
      "Cierres y elásticos ocultos para un ajuste limpio",
      "Aberturas para cinturón, airbag y consola sin tapar controles",
      "Instalación incluida el mismo día de entrega",
    ],
    facts: [
      { label: "Tiempo típico", value: "1 a 3 días" },
      { label: "Materiales", value: "Cuerina técnica · tela deportiva · neopreno · cuero" },
      { label: "Cobertura", value: "Recepción en el taller · servicio express en el día" },
      { label: "Garantía", value: "6 meses en costura y cierres" },
    ],
    applications: [
      {
        id: "delanteros",
        title: "Asientos delanteros",
        body: "Los que más se desgastan. Forro a la medida del respaldo y la silla, con aberturas para los controles laterales y el cinturón.",
        image: "nvAsientoGris",
      },
      {
        id: "traseros",
        title: "Banca trasera",
        body: "Silla corrida o dividida 60/40, con apertura para el pasador si su carro la tiene. Igualamos el material del juego delantero.",
        image: "svcForros",
      },
      {
        id: "volante",
        title: "Timón y palanca",
        body: "Funda de timón cosida a mano y forro de palanca en el mismo material del juego de asientos, para que el interior lea parejo.",
        image: "craftHands",
      },
      {
        id: "juego-completo",
        title: "Juego completo",
        body: "Sedán, camioneta o taxi: todo el interior en un solo pedido, con el mismo patrón y material para que no se note la diferencia entre piezas.",
        image: "nvForroVw",
      },
      {
        id: "flotas",
        title: "Flotas y taxis",
        body: "Un forro que aguanta el uso de servicio público: entradas y salidas todo el día, fácil de limpiar y rápido de reponer por unidad.",
        image: "matFabric",
      },
    ],
  },
  {
    index: "02",
    slug: "tapizado-automotriz",
    title: "Tapizado automotriz",
    menuLabel: "Tapizado automotriz",
    scope: "Carros · camionetas · flotas",
    tagline: "El interior completo, rehecho a la medida del vehículo.",
    description:
      "Sillas, paneles, techos y timones. Patronaje a la medida del vehículo y costura que respeta el diseño original.",
    standfirst:
      "Rehacemos interiores de carro sin adaptar patrones genéricos: cada silla, panel y techo se traza sobre la pieza real del vehículo. Igualamos hilos, pasos de costura y perforaciones al diseño de fábrica, y conservamos lo que todavía sirve. Trabajamos autos particulares, camionetas de trabajo y flotas enteras.",
    image: "nvTapiceriaVelara",
    heroImage: "nvCosturaRoja",
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
        image: "nvDetalleCostura",
      },
      {
        id: "paneles",
        title: "Paneles y tableros",
        body: "Paneles de puerta, apoyabrazos y molduras forrados en el mismo material y acabado de las sillas, para que el interior lea como un conjunto.",
        image: "realRestauracionPanel",
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
        image: "realRestauracionTimon",
      },
      {
        id: "flotas",
        title: "Flotas y vehículos de trabajo",
        body: "Un patrón maestro sobre el primer vehículo, probado en servicio, y luego la producción en serie por lotes para no parar la operación.",
        image: "realTapizadoFlota",
      },
    ],
  },
  {
    index: "03",
    slug: "tapizado-de-motos",
    title: "Tapizado de motos",
    menuLabel: "Tapizado de motos",
    scope: "Sillines · asientos · maletas",
    tagline: "Un sillín que aguanta el sol, la lluvia y los kilómetros.",
    description:
      "Reconstruimos el sillín desde la base: espuma, forma y material tratado para aguantar sol, lluvia y kilómetros.",
    standfirst:
      "Quien trabaja en moto pasa más horas sentado que un oficinista, y con mucho peor asiento. Reconstruimos el sillín desde la base — espuma en dos densidades, forma corregida y material tratado contra el sol — y resolvemos maletas y baúles en el mismo acabado. Atendemos todas las marcas y modelos, con más experiencia en las motos que más se mueven en Colombia: AKT, Bajaj, Yamaha, Honda y Suzuki. También restauramos sillines de motos clásicas con el patrón de época.",
    image: "realSillinCafeRacer",
    heroImage: "realSillinCafeRacer2",
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
      { label: "Marcas más atendidas", value: "AKT · Bajaj · Yamaha · Honda · Suzuki" },
      { label: "Cobertura", value: "Recepción en el taller · servicio para talleres de motos" },
      { label: "Garantía", value: "12 meses en costura y material" },
    ],
    applications: [
      {
        id: "sillines",
        title: "Sillines individuales",
        body: "El caso más común: sillín roto o duro, sea AKT, Bajaj, Yamaha, Honda, Suzuki o cualquier otra marca. Rehacemos la base, corregimos la forma para que reparta el peso y forramos en material antideslizante tratado.",
        image: "realSillinMotoRosa",
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
    index: "04",
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
    index: "05",
    slug: "forros",
    title: "Forros de protección para equipos",
    menuLabel: "Forros para equipos",
    scope: "Equipos médicos · audio · maquinaria",
    tagline: "Cada equipo, con su forro hecho a la medida.",
    description:
      "Forros de protección para equipos médicos, equipos de sonido y maquinaria, hechos sobre la medida real de cada pieza.",
    standfirst:
      "Un forro genérico no protege: queda flojo, se sale y deja pasar el polvo. Levantamos el patrón sobre el equipo real —una camilla, una consola de sonido, una máquina— y lo confeccionamos en el material que pide su uso: lavable para consultorios, acolchado para el transporte o impermeable para exteriores. Cuando son varios equipos iguales, los producimos en serie con un patrón maestro.",
    image: "nvForrosProteccion",
    heroImage: "nvForrosProteccion",
    deliverables: [
      "Patrón levantado sobre el equipo real, no adaptado",
      "Material según el uso: lavable, acolchado o impermeable",
      "Aberturas para cables, manijas y controles donde se necesiten",
      "Cremallera, velcro o cordón para poner y quitar sin esfuerzo",
      "Producción en serie para varios equipos iguales",
    ],
    facts: [
      { label: "Tiempo típico", value: "3 días a 2 semanas" },
      { label: "Materiales", value: "Vinilo lavable · lona impermeable · acolchado · cremallera reforzada" },
      { label: "Cobertura", value: "Recepción en el taller · medición en su sitio para equipos grandes" },
      { label: "Garantía", value: "6 meses en costura y cremallera" },
    ],
    applications: [
      {
        id: "equipos-medicos",
        title: "Equipos médicos",
        body: "Forros para camillas, sillas de consultorio, monitores y equipos de diagnóstico, en material lavable que se limpia y desinfecta con facilidad.",
        image: "nvForrosProteccion",
      },
      {
        id: "equipos-de-sonido",
        title: "Equipos de sonido",
        body: "Fundas para parlantes, consolas, amplificadores y cabinas. Protegen del polvo, de los golpes del transporte y de la intemperie en eventos.",
        image: "nvAudioConForro",
        hoverImage: "nvAudioSinForro",
      },
      {
        id: "maquinaria",
        title: "Maquinaria pesada",
        body: "Forros a la medida para máquinas industriales y equipos de trabajo, con tapas de acceso que se abren sin retirar todo el forro. Protegen del polvo, la humedad y el sol.",
        image: "nvMaquinariaConForro",
        hoverImage: "nvMaquinariaAbierta",
        hoverLabels: ["Forro cerrado", "Forro abierto"],
      },
    ],
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
