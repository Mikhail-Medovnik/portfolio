"use client";

import { Section, SectionText, SectionTitle } from "@/src/ui/primitives";
import Button from "@/src/ui/Button";
import { LeftSection } from "./Hero.styles";

const Hero = () => (
  <Section $row $nopadding>
    <LeftSection>
      <SectionTitle $main as="h1">
        Hi, I&apos;m Mikhail, and <br /> I&apos;m a senior frontend engineer{" "}
        <br />
      </SectionTitle>
      <SectionText>
        I build high-load, production frontend applications with React,
        Next.js, and TypeScript
      </SectionText>
      <Button>
        <a
          href="/download/Mikhail_Medovnik_Senior_Frontend_Engineer.pdf"
          download="Mikhail_Medovnik_Senior_Frontend_Engineer.pdf"
          rel="noopener"
          style={{ color: "white" }}
        >
          Download CV
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
