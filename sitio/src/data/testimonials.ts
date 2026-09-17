export interface Testimonial {
  quote: string;
  client: string;
  /** What the job was: a vehicle, a venue, a batch of pieces. */
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Entregaron la camioneta como nueva y en la fecha que dijeron. Ni un peso de más.",
    client: "Cliente particular",
    context: "Camioneta de trabajo",
  },
  {
    quote:
      "Trataron la moto como una pieza de diseño, no como una reparación. Se nota en cada costura.",
    client: "Taller de motos",
    context: "Moto de reparto",
  },
  {
    quote:
      "La carpa lleva dos años aguantando sol y aguacero, y sigue tensa como el primer día.",
    client: "Restaurante",
    context: "Terraza exterior",
  },
  {
    quote:
      "Pedimos forros para toda la flota y llegaron idénticos, pieza por pieza.",
    client: "Empresa de reparto",
    context: "14 vehículos",
  },
  {
    quote:
      "Fueron hasta el local a medir, mandaron el diseño y quedó exacto. Muy serios.",
    client: "Local comercial",
    context: "Toldo de fachada",
  },
];
