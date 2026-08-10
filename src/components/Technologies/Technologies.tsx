"use client";

import { DiNodejsSmall, DiReact } from "react-icons/di";
import { TbComponents, TbSparkles } from "react-icons/tb";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "@/src/ui/primitives";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./Technologies.styles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle style={{ marginTop: "2rem" }}>Technologies</SectionTitle>
    <SectionText>
      Five years of production frontend work — here&apos;s the stack I
      actually ship with.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend Engineering</ListTitle>
          <ListParagraph>
            5+ years building production React and Next.js applications in
            strict TypeScript. Day to day: App Router, SSR/SSG, NX
            monorepos and microfrontends, FSD architecture, and Canvas/SVG
            work for high-load, animation-heavy interfaces.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <TbComponents size="3rem" />
        <ListContainer>
          <ListTitle>UI, State &amp; Testing</ListTitle>
          <ListParagraph>
            Zustand and TanStack Query for state and data fetching.
            SCSS/CSS Modules, Tailwind, Mantine and Framer Motion on the UI
            layer, documented in Storybook. Everything ships with Jest and
            React Testing Library coverage.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Backend &amp; Platform</ListTitle>
          <ListParagraph>
            Node.js and Express services on PostgreSQL, REST and WebSocket
            APIs, headless CMS integrations (Contentful, Directus) and S3
            media pipelines. Plus GitLab CI/CD, Vite and Webpack builds,
            i18n and A/B testing infrastructure.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <TbSparkles size="3rem" />
        <ListContainer>
          <ListTitle>AI-Assisted Development</ListTitle>
          <ListParagraph>
            Cursor and Claude Code in daily use: custom agent rules and
            project instructions, AI agents wired into real team
            workflows, and CI/CD automation that opens GitLab merge
            requests. Treated as tooling — review and tests still decide
            what ships.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
