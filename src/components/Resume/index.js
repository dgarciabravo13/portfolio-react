import React from "react";
import { Grid, Cell } from "react-mdl";
import { CellRight, Container, Img, H2, H4, HR } from "./style";
import Education from "../Education";
import Experience from "../Experience";
import Skills from "../Skills";

const Resume = () => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <Container>
            <Img
              src="https://cdn0.iconfinder.com/data/icons/diversity-v2-0-volume-08/64/hipsters-white-male-512.png"
              alt="avatar"
            />
          </Container>
          <H2>David García Bravo</H2>
          <H4>Programmer</H4>
          <HR />
          <p>
            Después de realizar el bootcamp de desarrollo web en Ironhack, donde
            trabajamos con Javascript, HTML, CSS, Express, Node, MongoDB, Axios,
            React, Git y Github, decidí consolidar mis conocimientos con dos
            certificaciones de FreeCodeCamp: Javascript Algorithms and Data-
            Structures y Responsive Web Design. Continúo formándome a través de
            cursos de Udemy donde estoy reforzando mis conocimientos de React.
            Me considero una persona polivalente, dinámica y carismática.Trabajo
            bien en equipo y considero que tener un buen ambiente en el trabajo
            es esencial.
          </p>
          <HR />
          <h5>Dirección</h5>
          <p>Calle Río Nervión 28</p>
          <h5>Teléfono</h5>
          <p>699 569 169</p>
          <h5>Email</h5>
          <p>dgarciabravo13@gmail.com</p>
          <HR />
        </Cell>
        <CellRight col={8}>
          <h2>Educación</h2>
          <Education
            startYear={2019}
            endYear={2020}
            schoolName={"Ironhack"}
            schoolDescription={
              "BootCamp de desarrollo web: React, Node, Express, HTML, CSS"
            }
          />
          <Education
            startYear={2001}
            endYear={2003}
            schoolName={"Afi Aula de Formación Informática"}
            schoolDescription={
              "Master en programación: Java, .Net, Oracle"
            }
          />
          <HR />
          <h2>Experiencia Laboral</h2>
          <Experience
            startYear={2003}
            endYear={2020}
            jobName={"Comercial Impormovil S.A."}
            jobDescription={
              "Soporte, Sistemas y Seguridad"
            }
          />
          <HR />
          <h2>Habilidades</h2>
          <Skills/>
        </CellRight>
      </Grid>
    </div>
  );
};

export default Resume;
