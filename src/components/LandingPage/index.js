import React from "react";
import { Cell } from "react-mdl";
import { Container, GridStyle, Img, BannerText, H1 } from "./style";

const LandingPage = () => {
  return (
    <Container>
      <GridStyle>
        <Cell col={12}>
          <Img
            src="https://freesvg.org/img/Male-Avatar.png"
            alt="avatar"
          />
          <BannerText>
            <H1>Full Stack  Web Developer</H1>
          </BannerText>
        </Cell>
      </GridStyle>
    </Container>
  );
};

export default LandingPage;
