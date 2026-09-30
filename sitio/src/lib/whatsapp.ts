import { site } from "@/data/site";

/** Enlace a WhatsApp con mensaje precargado. */
export function whatsappUrl(text?: string): string {
  const base = `https://wa.me/${site.contact.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Mensaje genérico usado por el header, el hero y el botón flotante. */
export const WHATSAPP_DEFAULT_MESSAGE = "Hola, quiero cotizar un trabajo con VELARA.";
