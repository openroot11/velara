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
const WHATSAPP_NUMBER = "573000000000";

export const site = {
  name: "VELARA",
  shortName: "VELARA",
  descriptor: "Taller de cuero y tapicería",
  tagline:
    "Taller de cuero y tapicería en Barranquilla. Tapizado automotriz y de motos, carpas y toldos para negocio y forros a la medida.",
  legalName: "VELARA Taller S.A.S.",
  /** Año de fundación — usado en el pie y en «años de oficio». */
  foundedYear: 2009,

  contact: {
    phoneDisplay: "+57 300 000 0000",
    phoneHref: "tel:+573000000000",
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappDisplay: "+57 300 000 0000",
    whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}`,
    email: "hola@velara.com.co",
    emailHref: "mailto:hola@velara.com.co",
  },

  location: {
    line1: "Calle 00 # 00-00, Barrio Montecristo",
    line2: "Barranquilla, Atlántico",
    short: "Barranquilla · Colombia",
    city: "Barranquilla",
    mapHref: "https://maps.google.com/?q=Barranquilla,+Atl%C3%A1ntico,+Colombia",
  },

  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
    { label: "TikTok", href: "https://tiktok.com" },
  ],

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
      "Trabajos nuevos, guías de cuidado y avisos de disponibilidad de materiales. Un correo al mes, sin relleno.",
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
