"use client";

import Link from "next/link";
import { Section, SectionText, SectionTitle } from "@/src/ui/primitives";

export default function NotFound() {
  return (
    <Section $nopadding>
      <SectionTitle>404 — Page not found</SectionTitle>
      <SectionText>
        The page you&apos;re looking for doesn&apos;t exist.{" "}
        <Link href="/">Go back home</Link>.
      </SectionText>
    </Section>
  );
}
