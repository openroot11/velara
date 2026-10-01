import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { images, type ImageKey } from "@/data/images";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface Slide {
  eyebrow: string;
  title: string;
  text: string;
  cta: { label: string; to: string };
  image: ImageKey;
}

/** Edite libremente los slides — títulos, textos, botones e imágenes. */
const slides: Slide[] = [
  {
    eyebrow: "Forros y tapicería",
    title: "Tapicería y forros para tu auto.",
    text: "Fabricamos forros, tapicería, carpas de fachada y soluciones personalizadas para vehículos, negocios y espacios.",
    cta: { label: "Ver servicios", to: "/servicios" },
    image: "nvCarruselForros",
  },
  {
    eyebrow: "Tapizado de motos",
    title: "Sillines de moto hechos a la medida.",
    text: "Reconstruimos el sillín desde la base: espuma, forma y material para aguantar sol, lluvia y kilómetros.",
    cta: { label: "Ver tapizado de motos", to: "/servicios/tapizado-de-motos" },
    image: "svcMoto",
  },
  {
    eyebrow: "Carpas y toldos",
    title: "Toldos y carpas para su negocio.",
    text: "Lona técnica cortada y reforzada a la medida. Medimos en su local, confeccionamos y montamos para que aguante la intemperie.",
    cta: { label: "Ver carpas y toldos", to: "/servicios/carpas-para-negocio" },
    image: "svcCarpas",
  },
  {
    eyebrow: "Forros de protección",
    title: "Forros para equipos médicos y de audio.",
    text: "Protegemos equipos de consultorio, de sonido y de trabajo con forros hechos sobre la medida real de cada pieza.",
    cta: { label: "Ver forros para equipos", to: "/servicios/forros" },
    image: "nvForrosProteccion",
  },
  {
    eyebrow: "Servicios para autos",
    title: "Todo el interior de su auto, en un solo taller.",
    text: "Forros, tapicería de sillas, puertas, techos y timón. Le decimos qué hace falta, cuánto tarda y cuánto cuesta.",
    cta: { label: "Ver tapizado automotriz", to: "/servicios/tapizado-automotriz" },
    image: "nvUltimoCarrusel",
  },
];

export default function HomeHero() {
  const reduced = usePrefersReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced || paused) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % slides.length), 6500);
    return () => window.clearInterval(t);
  }, [reduced, paused]);

  const slide = slides[i];

  return (
    <section
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fondo */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: reduced ? 1 : 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 7, ease: "linear" } }}
        >
          <img
            src={images[slide.image].src}
            alt={images[slide.image].alt}
            className="h-full w-full object-cover"
            style={{ objectPosition: images[slide.image].position ?? "center" }}
            loading="eager"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/25 to-transparent" />

      {/* Franja de acento en diagonal */}
      <div className="clip-angle-bl absolute -bottom-1 left-0 h-2 w-2/3 bg-accent sm:h-3" aria-hidden />

      <div className="shell relative z-10 w-full pb-20 pt-28 sm:pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="overline text-accent-soft">{slide.eyebrow}</span>
            <h1 className="mt-5 font-display text-display-xl font-bold text-white">{slide.title}</h1>
            <p className="mt-6 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-white/75">
              {slide.text}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to={slide.cta.to} className="btn btn-teal">
                {slide.cta.label}
              </Link>
              <WhatsAppButton className="btn-outline-light !bg-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Puntos del carrusel */}
        <div className="mt-12 flex gap-2.5">
          {slides.map((s, n) => (
            <button
              key={s.image}
              type="button"
              aria-label={`Ir al slide ${n + 1}`}
              aria-current={n === i}
              onClick={() => setI(n)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-400 ease-soft",
                n === i ? "w-9 bg-accent-soft" : "w-4 bg-white/30 hover:bg-white/50",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
