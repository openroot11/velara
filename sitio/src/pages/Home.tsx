import { useEffect } from "react";
import HomeHero from "@/components/sections/HomeHero";
import Services from "@/components/sections/Services";
import WhatYouNeed from "@/components/sections/WhatYouNeed";
import QuickContact from "@/components/sections/QuickContact";
import WhyVelara from "@/components/sections/WhyVelara";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import FinalCta from "@/components/sections/FinalCta";
import { site } from "@/data/site";

export default function Home() {
  useEffect(() => {
    document.title = `${site.name} | Soluciones a medida para vehículos y negocios`;
  }, []);

  return (
    <>
      <HomeHero />
      <Services />
      <WhatYouNeed />
      <WhyVelara />
      <Projects />
      <QuickContact />
      <Process />
      <FinalCta />
    </>
  );
}
