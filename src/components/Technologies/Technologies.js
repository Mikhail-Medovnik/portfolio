import React from "react";
import { DiFirebase, DiReact, DiBootstrap } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle style={{ marginTop: "2rem" }}>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-end</ListTitle>
            <ListParagraph>
              More than 2 years of experience in modern Web Development <br />
              using best practices and following technologies: <br />
              Javascript, Rect.js, Next.js and Typescript.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiBootstrap size="3rem" />
          <ListContainer>
            <ListTitle>
              Libraries <br /> and Features
            </ListTitle>
            <ListParagraph>
              Experience with <br />
              Redux, Redux Toolkit. Familiar with any styling approach (eg. SCSS
              modules, MUI, Ant Design, Styled Component). On my current
              production project I use Mantine.dev library. To test my code I
              use JEST and React-testing-library.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-end</ListTitle>
            <ListParagraph>
              Experience with <br />
              Express.js, MongoDB and Firebase. Solid background in working with
              Contentful CMS.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
