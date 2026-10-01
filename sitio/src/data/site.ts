/**
 * Configuración global del sitio — edite estos valores con libertad.
 * Nombre de marca, datos de contacto, ubicación y redes viven aquí.
 * La navegación (menús) vive en `navigation.ts`.
 */

/**
 * Número de WhatsApp en formato internacional, sólo dígitos (sin +, sin espacios).
 * Es el único lugar donde se cambia: el botón flotante, el pie y el formulario
 * de cotización lo leen de aquí.
 *
 * PENDIENTE: reemplazar por la línea real antes de publicar.
 */
const WHATSAPP_NUMBER = "573003666093";

export const site = {
  name: "VELARA",
  shortName: "VELARA",
  descriptor: "Taller de cuero y tapicería",
  tagline:
    "Taller de cuero y tapicería en Barranquilla. Forros para carros, tapicería automotriz y tapizado de sillines de moto — también carpas, toldos y forros a la medida.",
  legalName: "VELARA Taller S.A.S.",
  /** Año de fundación — usado en el pie y en «años de oficio». */
  foundedYear: 2009,

  contact: {
    phoneDisplay: "+57 300 366 6093",
    phoneHref: "tel:+573003666093",
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappDisplay: "+57 300 366 6093",
    whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}`,
    email: "velarataller@gmail.com",
    emailHref: "mailto:velarataller@gmail.com",
  },

  location: {
    line1: "Calle 56 # 12C-02, Local 3",
    line2: "Barranquilla, Atlántico",
    short: "Barranquilla · Colombia",
    city: "Barranquilla",
    mapHref: "https://maps.google.com/?q=Calle+56+%2312C-02+Local+3,+Barranquilla,+Atl%C3%A1ntico,+Colombia",
  },

  social: [{ label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` }],

  /** Llamada a la acción principal, reutilizada en todo el sitio. */
  cta: {
    label: "Solicitar cotización",
    softLabel: "Más información",
    href: "/cotizar",
  },

  /** Horario, mostrado en la página de cotización y de contacto. */
  hours: "Lunes a viernes, 8:00 a. m. a 6:00 p. m. · Sábados, 8:00 a. m. a 1:00 p. m.",

  /** Texto del bloque de newsletter en el pie. */
  newsletter: {
    title: "Boletín",
    blurb:
      "Trabajos nuevos y guías de cuidado. Un correo al mes, sin relleno.",
    placeholder: "Su correo",
    action: "Suscribirme",
  },

  /** Enlaces legales / de servicio (columna del pie y menú móvil). */
  legal: [
    { label: "Política de privacidad", href: "/recursos/politica-de-privacidad" },
    { label: "Términos y condiciones", href: "/recursos/terminos-y-condiciones" },
    { label: "PQR — Peticiones, quejas y reclamos", href: "/contacto" },
    { label: "Garantía del taller", href: "/recursos/garantia-del-taller" },
  ],
} as const;

export type Site = typeof site;
