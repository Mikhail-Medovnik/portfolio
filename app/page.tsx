"use client";

import BackgroundAnimation from "@/src/components/BackgroundAnimation/BackgroundAnimation";
import Hero from "@/src/components/Hero/Hero";
import Projects from "@/src/components/Projects/Projects";
import Technologies from "@/src/components/Technologies/Technologies";
import Timeline from "@/src/components/TimeLine/TimeLine";
import { Section } from "@/src/ui/primitives";
import { privateData } from "@/src/constants/constants";
import { siteUrl } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mikhail Medovnik",
  jobTitle: "Frontend Developer",
  url: siteUrl,
  sameAs: [privateData.github, privateData.linkedIn, privateData.telegram],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Section $grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
    </>
  );
}
