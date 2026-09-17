import { useEffect } from "react";
import HomeHero from "@/components/sections/HomeHero";
import Services from "@/components/sections/Services";
import Materials from "@/components/sections/Materials";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FinalCta from "@/components/sections/FinalCta";
import { site } from "@/data/site";

export default function Home() {
  useEffect(() => {
    document.title = `${site.name} — ${site.descriptor}`;
  }, []);

  return (
    <>
      <HomeHero />
      <Services />
      <Materials />
      <BeforeAfter />
      <Projects />
      <Process />
      <Testimonials />
      <FinalCta />
    </>
  );
}
