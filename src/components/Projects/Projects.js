import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLink,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImgWrapper,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle style={{ marginTop: "2rem", marginBottom: "0" }}>
        Projects
      </SectionTitle>
      <GridContainer>
        {projects.map(
          ({ title, description, image, tags, source, visit, id }) => (
            <BlogCard key={id}>
              <ImgWrapper>
                <Img src={image} />
              </ImgWrapper>

              <TitleContent>
                <HeaderThree title={title}></HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLink href={visit} target="_blank">
                  Visit
                </ExternalLink>
                <ExternalLink href={source} target="_blank">
                  Source
                </ExternalLink>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
