/**
 * Reporta un clic a WhatsApp como conversión a Google Ads, usando el tag de
 * Google (gtag.js) -- el mecanismo estándar para "clic a WhatsApp" cuando no
 * hay backend/CRM detrás: no hace falta leer el gclid a mano ni subir nada
 * después, gtag.js ya lo asocia solo con el clic que lo trajo.
 *
 * Apagado por defecto (no-op) hasta que existan estas dos variables, una vez
 * creada la cuenta de Google Ads y su acción de conversión "Clic a WhatsApp"
 * (Herramientas → Conversiones → Nueva acción de conversión → Sitio web):
 *
 *   VITE_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX
 *   VITE_GOOGLE_ADS_CONVERSION_LABEL=XxXxXxXxXxXxXxXxXxXx
 *
 * Ver .env.example en la raíz del proyecto.
 */

const CONVERSION_ID = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID ?? "";
const CONVERSION_LABEL = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL ?? "";

function isEnabled(): boolean {
  return Boolean(CONVERSION_ID && CONVERSION_LABEL);
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let scriptLoaded = false;

function ensureGtagLoaded(): void {
  if (scriptLoaded || typeof document === "undefined") return;
  scriptLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${CONVERSION_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", CONVERSION_ID);
}

/** Llamar justo cuando alguien abre WhatsApp desde el sitio (botón o formulario). */
export function reportWhatsAppClick(): void {
  if (!isEnabled()) return;
  ensureGtagLoaded();
  window.gtag?.("event", "conversion", { send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}` });
}
