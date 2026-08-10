"use client";

import type { IconType } from "react-icons";
import { TbDatabaseCog } from "react-icons/tb";
import { Section, SectionDivider, SectionTitle } from "@/src/ui/primitives";
import { projects } from "@/src/constants/constants";
import type { TProjectPlaceholder } from "@/src/constants/constants";
import {
  BlogCard,
  CardInfo,
  ExternalLink,
  GridContainer,
  HeaderThree,
  Hr,
  ImgWrapper,
  PlaceholderLabel,
  PlaceholderThumb,
  StackBlock,
  StyledImage,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./Projects.styles";

const PLACEHOLDER_ICONS: Record<TProjectPlaceholder, IconType> = {
  cms: TbDatabaseCog,
};

const PLACEHOLDER_LABELS: Record<TProjectPlaceholder, string> = {
  cms: "Internal tool — no public URL",
};

const Projects = () => (
  <Section $nopadding id="projects">
    <SectionDivider />
    <SectionTitle style={{ marginTop: "2rem", marginBottom: "0" }}>
      Projects
    </SectionTitle>
    <GridContainer>
      {projects
        .sort((a, b) => a.id - b.id)
        .map(
          ({
            id,
            title,
            description,
            image,
            placeholder,
            tags,
            source,
            visit,
          }) => {
            const PlaceholderIcon = placeholder
              ? PLACEHOLDER_ICONS[placeholder]
              : null;
            const hasLinks = Boolean(visit || source);

            return (
              <BlogCard key={id}>
                <ImgWrapper>
                  {image ? (
                    <StyledImage
                      src={image}
                      alt={`${title} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  ) : (
                    <PlaceholderThumb>
                      {PlaceholderIcon ? (
                        <PlaceholderIcon size="5rem" aria-hidden />
                      ) : null}
                      {placeholder ? (
                        <PlaceholderLabel>
                          {PLACEHOLDER_LABELS[placeholder]}
                        </PlaceholderLabel>
                      ) : null}
                    </PlaceholderThumb>
                  )}
                </ImgWrapper>

                <TitleContent>
                  <HeaderThree>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <StackBlock $last={!hasLinks}>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagList>
                </StackBlock>
                {hasLinks ? (
                  <UtilityList>
                    {visit ? (
                      <ExternalLink
                        href={visit}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit
                      </ExternalLink>
                    ) : null}
                    {source ? (
                      <ExternalLink
                        href={source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source
                      </ExternalLink>
                    ) : null}
                  </UtilityList>
                ) : null}
              </BlogCard>
            );
          },
        )}
    </GridContainer>
  </Section>
);

export default Projects;
