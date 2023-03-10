import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
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
} from './FooterStyles';
import { privateData } from '../../constants/constants';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telegram</LinkTitle>
          <LinkItem href={privateData.telegram} target="_blank">
            @medovnik
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:medovnikfl@gmail.com">
            medovnikfl@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href={privateData.github}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={privateData.linkedIn}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
