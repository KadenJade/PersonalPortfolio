import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name's Kaden. I'm junior frontend engineer committed to leveraging my
        skills for creating positive change in the world. With a strong focus on
        self-improvement, I'm dedicated to contributing to impactful projects
        that make a difference in people's lives.
      </SectionText>
      <Button
        onCLick={() =>
          (window.location = "https://www.linkedin.com/in/kadengraybill/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
