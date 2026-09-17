import type { ImageKey } from "./images";

/**
 * Catálogo de materiales — el equivalente al «catálogo de productos» de la
 * referencia. Cada entrada genera:
 *   · una ficha en la retícula de /materiales (filtrable por familia, uso y propiedad)
 *   · su página propia en /materiales/<slug> (ficha técnica + acordeones)
 *
 * Los `uses` y `properties` alimentan los filtros: escríbalos consistentes.
 */

export type MaterialFamily = "cueros" | "vinilos" | "exteriores" | "herrajes";

export const materialFamilies: { slug: MaterialFamily; label: string }[] = [
  { slug: "cueros", label: "Cueros" },
  { slug: "vinilos", label: "Vinilos y cuerinas" },
  { slug: "exteriores", label: "Exteriores" },
  { slug: "herrajes", label: "Herrajes e hilos" },
];

/** Muestra de color — se pinta como un chip, no como imagen. */
export interface MaterialVariant {
  name: string;
  /** Hex del chip de color. */
  tone: string;
}

export interface Material {
  slug: string;
  name: string;
  family: MaterialFamily;
  /** Cualificador corto bajo el nombre. */
  kind: string;
  /** Una línea para las fichas. */
  summary: string;
  description: string;
  image: ImageKey;
  /** Dónde se usa — alimenta el filtro «Uso». */
  uses: string[];
  /** Cómo se comporta — alimenta el filtro «Propiedad». */
  properties: string[];
  /** Ficha técnica (tabla). */
  specs: { label: string; value: string }[];
  /** Cuidado y limpieza. */
  care: string;
  variants: MaterialVariant[];
}

