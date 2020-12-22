import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import { Cell, ListItem } from "react-mdl";
import {
  Container,
  GridStyle,
  H2,
  HR,
  ItemContent,
  Paragraph,
  Icon,
  Content,
  Img,
} from "./style";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const { resume } = useContext(PortfolioContext);

  return (
    <Container>
      <GridStyle>
        <Cell col={6}>
          <H2>{resume.name}</H2>
          <Img src={resume.avatarURL} alt="avatar" />
          <Paragraph>{resume.aboutme}</Paragraph>
        </Cell>
        <Cell col={6}>
          <H2>Contact Me</H2>
          <HR />

          <Content>
            <ListItem>
              <ItemContent>
                <Icon icon={faPhone}></Icon>
                {resume.mobile}
              </ItemContent>
            </ListItem>

            <ListItem>
              <ItemContent>
                <Icon icon={faEnvelope}></Icon>
                {resume.email}
              </ItemContent>
            </ListItem>

            <ListItem>
              <ItemContent>
                <Icon icon={faSkype}></Icon>
                {resume.skype}
              </ItemContent>
            </ListItem>
          </Content>
        </Cell>
      </GridStyle>
    </Container>
  );
};

export default Contact;
