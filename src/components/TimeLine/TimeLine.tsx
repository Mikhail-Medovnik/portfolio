"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "@/src/ui/primitives";
import { TimeLineData } from "@/src/constants/constants";
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLine.styles";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const scroll = (node: HTMLUListElement, left: number) => {
    node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e: MouseEvent, i: number) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );
      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        scroll(carouselRef.current, 0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        As a frontend developer with over 2 years of experience, I have
        honed my skills in Javascript, React JS, and Typescript to deliver
        exceptional results. My passion for crafting seamless user
        experiences drives me to constantly push the boundaries of what&apos;s
        possible, while my attention to detail ensures that every project
        is delivered to the highest standards. With a proven track record
        of delivering high-quality work on time, I am confident in my
        ability to exceed your expectations and drive success for your
        team.
      </SectionText>

      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        {TimeLineData.map((item, index) => (
          <CarouselMobileScrollNode
            key={item.year}
            $final={index === TOTAL_CAROUSEL_COUNT - 1}
          >
            <CarouselItem
              id={`carousel__item-${index}`}
              $index={index}
              $active={activeItem}
              onClick={(e) => handleClick(e, index)}
            >
              <CarouselItemTitle>
                {item.year}
                <CarouselItemImg
                  width="208"
                  height="6"
                  viewBox="0 0 208 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                    fill="url(#paint0_linear)"
                    fillOpacity="0.33"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-4.30412e-10"
                      y1="0.5"
                      x2="208"
                      y2="0.500295"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop
                        offset="0.79478"
                        stopColor="white"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={item.year}
            $index={index}
            $active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
