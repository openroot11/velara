/**
 * Atribución de anuncios (Google Ads y similares).
 *
 * El sitio es 100% estático (sin backend): no hay dónde guardar un lead ni
 * subir después una conversión "offline" con el gclid, como sí se puede en
 * un CRM con base de datos. Lo que sí se puede hacer aquí, sin servidor:
 *
 *  1. Guardar el gclid/utm de la visita en localStorage cuando alguien llega
 *     desde un anuncio (útil si en el futuro Velara tiene su propio CRM y
 *     quiere cruzar una conversación de WhatsApp con el anuncio que la trajo).
 *  2. Reportar el clic a WhatsApp como conversión a Google Ads en el momento
 *     (ver googleAdsConversion.ts) -- esto SÍ actualiza a Google Ads de
 *     inmediato, sin necesitar el gclid a mano ni un backend.
 *
 * Se llama una vez al montar <App/> (ver App.tsx), así corre sin importar en
 * qué página caiga el anuncio (Home, un servicio puntual, etc.), no solo en
 * /cotizar.
 */

const STORAGE_KEY = "velara_ad_attribution";
const MAX_AGE_DAYS = 90; // mismo tope que usa Google Ads para atribuir un clic

export interface AdAttribution {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  capturedAt: number;
  landingPath: string;
}

const CLICK_ID_PARAMS = ["gclid", "gbraid", "wbraid"] as const;
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

/**
 * Lee los parámetros de la URL actual; si trae un click id de Google (nuevo
 * clic desde un anuncio), reemplaza lo que hubiera guardado -- gana siempre
 * el anuncio más reciente. Si no trae ninguno, deja intacto lo que ya había
 * (para no perder la atribución al navegar a otra página del sitio).
 */
export function captureAdAttribution(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const hasClickId = CLICK_ID_PARAMS.some((k) => params.has(k));
  if (!hasClickId) return;

  const entry: AdAttribution = { capturedAt: Date.now(), landingPath: window.location.pathname };
  for (const k of CLICK_ID_PARAMS) {
    const v = params.get(k);
    if (v) entry[k] = v;
  }
  for (const k of UTM_PARAMS) {
    const v = params.get(k);
    if (v) entry[k] = v;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
  } catch {
    // Storage bloqueado (modo privado, etc.) -- no es crítico, se sigue sin atribución.
  }
}

/** Devuelve la atribución guardada, o null si no hay o ya venció (90 días). */
export function getAdAttribution(): AdAttribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const entry = JSON.parse(raw) as AdAttribution;
    const ageDays = (Date.now() - entry.capturedAt) / 86_400_000;
    if (ageDays > MAX_AGE_DAYS) return null;
    return entry;
  } catch {
    return null;
  }
}
