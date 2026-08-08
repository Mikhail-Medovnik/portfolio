"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { SocialIcons } from "@/src/ui/primitives";
import { privateData } from "@/src/constants/constants";
import {
  Container,
  Div1,
  Div2,
  Div3,
  LogoLink,
  NavLink,
  Span,
} from "./Header.styles";

const Header = () => (
  <Container>
    <Div1>
      <LogoLink href="/">
        <DiCssdeck size="3rem" />
        <Span>Portfolio</Span>
      </LogoLink>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
