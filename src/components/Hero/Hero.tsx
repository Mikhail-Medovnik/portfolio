"use client";

import { Section, SectionText, SectionTitle } from "@/src/ui/primitives";
import Button from "@/src/ui/Button";
import { LeftSection } from "./Hero.styles";

const Hero = () => (
  <Section $row $nopadding>
    <LeftSection>
      <SectionTitle $main as="h1">
        Hi, I&apos;m Mikhail, and <br /> I&apos;m a web developer <br />
      </SectionTitle>
      <SectionText>
        I develop websites that empower your identity and ignite your
        business
      </SectionText>
      <Button>
        <a
          href="/download/Mikhail_Medovnik_Frontend_Developer_CV.pdf"
          download="Mikhail_Medovnik_Frontend_Developer_CV.pdf"
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
