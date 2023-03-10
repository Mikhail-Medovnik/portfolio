import React from "react";
import useDownloader from "react-use-downloader";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Link from "next/link";

const Hero = (props) => {
  const { download } = useDownloader();
  const downloadCV = {
    fileUrl: "/download/Mikhail_Medovnik_Frontend_Developer_CV.pdf",
    fileName: "Mikhail_Medovnik_Frontend_Developer_CV.pdf",
  };
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
          <Link href="">
            <a
              onClick={() => download(downloadCV.fileUrl, downloadCV.fileName)}
              style={{
                color: "white",
              }}
            >
              Download CV
            </a>
          </Link>
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
