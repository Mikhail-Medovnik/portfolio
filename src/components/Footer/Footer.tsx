"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "@/src/ui/primitives";
import { privateData } from "@/src/constants/constants";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./Footer.styles";

const Footer = () => (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Telegram</LinkTitle>
        <LinkItem
          href={privateData.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          @medovnik
        </LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>E-mail</LinkTitle>
        <LinkItem href={`mailto:${privateData.email}`}>
          {privateData.email}
        </LinkItem>
      </LinkColumn>
    </LinkList>
    <SocialContainer>
      <CompanyContainer>
        <Slogan>Innovating one project at a time</Slogan>
      </CompanyContainer>
      <SocialIconsContainer>
        <SocialIcons
          href={privateData.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href={privateData.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </SocialContainer>
  </FooterWrapper>
);

export default Footer;
