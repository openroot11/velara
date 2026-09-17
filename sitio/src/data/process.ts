export interface ProcessPhase {
  index: string;
  title: string;
  /** Short qualifier shown under the title. */
  kicker: string;
  body: string;
}

/** The workshop process, shown on the home page ("De la idea al taller"). */
export const processPhases: ProcessPhase[] = [
  {
    index: "01",
    title: "Consulta",
    kicker: "Sin costo",
    body: "Escuchamos la pieza y a quien la usa. Definimos objetivo, alcance y presupuesto antes de tocar nada.",
  },
  {
    index: "02",
    title: "Medición",
    kicker: "En taller o en su local",
    body: "Toma de medidas y diagnóstico superficie por superficie, donde le quede más cómodo.",
  },
  {
    index: "03",
    title: "Diseño",
    kicker: "Con muestras físicas",
    body: "Materiales, colores, costuras y acabados. Usted toca las muestras antes de que cortemos.",
  },
  {
    index: "04",
    title: "Taller",
    kicker: "Una sola mano",
    body: "Patronaje, corte y confección. Cada pieza pasa por un mismo artesano de principio a fin.",
  },
  {
    index: "05",
    title: "Montaje",
    kicker: "Ajuste fino",
    body: "Instalación y ajuste de tensiones, con revisión final a contraluz.",
  },
  {
    index: "06",
    title: "Entrega",
    kicker: "Con garantía",
    body: "Entregamos con el registro fotográfico del proceso y las indicaciones para mantener el material.",
  },
];
