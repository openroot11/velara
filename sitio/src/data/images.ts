/**
 * Central image registry.
 * -----------------------------------------------------------------------------
 * Every photograph used across the site is referenced here by a single key.
 * To swap the art direction, replace the `src` of any entry with your own
 * hosted image URL (ideally a 2400px-wide, optimised JPG/WebP). Nothing else
 * in the codebase needs to change.
 *
 * The current set is sourced from Unsplash (free to use, no attribution
 * required - https://unsplash.com/license). For production we recommend
 * downloading and self-hosting these files under /public/img.
 */

const UNSPLASH = "https://images.unsplash.com/";

/** Build a responsive Unsplash URL. */
export function u(id: string, w = 1600, q = 68): string {
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

/** Widths offered to the browser when an asset supports on-the-fly resizing. */
const SRCSET_WIDTHS = [640, 1024, 1600, 2400];

/**
 * Derives a `srcset` from an Unsplash URL so the `sizes` attribute we already
 * pass actually does something. Returns undefined for self-hosted files, which
 * have no resizing endpoint.
 */
export function srcSetFor(src: string): string | undefined {
  if (!src.startsWith(UNSPLASH) || !/[?&]w=\d+/.test(src)) return undefined;
  return SRCSET_WIDTHS.map(
    (w) => `${src.replace(/([?&])w=\d+/, `$1w=${w}`)} ${w}w`,
  ).join(", ");
}

export interface ImageAsset {
  /** Full-size source URL. */
  src: string;
  /** Descriptive alt text (Spanish). */
  alt: string;
  /** Optional object-position hint for tight crops. */
  position?: string;
}

const registry = {
  /* ---- PORTADA / AMBIENTE ---- */
  heroInterior: {
    src: u("photo-1605437241278-c1806d14a4d9", 2400, 72),
    alt: "Interior tapizado en negro con costuras hechas a mano, iluminado de forma cinematográfica",
    position: "center 65%",
  },
  ctaInterior: {
    src: u("photo-1684872961971-8084ea207ff8", 2200, 70),
    alt: "Silla de cuero coñac recién terminada sobre un fondo oscuro",
    position: "center 40%",
  },
  aboutWorkshop: {
    src: u("photo-1785482449272-b43450f4c5b2", 2000, 70),
    alt: "Artesana trabajando una pieza de cuero sobre un banco de madera",
    position: "center",
  },

  /* ---- SERVICIOS ---- */
  svcAutomotriz: {
    src: u("photo-1549064233-945d7063292f", 1400),
    alt: "Interior de vehículo tapizado en negro con detalles en tono cálido",
    position: "center 55%",
  },
  svcMoto: {
    src: u("photo-1688298236546-759a8ce0769c", 1400),
    alt: "Primer plano del sillín de cuero de una moto",
  },
  svcCarpas: {
    src: u("photo-1785899777880-f60e601641ad", 1400),
    alt: "Fachada de un local con un toldo negro tensado sobre la entrada",
    position: "center 55%",
  },
  svcForros: {
    src: u("photo-1764917360214-79ec1f6b02fb", 1400),
    alt: "Dos sillas forradas con costura visible",
  },

  /* ---- ANTES / DESPUÉS ---- */
  transformBefore: {
    src: u("photo-1770936450010-6837d6933caa", 2000, 74),
    alt: "Sillas de un carro gastadas y sucias antes de entrar al taller",
    position: "center",
  },
  transformAfter: {
    src: u("photo-1770936560291-c75286720ff5", 2000, 74),
    alt: "El mismo interior ya tapizado, con las sillas terminadas",
    position: "center",
  },
  transformDetail: {
    src: u("photo-1786561048051-191fb1075f6d", 1600),
    alt: "Detalle de una silla perforada con costura de contraste",
    position: "center",
  },

  /* ---- PROYECTOS ---- */
  projCamioneta: {
    src: u("photo-1787092843961-b82a63bf7354", 1800),
    alt: "Interior de una camioneta de trabajo con el tablero y las sillas a la vista",
    position: "center 55%",
  },
  projMoto: {
    src: u("photo-1672626923130-a16b9061d407", 1800),
    alt: "Detalle del sillín de una moto ya terminado",
    position: "center",
  },
  projCarpa: {
    src: u("photo-1741971282313-fb25835b1d24", 1800),
    alt: "Terraza de restaurante con toldos a rayas sobre las mesas",
    position: "center 45%",
  },
  projTaxi: {
    src: u("photo-1768853143263-72d7e744bbc2", 1800),
    alt: "Interior de un carro con las sillas forradas en tono claro",
    position: "center 50%",
  },
  projLocal: {
    src: u("photo-1786101708370-0f376dbf4960", 1800),
    alt: "Fachada de un local con un toldo a rayas sobre la entrada",
    position: "center 55%",
  },
  projFlota: {
    src: u("photo-1776821011082-917bff7e1329", 1800),
    alt: "Habitáculo con las sillas delanteras y traseras forradas",
    position: "center 45%",
  },

  /* Imágenes secundarias, usadas dentro de las galerías. */
  motoSaddlebags: {
    src: u("photo-1747174442910-3ba102d5595e", 1600),
    alt: "Maletas de cuero montadas sobre una moto",
  },
  motoDelivery: {
    src: u("photo-1767114648562-399d88d7362d", 1600),
    alt: "Repartidor sobre su moto en una calle de la ciudad",
    position: "center 45%",
  },
  motosParqueadas: {
    src: u("photo-1774101185183-cf5df9429efd", 1600),
    alt: "Varias motos de trabajo parqueadas frente a un edificio",
  },
  awningNight: {
    src: u("photo-1770688436671-eeedd48ab075", 1800),
    alt: "Terraza de restaurante iluminada al anochecer bajo su cubierta",
    position: "center 55%",
  },

  /* ---- PROCESO (páginas de proyecto) ---- */
  procDiagnosis: {
    src: u("photo-1681113376967-1fcd00cf78ee", 1400),
    alt: "Revisión de una superficie antes de intervenirla",
    position: "center 45%",
  },
  procStrip: {
    src: u("photo-1707085301598-3812ae4c01e1", 1400),
    alt: "Piezas desmontadas y ordenadas para su registro",
  },
  procPattern: {
    src: u("photo-1787005241178-c9006ea9610b", 1400),
    alt: "Trazado de un patrón de papel sobre una piel curtida",
  },
  procRestore: {
    src: u("photo-1568661062230-7420ca9353ba", 1400),
    alt: "Recuperación de una superficie de cuero",
  },
  procCraft: {
    src: u("photo-1564842505181-8862a3b9b173", 1400),
    alt: "Confección de un panel tapizado con costura en rombos",
  },
  procAssembly: {
    src: u("photo-1611937187627-a427e75ecf65", 1400),
    alt: "Montaje de las piezas terminadas",
    position: "center 40%",
  },
  procDetail: {
    src: u("photo-1684872961971-8084ea207ff8", 1400),
    alt: "Revisión final de la pieza terminada",
    position: "center 40%",
  },

  /* ---- MATERIALES ---- */
  matLeather: {
    src: u("photo-1716295177956-420a647c83ac", 1600),
    alt: "Macrofotografía de cuero curtido con costura al borde",
  },
  matVinyl: {
    src: u("photo-1568661062230-7420ca9353ba", 1600),
    alt: "Superficie de vinilo en tono marrón profundo con grano marcado",
  },
  matSuede: {
    src: u("photo-1603636636762-aa7a39434535", 1600),
    alt: "Superficie de ante en tono arena",
  },
  matAlcantara: {
    src: u("photo-1629196617166-3755e2efe63e", 1600),
    alt: "Textura aterciopelada de Alcántara",
  },
  matCanvas: {
    src: u("photo-1782990049266-523d0bf57e5c", 1600),
    alt: "Lona de trama cerrada en tono natural",
  },
  matFabric: {
    src: u("photo-1606203230902-89be7eb9fbe6", 1600),
    alt: "Tela técnica de tapicería en tonos oscuros",
  },
  matThread: {
    src: u("photo-1496180317060-d2026272f138", 1600),
    alt: "Carrete de hilo encerado sobre una piel",
    position: "center",
  },

  /* ---- FILOSOFÍA ---- */
  philosophyStitch: {
    src: u("photo-1519120433933-22bc753101f3", 2200, 74),
    alt: "Detalle muy cercano de una costura sobre cuero negro",
    position: "center",
  },

  /* ---- TALLER / TEXTURAS ---- */
  craftTools: {
    src: u("photo-1647502191516-68a4f8c74ed4", 1600),
    alt: "Herramientas de talabartería sobre una base de corte",
  },
  craftHands: {
    src: u("photo-1771491237218-cbd4a707497e", 1600),
    alt: "Manos trabajando el interior de un vehículo",
  },

  /* ---- ENCABEZADOS DE PÁGINA ----
   * Reutilizan fotos del set provisional con otro encuadre. Sustitúyalas por
   * imágenes propias en `src/data/images.ts` cuando las tenga. */
  pageServicios: {
    src: u("photo-1549064233-945d7063292f", 2200, 70),
    alt: "Interior de vehículo recién tapizado, en penumbra",
    position: "center 60%",
  },
  pageMateriales: {
    src: u("photo-1716295177956-420a647c83ac", 2200, 70),
    alt: "Pieles y rollos de material apilados en el taller",
    position: "center",
  },
  pageNosotros: {
    src: u("photo-1785482449272-b43450f4c5b2", 2200, 70),
    alt: "Artesana trabajando una pieza de cuero sobre un banco de madera",
    position: "center 40%",
  },
  pageProceso: {
    src: u("photo-1787005241178-c9006ea9610b", 2200, 70),
    alt: "Trazado de un patrón sobre una piel curtida",
    position: "center",
  },
  pageRecursos: {
    src: u("photo-1647502191516-68a4f8c74ed4", 2200, 70),
    alt: "Herramientas de talabartería ordenadas sobre una base de corte",
    position: "center",
  },
  pageProyectos: {
    src: u("photo-1741971282313-fb25835b1d24", 2200, 70),
    alt: "Terraza de restaurante con toldos a rayas sobre las mesas",
    position: "center 45%",
  },
  pageContacto: {
    src: u("photo-1684872961971-8084ea207ff8", 2200, 70),
    alt: "Silla de cuero coñac recién terminada sobre un fondo oscuro",
    position: "center 45%",
  },
  heroWorkshop: {
    src: u("photo-1771491237218-cbd4a707497e", 2400, 72),
    alt: "Manos trabajando el interior de un vehículo en el taller",
    position: "center 50%",
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof registry;

export const images: Record<ImageKey, ImageAsset> = registry;
