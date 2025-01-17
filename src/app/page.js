import Hero from "@/components/Hero";
import React from "react";
import Swiperr from "@/components/muslimbek/FooterSwippper";
import OurTeam from "@/components/OurTeam";
import CreativeWorks from "@/components/CreativeWorks";

export default function page() {
  return (
    <div>
      <Hero />
      <OurTeam />
      <CreativeWorks />
      <Swiperr />
    </div>
  );
}
