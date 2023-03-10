import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = props => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main>
          Hi, I'm Mikhail, and <br /> I'm a web developer <br />
        </SectionTitle>
        <SectionText>
          I develop websites that empower your identity and ignite your business
        </SectionText>
        <Button>
          <Link href="https://drive.google.com/file/d/1SUcUtqrZdgfnxU7MJ2AZ1F_oRs1Bmmkh/view?usp=sharing">
            <a
              style={{
                color: 'white',
              }}
              target="_blank"
            >
              Learn More
            </a>
          </Link>
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
