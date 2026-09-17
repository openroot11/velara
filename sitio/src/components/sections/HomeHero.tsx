import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { images, type ImageKey } from "@/data/images";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";

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
    eyebrow: "Taller de cuero y tapicería",
    title: "El oficio del cuero, en cada superficie.",
    text: "Tapizado automotriz y de motos, carpas y toldos para negocio y forros a la medida. Cortado, cosido y montado a mano en Barranquilla.",
    cta: { label: "Ver servicios", to: "/servicios" },
    image: "heroInterior",
  },
  {
    eyebrow: "Catálogo de materiales",
    title: "Materiales que aguantan el Caribe.",
    text: "Cuero de plena flor, vinilo náutico, lona acrílica y telas técnicas — cada uno con su ficha, sus usos y su cuidado.",
    cta: { label: "Ver el catálogo", to: "/materiales" },
    image: "pageMateriales",
  },
  {
    eyebrow: "Su próximo trabajo",
    title: "Cuéntenos qué hay que cubrir.",
    text: "Un asiento, una moto, una terraza o una flota entera. Le decimos qué hace falta, cuánto tarda y cuánto cuesta el mismo día hábil.",
    cta: { label: "Solicitar cotización", to: "/cotizar" },
    image: "svcCarpas",
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
            <h1 className="mt-5 font-display text-display-xl font-light text-white">{slide.title}</h1>
            <p className="mt-6 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-white/75">
              {slide.text}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to={slide.cta.to} className="btn btn-teal">
                {slide.cta.label}
              </Link>
              <Link to="/cotizar" className="btn btn-outline-light">
                Solicitar cotización
              </Link>
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
