import React from "react";
import { Cell } from "react-mdl";
import {
  faGithub,
  faLinkedin,
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
              React | VueJS | MongoDB | NodeJS | Express | JavaScript | CSS |
              HTML5
            </Paragraph>
            <SocialLinks>
              <a href="https://github.com/dgarciabravo13/" target="_blank" rel="noreferrer">
                <Icon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/davidgarciabr/" target="_blank" rel="noreferrer">
                <Icon icon={faLinkedin} />
              </a>
            </SocialLinks>
          </BannerText>
        </Cell>
      </GridStyle>
    </Container>
  );
};

export default LandingPage;
