import type { ImageKey } from "./images";

/**
 * Recursos — el equivalente a la «biblioteca de documentos» de la referencia.
 * Cada artículo genera una ficha en /recursos y su página en /recursos/<slug>.
 *
 * El cuerpo se arma con bloques. Tipos disponibles:
 *   p     · párrafo
 *   h2/h3 · subtítulos
 *   ul/ol · listas
 *   note  · recuadro destacado
 *   qa    · pregunta + respuesta (se muestra como acordeón)
 *   term  · término + definición (glosario)
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "qa"; q: string; a: string }
  | { type: "term"; term: string; def: string };

export interface Resource {
  slug: string;
  title: string;
  /** Etiqueta de tipo: Guía, Instructivo, Preguntas frecuentes, Glosario, Galería, Legal. */
  kind: string;
  summary: string;
  cover: ImageKey;
  readingTime: string;
  body: Block[];
}

export const resources: Resource[] = [
  {
    slug: "cuidado-del-cuero",
    title: "Guía de cuidado del cuero",
    kind: "Guía",
    summary:
      "Cómo limpiar, hidratar y proteger un tapizado de cuero para que dure años y envejezca bien.",
    cover: "matLeather",
    readingTime: "5 min",
    body: [
      { type: "p", text: "Un tapizado de cuero bien hecho puede durar más que el vehículo o el mueble que lo lleva. Lo que lo arruina no suele ser el uso, sino el descuido y los productos equivocados. Esta guía resume lo que le decimos a cada cliente cuando entrega el trabajo." },
      { type: "h2", text: "Limpieza semanal" },
      { type: "p", text: "El polvo es abrasivo: mezclado con el roce, lija la superficie. Pase un paño de microfibra apenas húmedo una vez por semana. Para la suciedad normal, agregue una gota de jabón neutro en un litro de agua." },
      { type: "ul", items: [
        "Escurra bien el paño: el cuero no debe quedar mojado, sólo apenas fresco.",
        "Trabaje por secciones y seque enseguida con un paño limpio.",
        "En las costuras, use un cepillo de cerdas suaves para sacar el polvo acumulado.",
      ] },
      { type: "h2", text: "Hidratación" },
      { type: "p", text: "El cuero pierde grasas con el tiempo y el calor. En el clima de Barranquilla conviene hidratar cada 4 a 6 meses con una crema específica para cuero de tapicería. Aplique poca cantidad con un paño, deje actuar 20 minutos y retire el excedente." },
      { type: "note", text: "Nunca use aceite de bebé, vaselina ni siliconas de tablero. Sellan los poros, dejan el cuero pegajoso y atraen más polvo." },
      { type: "h2", text: "Manchas" },
      { type: "ol", items: [
        "Actúe rápido: absorba el líquido con papel sin frotar.",
        "Limpie con el paño húmedo y jabón neutro, del borde hacia el centro.",
        "Si la mancha es de grasa, espolvoree talco, deje una hora y cepille.",
        "Si no sale, no insista con más producto: tráigala al taller.",
      ] },
      { type: "h2", text: "Sol y calor" },
      { type: "p", text: "El sol directo decolora y reseca. Use parasol en el carro y evite dejar los asientos expuestos horas. Un cuero que se mantiene a la sombra y se hidrata a tiempo puede verse bien diez años después." },
    ],
  },
  {
    slug: "como-medir",
    title: "Cómo medir su vehículo para cotizar",
    kind: "Instructivo",
    summary:
      "Las fotos y medidas que necesitamos para darle un precio sin tener el vehículo en el taller.",
    cover: "procStrip",
    readingTime: "4 min",
    body: [
      { type: "p", text: "Podemos darle un precio aproximado con buenas fotos y unas pocas medidas. El precio en firme siempre lo confirmamos con la pieza delante, pero esto nos deja arrancar la conversación." },
      { type: "h2", text: "Fotos que ayudan" },
      { type: "ul", items: [
        "El interior completo desde las dos puertas delanteras, con luz de día.",
        "Cada silla de frente y de perfil.",
        "Primeros planos de los daños: descosidos, huecos, espuma hundida, techo despegado.",
        "El tablero y los paneles de puerta.",
        "La placa o ficha técnica, para identificar el modelo exacto.",
      ] },
      { type: "h2", text: "Medidas útiles" },
      { type: "p", text: "Con una cinta métrica, tome estas medidas en centímetros y anótelas junto a una foto de referencia:" },
      { type: "ol", items: [
        "Ancho y alto del respaldo de la silla delantera.",
        "Ancho del asiento (cojín) delantero.",
        "Largo de la banca trasera.",
        "Si es camioneta, si tiene una o dos bancas traseras.",
      ] },
      { type: "note", text: "Para carpas y toldos no pida medidas por foto: la visita de medición es sin costo dentro del área metropolitana y evita errores caros." },
      { type: "h2", text: "Qué más contarnos" },
      { type: "p", text: "El material que le gustaría (cuero, vinilo, tela), si quiere conservar el color original o cambiarlo, para cuándo lo necesita y si el vehículo trabaja todos los días. Con eso armamos la cotización." },
    ],
  },
  {
    slug: "preguntas-frecuentes",
    title: "Preguntas frecuentes",
    kind: "Preguntas frecuentes",
    summary:
      "Tiempos, precios, garantía y traslados — lo que más nos preguntan antes de empezar.",
    cover: "craftTools",
    readingTime: "6 min",
    body: [
      { type: "p", text: "Si su pregunta no está aquí, escríbanos por WhatsApp y la respondemos el mismo día hábil." },
      { type: "qa", q: "¿Cuánto se demora un tapizado?", a: "Un sillín de moto, entre 3 y 7 días. Un juego de sillas de carro, de 1 a 2 semanas. Un interior completo o una flota, de 2 a 6 semanas según el alcance. Le damos la fecha en firme con la cotización y la cumplimos." },
      { type: "qa", q: "¿Cómo cobran?", a: "Por trabajo, no por hora. La cotización incluye material, mano de obra y montaje. Se paga 50% para empezar y 50% contra entrega. No hay cobros sorpresa: si aparece algo no previsto al desarmar, lo consultamos antes de seguir." },
      { type: "qa", q: "¿Tienen garantía?", a: "Sí. 12 meses en costura y material para tapizado; 24 meses en costura para carpas y toldos; 6 meses en forros y cremalleras. La garantía cubre defectos de confección, no el desgaste por mal uso. Queda por escrito en la entrega." },
      { type: "qa", q: "¿Recogen y entregan el vehículo?", a: "Para trabajos grandes coordinamos recogida y entrega dentro de Barranquilla. Para sillines y piezas sueltas, la recepción es en el taller." },
      { type: "qa", q: "¿Puedo llevar mi propio material?", a: "Sí, pero revisamos que sirva para el uso antes de cortar. Si el material no aguanta, se lo decimos: preferimos perder la venta del material que rehacer el trabajo." },
      { type: "qa", q: "¿Trabajan para otros talleres?", a: "Sí. Damos servicio de confección y tapizado a talleres de motos, latonería y concesionarios, con tiempos y precios de mayorista." },
      { type: "qa", q: "¿Hacen el trabajo el mismo día?", a: "Casos puntuales sí (un descosido, un parche, una cremallera). Un trabajo hecho como debe ser necesita desarmar, patronar, coser y montar: eso no se hace bien en una tarde." },
    ],
  },
  {
    slug: "garantia-del-taller",
    title: "Garantía del taller",
    kind: "Legal",
    summary: "Qué cubre la garantía, por cuánto tiempo y cómo se hace efectiva.",
    cover: "procDetail",
    readingTime: "3 min",
    body: [
      { type: "p", text: "Todo trabajo de VELARA se entrega con garantía escrita. Este es el resumen; el documento de entrega manda en caso de duda." },
      { type: "h2", text: "Plazos" },
      { type: "ul", items: [
        "Tapizado automotriz y de motos: 12 meses en costura y material.",
        "Carpas y toldos: 24 meses en costura y confección; la lona según la garantía del fabricante.",
        "Forros: 6 meses en costura y cremalleras.",
      ] },
      { type: "h2", text: "Qué cubre" },
      { type: "p", text: "Defectos de confección: costuras que se abren sin causa, materiales que fallan antes de tiempo en uso normal, piezas mal montadas. La reparación es sin costo, incluido el traslado dentro de Barranquilla." },
      { type: "h2", text: "Qué no cubre" },
      { type: "ul", items: [
        "Desgaste normal por el uso y el paso del tiempo.",
        "Daños por mal uso, accidentes, mascotas o productos de limpieza inadecuados.",
        "Material suministrado por el cliente contra nuestra recomendación.",
        "Exposición prolongada a sol directo sin la protección indicada.",
      ] },
      { type: "h2", text: "Cómo hacerla efectiva" },
      { type: "p", text: "Escríbanos por WhatsApp con el número de orden (está en el documento de entrega) y una foto del problema. Revisamos y, si aplica, coordinamos la reparación en un plazo de 5 días hábiles." },
    ],
  },
  {
    slug: "politica-de-privacidad",
    title: "Política de privacidad",
    kind: "Legal",
    summary: "Qué datos pedimos, para qué los usamos y cómo pedir que los borremos.",
    cover: "aboutWorkshop",
    readingTime: "3 min",
    body: [
      { type: "p", text: "Este es un texto de referencia. Reemplácelo por la política real revisada por un abogado antes de publicar el sitio." },
      { type: "h2", text: "Datos que recogemos" },
      { type: "p", text: "Los que usted nos da para cotizar: nombre, teléfono, sector y la descripción del trabajo. El formulario de cotización no envía nada por su cuenta: abre WhatsApp con el mensaje escrito y usted decide si lo envía." },
      { type: "h2", text: "Para qué los usamos" },
      { type: "ul", items: [
        "Responder su solicitud y elaborar la cotización.",
        "Coordinar la visita de medición, el trabajo y la entrega.",
        "Contactarlo por temas de garantía.",
      ] },
      { type: "h2", text: "Sus derechos" },
      { type: "p", text: "Puede pedir en cualquier momento que le mostremos, corrijamos o borremos sus datos, escribiendo a nuestro correo de contacto." },
    ],
  },
  {
    slug: "terminos-y-condiciones",
    title: "Términos y condiciones",
    kind: "Legal",
    summary: "Condiciones de cotización, pago, tiempos y entrega de los trabajos del taller.",
    cover: "craftHands",
    readingTime: "3 min",
    body: [
      { type: "p", text: "Texto de referencia. Ajústelo a la operación real y hágalo revisar antes de publicar." },
      { type: "h2", text: "Cotizaciones" },
      { type: "p", text: "Las cotizaciones tienen una validez de 30 días. El precio en firme se confirma con la pieza a la vista; si al desarmar aparece un daño no visible, se informa y se acuerda antes de continuar." },
      { type: "h2", text: "Pagos" },
      { type: "p", text: "50% de anticipo para programar y comprar material, 50% contra entrega. Medios de pago: transferencia, tarjeta y efectivo." },
      { type: "h2", text: "Tiempos y entrega" },
      { type: "p", text: "El plazo se acuerda por escrito. Si se retrasa por causa nuestra, se avisa con anticipación. La pieza se entrega con el registro fotográfico del proceso y el documento de garantía." },
    ],
  },
];

export const getResource = (slug: string): Resource | undefined =>
  resources.find((r) => r.slug === slug);