export const materials: Material[] = [
  {
    slug: "cuero-plena-flor",
    name: "Cuero plena flor",
    family: "cueros",
    kind: "Curtido vegetal y al cromo",
    summary: "La capa más noble de la piel, con la flor intacta. Gana carácter con los años.",
    description:
      "El cuero de plena flor conserva la superficie natural de la piel, sin lijar. Es el más resistente y el que mejor envejece: se marca, toma pátina y cuenta la historia de la pieza. Lo escogemos para interiores de carro de gama alta, timones y piezas que se tocan todos los días.",
    image: "matLeather",
    uses: ["Automotriz", "Motos", "Muebles", "Marroquinería"],
    properties: ["Transpirable", "Envejece bien", "Reparable"],
    specs: [
      { label: "Espesor", value: "1.2 – 1.4 mm" },
      { label: "Origen", value: "Curtiembre nacional certificada" },
      { label: "Acabado", value: "Anilina con capa protectora ligera" },
      { label: "Ancho de piel", value: "45 – 55 pie²" },
      { label: "Resistencia a la luz", value: "Buena — puede oscurecer levemente" },
    ],
    care: "Limpieza con paño apenas húmedo y jabón neutro. Hidratar cada 4 a 6 meses con crema para cuero. No usar solventes ni exponer a sol directo prolongado.",
    variants: [
      { name: "Negro", tone: "#1a1a1a" },
      { name: "Coñac", tone: "#8a4b2d" },
      { name: "Habano", tone: "#6b4429" },
      { name: "Arena", tone: "#c9b291" },
      { name: "Vino", tone: "#5c2230" },
    ],
  },
  {
    slug: "cuero-semianilina",
    name: "Cuero semianilina",
    family: "cueros",
    kind: "Anilina con pigmento ligero",
    summary: "El tacto de la anilina con una capa de color que empareja el tono y protege del uso.",
    description:
      "La semianilina lleva un pigmento fino que uniformiza el color y da más resistencia a las manchas que la anilina pura, sin perder el tacto cálido del cuero. Es el equilibrio para un interior que se usa a diario pero que no queremos que se vea plástico.",
    image: "philosophyStitch",
    uses: ["Automotriz", "Muebles", "Marina"],
    properties: ["Fácil de limpiar", "Color uniforme", "Transpirable"],
    specs: [
      { label: "Espesor", value: "1.1 – 1.3 mm" },
      { label: "Acabado", value: "Semianilina, capa de pigmento < 0.1 mm" },
      { label: "Resistencia a la abrasión", value: "≥ 50.000 ciclos Martindale" },
      { label: "Solidez del color", value: "≥ 4 (frote húmedo)" },
    ],
    care: "Paño húmedo y jabón neutro para el uso diario. Hidratar una a dos veces al año. Limpiar los derrames apenas ocurren.",
    variants: [
      { name: "Negro", tone: "#181818" },
      { name: "Grafito", tone: "#3a3a3c" },
      { name: "Camel", tone: "#a9743f" },
      { name: "Marfil", tone: "#e6ddcb" },
    ],
  },
  {
    slug: "ante",
    name: "Ante y nobuck",
    family: "cueros",
    kind: "Gamuza y flor esmerilada",
    summary: "Profundidad mate y calidez visual. Un contrapunto sobrio frente a las superficies pulidas.",
    description:
      "El ante se lija por el reverso y el nobuck por la flor: los dos dan una superficie aterciopelada, mate, que absorbe la luz. Lo usamos en insertos, cabeceros y zonas que no reciben roce fuerte, donde aporta un contraste de textura difícil de imitar.",
    image: "matSuede",
    uses: ["Automotriz", "Muebles", "Marroquinería"],
    properties: ["Tacto aterciopelado", "Mate", "Requiere cuidado"],
    specs: [
      { label: "Espesor", value: "0.9 – 1.1 mm" },
      { label: "Acabado", value: "Esmerilado, sin capa protectora" },
      { label: "Recomendado para", value: "Insertos y zonas de bajo roce" },
    ],
    care: "Cepillo de goma para levantar el pelo. Protector repelente antes del primer uso. Nada de agua ni jabón directo.",
    variants: [
      { name: "Antracita", tone: "#2f3033" },
      { name: "Tabaco", tone: "#6f4a2f" },
      { name: "Piedra", tone: "#9a9187" },
      { name: "Azul noche", tone: "#26303f" },
    ],
  },
  {
    slug: "vinilo-tecnico",
    name: "Cuerina técnica",
    family: "vinilos",
    kind: "Vinilo sobre base textil",
    summary: "Grano marcado y una resistencia al uso diario que el cuero no siempre da. La opción de trabajo.",
    description:
      "La cuerina técnica es vinilo laminado sobre una base de tejido. Repele líquidos, se limpia con un paño y aguanta el sol y el roce mejor que muchos cueros. Es lo que recomendamos para camionetas de trabajo, transporte público y cualquier interior que reciba trato duro.",
    image: "matVinyl",
    uses: ["Automotriz", "Motos", "Transporte público", "Muebles de exterior"],
    properties: ["Impermeable", "Fácil de limpiar", "Tratado UV", "Antibacterial"],
    specs: [
      { label: "Peso", value: "620 ± 40 g/m²" },
      { label: "Ancho de rollo", value: "1.40 m" },
      { label: "Composición", value: "PVC sobre base de poliéster" },
      { label: "Abrasión", value: "≥ 100.000 ciclos Martindale" },
      { label: "Retardante de llama", value: "Cumple FMVSS 302" },
    ],
    care: "Paño húmedo con jabón neutro. Para manchas difíciles, alcohol isopropílico diluido. No usar limpiadores abrasivos ni cepillo duro.",
    variants: [
      { name: "Negro", tone: "#161616" },
      { name: "Gris plomo", tone: "#4c4f52" },
      { name: "Beige", tone: "#c7b8a1" },
      { name: "Chocolate", tone: "#4a3527" },
      { name: "Rojo", tone: "#8f2020" },
    ],
  },
  {
    slug: "vinilo-nautico",
    name: "Vinilo náutico",
    family: "vinilos",
    kind: "Vinilo marino con antihongos",
    summary: "Formulado para el agua salada, el sol directo y la humedad permanente.",
    description:
      "El vinilo náutico lleva tratamiento antihongos en la capa y en la base, protección UV reforzada y costura recomendada con hilo de PTFE. Lo usamos en cojinería de lancha, sillines de moto expuestos y muebles de exterior en primera línea de sol.",
    image: "matVinyl",
    uses: ["Marina", "Motos", "Muebles de exterior"],
    properties: ["Impermeable", "Antihongos", "Tratado UV", "Resistente a sal"],
    specs: [
      { label: "Peso", value: "680 ± 40 g/m²" },
      { label: "Ancho de rollo", value: "1.37 m" },
      { label: "Protección UV", value: "≥ 1.500 horas sin cambio apreciable" },
      { label: "Antihongos", value: "ASTM G21, calificación 0" },
    ],
    care: "Enjuague con agua dulce después de exposición a sal. Jabón neutro y cepillo suave. Secar antes de guardar.",
    variants: [
      { name: "Blanco ártico", tone: "#eceae3" },
      { name: "Arena", tone: "#cabfa4" },
      { name: "Azul marino", tone: "#20344d" },
      { name: "Negro", tone: "#171717" },
    ],
  },
  {
    slug: "alcantara",
    name: "Microfibra tipo Alcántara",
    family: "vinilos",
    kind: "Microfibra de poliéster",
    summary: "Agarre y liviandad para las zonas de contacto. La firma de un interior deportivo.",
    description:
      "La microfibra da agarre, no refleja y pesa poco. La usamos en timones, insertos de silla y cielos de interiores deportivos, donde el contacto y la apariencia importan más que la resistencia a la intemperie.",
    image: "matAlcantara",
    uses: ["Automotriz", "Marina"],
    properties: ["Antideslizante", "Liviano", "Mate", "Fácil de limpiar"],
    specs: [
      { label: "Peso", value: "260 ± 20 g/m²" },
      { label: "Composición", value: "68% poliéster, 32% poliuretano" },
      { label: "Ancho", value: "1.40 m" },
      { label: "Abrasión", value: "≥ 40.000 ciclos Martindale" },
    ],
    care: "Aspirado suave y paño húmedo con jabón neutro en movimientos circulares. Cepillar en una sola dirección para uniformar el pelo.",
    variants: [
      { name: "Negro", tone: "#1b1b1d" },
      { name: "Gris asfalto", tone: "#45474b" },
      { name: "Rojo carrera", tone: "#7c1c1c" },
    ],
  },
  {
    slug: "lona-acrilica",
    name: "Lona acrílica",
    family: "exteriores",
    kind: "Fibra teñida en masa",
    summary: "El color va en la fibra, no encima: no se decolora aunque le pegue el sol todo el día.",
    description:
      "La lona acrílica se tiñe antes de tejer, así que el color aguanta años de sol sin virar. Transpira, seca rápido y repele el agua con el tratamiento de fábrica. Es nuestra primera opción para toldos de fachada y cubiertas de terraza.",
    image: "matCanvas",
    uses: ["Toldos", "Terrazas", "Cubiertas"],
    properties: ["Hidrófuga", "Tratada UV", "Transpirable", "Antihongos"],
    specs: [
      { label: "Peso", value: "300 ± 20 g/m²" },
      { label: "Composición", value: "100% acrílico teñido en masa" },
      { label: "Ancho de rollo", value: "1.20 m / 3.20 m" },
      { label: "Solidez a la luz", value: "≥ 7 (escala de lanas)" },
      { label: "Columna de agua", value: "≥ 350 mm" },
    ],
    care: "Cepillo seco para el polvo. Lavado con jabón neutro y agua fría, enjuague abundante y secado al aire. Reactivar el hidrófugo cada 2 a 3 años.",
    variants: [
      { name: "Blanco crudo", tone: "#e8e2d4" },
      { name: "Terracota", tone: "#a0492e" },
      { name: "Verde botella", tone: "#22412f" },
      { name: "Gris pizarra", tone: "#4b4f52" },
      { name: "Rayas crema/negro", tone: "#2a2a2a" },
    ],
  },
  {
    slug: "lona-pvc",
    name: "Lona de PVC",
    family: "exteriores",
    kind: "Poliéster recubierto",
    summary: "Impermeable de verdad y muy resistente al desgarro. Para lo que tiene que aguantar golpes.",
    description:
      "La lona de PVC es tejido de poliéster recubierto por las dos caras. Es totalmente impermeable, aguanta el desgarro y se limpia con un trapo. La usamos en lonas de camión, cerramientos, cobertores de bodega y toldos de mucho tamaño.",
    image: "matCanvas",
    uses: ["Cubiertas", "Cerramientos", "Transporte", "Cobertores"],
    properties: ["Impermeable", "Antidesgarro", "Fácil de limpiar", "Retardante de llama"],
    specs: [
      { label: "Peso", value: "650 – 900 g/m²" },
      { label: "Composición", value: "Poliéster 1100 dtex recubierto de PVC" },
      { label: "Ancho de rollo", value: "2.50 m" },
      { label: "Resistencia al desgarro", value: "≥ 300 N" },
      { label: "Retardante de llama", value: "M2 / B-s2,d0" },
    ],
    care: "Trapo húmedo con jabón neutro. Para grasa, desengrasante suave. Revisar costuras y ojales una vez al año.",
    variants: [
      { name: "Blanco", tone: "#eeeeea" },
      { name: "Gris", tone: "#6a6d70" },
      { name: "Azul", tone: "#1f3b63" },
      { name: "Verde", tone: "#1f4230" },
      { name: "Negro", tone: "#161616" },
      { name: "Translúcida", tone: "#dfe4e2" },
    ],
  },
  {
    slug: "telas-tecnicas",
    name: "Telas técnicas",
    family: "exteriores",
    kind: "Tejidos estables y frescos",
    summary: "Tejidos estables, frescos y fieles al color, incluso tras años de sol del Caribe.",
    description:
      "Bajo «telas técnicas» agrupamos los tejidos que usamos para forros transpirables, faldones, cerramientos livianos y tapicería de exterior de baja exposición: solución teñida, malla y mezclas con teflón. Frescas, estables y fáciles de lavar.",
    image: "matFabric",
    uses: ["Forros", "Muebles de exterior", "Faldones", "Cerramientos"],
    properties: ["Transpirable", "Fácil de limpiar", "Tratada UV", "Secado rápido"],
    specs: [
      { label: "Peso", value: "200 – 320 g/m²" },
      { label: "Composición", value: "Poliéster solución teñida / mezclas con teflón" },
      { label: "Ancho", value: "1.40 – 1.60 m" },
      { label: "Solidez a la luz", value: "≥ 6 (escala de lanas)" },
    ],
    care: "Lavable a máquina en frío en la mayoría de referencias. Secado al aire. Sin blanqueador ni suavizante.",
    variants: [
      { name: "Grafito", tone: "#3b3d40" },
      { name: "Lino", tone: "#cfc6b4" },
      { name: "Oliva", tone: "#5c5f3b" },
      { name: "Azul acero", tone: "#3a5068" },
    ],
  },
  {
    slug: "hilo-encerado",
    name: "Hilo encerado",
    family: "herrajes",
    kind: "Poliéster de alta tenacidad",
    summary: "Define el ritmo de cada costura y cómo se lee la pieza desde lejos. Nunca es un detalle menor.",
    description:
      "Trabajamos con hilo de poliéster encerado de alta tenacidad para cuero y vinilo, y con hilo de PTFE para todo lo que va a la intemperie. El calibre y el color del hilo se escogen con la pieza delante: la costura es lo primero que se ve.",
    image: "matThread",
    uses: ["Automotriz", "Motos", "Marroquinería", "Exterior"],
    properties: ["Alta tenacidad", "Resistente UV", "No se pudre"],
    specs: [
      { label: "Calibres", value: "Tex 40 · Tex 70 · Tex 90 · Tex 138" },
      { label: "Material", value: "Poliéster encerado / PTFE para intemperie" },
      { label: "Colores en stock", value: "Más de 40 tonos, se pueden pedir otros" },
    ],
    care: "El hilo no exige mantenimiento. Para intemperie, el PTFE no se degrada aunque la lona sí envejezca.",
    variants: [
      { name: "Negro", tone: "#161616" },
      { name: "Crudo", tone: "#d8ccb2" },
      { name: "Coñac", tone: "#8a4b2d" },
      { name: "Rojo", tone: "#8f2020" },
      { name: "Gris", tone: "#6a6d70" },
    ],
  },
  {
    slug: "herrajes",
    name: "Cremalleras y broches",
    family: "herrajes",
    kind: "Herrajes tratados",
    summary: "Cremalleras reforzadas, broches, ojales de bronce y velcro industrial. Lo que cierra la pieza.",
    description:
      "Un forro o una carpa se rinde por el herraje antes que por el material. Usamos cremalleras de espiral reforzada y de cadena metálica, broches de bronce, ojales macizos y velcro industrial, todos tratados para exterior cuando el trabajo lo pide.",
    image: "craftTools",
    uses: ["Forros", "Toldos", "Marroquinería", "Marina"],
    properties: ["Antióxido", "Reforzado", "Reemplazable"],
    specs: [
      { label: "Cremalleras", value: "Espiral #5 / #8 · cadena metálica #5" },
      { label: "Ojales", value: "Bronce macizo, 10 – 40 mm" },
      { label: "Broches", value: "Bronce y latón niquelado" },
    ],
    care: "En exterior, aplicar lubricante seco a las cremalleras una vez al año. Enjuagar con agua dulce si hay exposición a sal.",
    variants: [
      { name: "Bronce", tone: "#7d5a34" },
      { name: "Níquel", tone: "#8f9295" },
      { name: "Negro mate", tone: "#1e1e1e" },
    ],
  },
];

export const getMaterial = (slug: string): Material | undefined =>
  materials.find((m) => m.slug === slug);

/** Todos los usos que aparecen, sin repetir — para el filtro. */
export const materialUses: string[] = [...new Set(materials.flatMap((m) => m.uses))].sort();

/** Todas las propiedades que aparecen, sin repetir — para el filtro. */
export const materialProperties: string[] = [
  ...new Set(materials.flatMap((m) => m.properties)),
].sort();
