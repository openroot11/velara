import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import SmoothScroll from "@/components/system/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { captureAdAttribution } from "@/lib/adAttribution";

const Servicios = lazy(() => import("@/pages/Servicios"));
const ServicioDetail = lazy(() => import("@/pages/ServicioDetail"));
const Materiales = lazy(() => import("@/pages/Materiales"));
const MaterialDetail = lazy(() => import("@/pages/MaterialDetail"));
const Nosotros = lazy(() => import("@/pages/Nosotros"));
const Proceso = lazy(() => import("@/pages/Proceso"));
const Recursos = lazy(() => import("@/pages/Recursos"));
const RecursoDetail = lazy(() => import("@/pages/RecursoDetail"));
const Proyectos = lazy(() => import("@/pages/Proyectos"));
const ProjectDetail = lazy(() => import("@/pages/ProjectDetail"));
const Cotizar = lazy(() => import("@/pages/Cotizar"));
const Contacto = lazy(() => import("@/pages/Contacto"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1"
      >
        <Suspense fallback={<div className="min-h-screen bg-paper" />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/:slug" element={<ServicioDetail />} />
            <Route path="/materiales" element={<Materiales />} />
            <Route path="/materiales/:slug" element={<MaterialDetail />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/proceso" element={<Proceso />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/recursos/:slug" element={<RecursoDetail />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/proyectos/:slug" element={<ProjectDetail />} />
            <Route path="/cotizar" element={<Cotizar />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  const reduced = usePrefersReducedMotion();
  // Corre una vez al cargar el sitio (un clic desde un anuncio siempre trae
  // una carga completa, no una navegación de React Router) -- así queda
  // capturado sin importar en qué página caiga la campaña.
  useEffect(() => {
    captureAdAttribution();
  }, []);
  return (
    <MotionConfig reducedMotion={reduced ? "always" : "user"}>
      <SmoothScroll>
        <div className="flex min-h-screen flex-col bg-paper">
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </SmoothScroll>
    </MotionConfig>
  );
}
