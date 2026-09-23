---
titulo: Proyecto VELARA
tags: [proyecto]
---

# Proyecto VELARA

## Qué es

Sitio corporativo para **VELARA**, un taller de cuero y tapicería en
Barranquilla (Colombia). Cinco servicios, en este orden de prioridad:
**forros para carros**, **tapicería automotriz** y **tapizado de sillines de
moto** (los tres que más venden — ver motivo abajo), y en segundo plano
carpas/toldos para negocio y forros para muebles y equipos. Catálogo de
materiales aparte.

No es tienda en línea. El objetivo es mostrar el trabajo y **llevar a la persona
a pedir una cotización por WhatsApp**.

**El sitio es la landing para Google Ads del negocio** — VELARA todavía no
tiene presencia en redes sociales, así que esta página es el primer punto de
contacto digital real. Por eso el orden y el contenido de los servicios están
pensados para SEO/Ads, no solo para diseño: forros para carros primero,
sillines de moto mencionando marcas populares en Colombia (AKT, Bajaj, Yamaha,
Honda, Suzuki).

La estructura y la estética están modeladas sobre el sitio de **Spradling /
Proquinal** — ver [[referencia-spradling]].

## Estado

- Sitio funcional, construido con React + Vite. Ver [[arquitectura-web]].
- El contenido es **provisional**: textos de relleno realistas e imágenes de
  archivo de Unsplash (no son trabajos reales del taller).

## Pendientes antes de publicar

Todo esto vive en `sitio/src/data/site.ts` salvo donde se indique:

- [x] **Número de WhatsApp real** — `573225640747`, puesto en `WHATSAPP_NUMBER` (`site.ts`).
- [x] **Correo real** — `velarataller@gmail.com`, puesto en `site.contact.email`.
- [ ] Dirección real (`site.location`) — hoy sigue siendo un dato de relleno, confirmar si ya existe local del taller.
- [ ] Horario real (`site.hours`).
- [ ] Enlaces de redes reales (`site.social`).
- [ ] **Fotos reales del taller** — reemplazar las de Unsplash.
      Guardar en `sitio/public/img/` y cambiar el `src` en
      `src/data/images.ts`. Ver [[contenido-editable]].
- [ ] Logo vectorial del diseñador, si existe — reemplazar los `<path>` en
      `src/components/ui/Logo.tsx` y `public/favicon.svg`. Ver [[identidad-visual]].
- [ ] Revisar textos de servicios, materiales, proyectos y recursos.

## Publicación

SPA estático. `npm run build` genera `/dist`, se publica esa carpeta.
Config lista para Netlify (`public/_redirects`) y Vercel (`vercel.json`).
Hoy no está publicado en ningún dominio real todavía.

## Pendientes antes de lanzar Google Ads

(El rastreo de conversión ya está armado en el código — ver
`sitio/src/lib/adAttribution.ts` y `sitio/src/lib/googleAdsConversion.ts`.)
Esto es solo la lista de qué falta para Velara específicamente, en orden:

- [x] Cuenta de Google (`velarataller@gmail.com`).
- [ ] Cuenta de Google Ads creada, con moneda COP y facturación Colombia.
- [ ] Método de pago agregado en la cuenta de Ads.
- [ ] **Sitio publicado en un dominio real** — hoy solo corre en local
      (`npm run dev`); un anuncio no puede mandar tráfico a `localhost`.
      Falta comprar el dominio y conectarlo a Vercel/Netlify.
- [ ] Fotos reales del taller y dirección real (ver pendientes de arriba) —
      no tiene sentido pagar por tráfico que llega a un sitio con datos de relleno.
- [ ] Acción de conversión "Clic a WhatsApp" creada en Google Ads → el
      `AW-XXXXXXXXXX` y la etiqueta van en `sitio/.env`
      (`VITE_GOOGLE_ADS_CONVERSION_ID` / `VITE_GOOGLE_ADS_CONVERSION_LABEL`,
      ver `sitio/.env.example`) — sin esto el sitio funciona igual, solo que
      Google Ads no ve qué clics a WhatsApp vinieron de un anuncio.
- [ ] Presupuesto diario decidido.
- [ ] Probar el flujo completo antes de gastar dinero real: abrir el sitio
      publicado con `?gclid=test123&utm_source=google&utm_medium=cpc`,
      confirmar en la consola del navegador que no hay errores, llenar
      `/cotizar` y verificar que se abre WhatsApp con el mensaje correcto.
