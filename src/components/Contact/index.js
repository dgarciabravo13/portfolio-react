import React from "react";
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
  Img
} from "./style";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <Container>
      <GridStyle>
        <Cell col={6}>
          <H2>David García Bravo</H2>
          <Img
            src="https://cdn0.iconfinder.com/data/icons/diversity-v2-0-volume-08/64/hipsters-white-male-512.png"
            alt="avatar"
          />
          <Paragraph>
            Después de realizar el bootcamp de desarrollo web en Ironhack, donde
            trabajamos con Javascript, HTML, CSS, Express, Node, MongoDB, Axios,
            React, Git y Github, decidí consolidar mis conocimientos con dos
            certificaciones de FreeCodeCamp: Javascript Algorithms and Data-
            Structures y Responsive Web Design. Continúo formándome a través de
            cursos de Udemy donde estoy reforzando mis conocimientos de React.
            Me considero una persona polivalente, dinámica y carismática.Trabajo
            bien en equipo y considero que tener un buen ambiente en el trabajo
            es esencial.
          </Paragraph>
        </Cell>
        <Cell col={6}>
          <H2>Contact Me</H2>
          <HR />

          <Content>
            <ListItem>
              <ItemContent>
                <Icon icon={faPhone}></Icon>
                699 569 169
              </ItemContent>
            </ListItem>

            <ListItem>
              <ItemContent>
                <Icon icon={faEnvelope}></Icon>
                dgarciabravo13@gmail.com
              </ItemContent>
            </ListItem>

            <ListItem>
              <ItemContent>
                <Icon icon={faSkype}></Icon>
                live:.cid.4c297e080b7f4b84{" "}
              </ItemContent>
            </ListItem>
          </Content>
        </Cell>
      </GridStyle>
    </Container>
  );
};

export default Contact;
