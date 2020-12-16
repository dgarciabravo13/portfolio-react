import React from "react";
import { Cell } from "react-mdl";
import {
  faGithub,
  faLinkedin,
  faFreeCodeCamp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  Container,
  GridStyle,
  Img,
  BannerText,
  H1,
  HR,
  Paragraph,
  SocialLinks,
  Icon
} from "./style";

const LandingPage = () => {
  return (
    <Container>
      <GridStyle>
        <Cell col={12}>
          <Img src="https://freesvg.org/img/Male-Avatar.png" alt="avatar" />
          <BannerText>
            <H1>Full Stack Web Developer</H1>
            <HR />
            <Paragraph>
              React | Vue | MongoDB | Nodejs | Express | JavaScript | CSS |
              HTML5
            </Paragraph>
            <SocialLinks>
              <a href="http://www.google.es" target="_blank" rel="noreferrer">
                <Icon icon={faGithub} />
              </a>
              <a href="http://www.google.es" target="_blank" rel="noreferrer">
                <Icon icon={faLinkedin} />
              </a>
              <a href="http://www.google.es" target="_blank" rel="noreferrer">
                <Icon icon={faFreeCodeCamp} />
              </a>
              <a href="http://www.google.es" target="_blank" rel="noreferrer">
                <Icon icon={faYoutube} />
              </a>
            </SocialLinks>
          </BannerText>
        </Cell>
      </GridStyle>
    </Container>
  );
};

export default LandingPage;
