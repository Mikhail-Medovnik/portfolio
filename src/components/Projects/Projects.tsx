"use client";

import { Section, SectionDivider, SectionTitle } from "@/src/ui/primitives";
import { projects } from "@/src/constants/constants";
import {
  BlogCard,
  CardInfo,
  ExternalLink,
  GridContainer,
  HeaderThree,
  Hr,
  ImgWrapper,
  StyledImage,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./Projects.styles";

const Projects = () => (
  <Section $nopadding id="projects">
    <SectionDivider />
    <SectionTitle style={{ marginTop: "2rem", marginBottom: "0" }}>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects.map(({ id, title, description, image, tags, source, visit }) => (
        <BlogCard key={id}>
          <ImgWrapper>
            <StyledImage
              src={image}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </ImgWrapper>

          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLink href={visit} target="_blank" rel="noopener noreferrer">
              Visit
            </ExternalLink>
            <ExternalLink href={source} target="_blank" rel="noopener noreferrer">
              Source
            </ExternalLink>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
