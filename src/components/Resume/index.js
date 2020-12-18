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
            schoolName={"IronHack Madrid"}
            schoolTitle={"Bootcamp Web Development:"}
            schoolDescription={"Version Control System - HTML/CSS & Responsive Web Design - Bootstrap - HTML Canvas - Javascript - MongoDB - ExpressJS - NodeJS - Axios - React - API Rest - Material UI - Styled Components - React Hook Form - Redux."}
          />
          <Education
            startYear={2001}
            endYear={2003}
            schoolName={"Afi Aula de Formación Informática"}
            schoolTitle={"Master en sistemas de la información (Desarrollo):"}
            schoolDescription={
              "Java, .Net, Oracle."
            }
          />
          <HR />
          <h2>Experiencia Laboral</h2>
          <Experience
            startYear={2003}
            endYear={2020}
            jobName={"Comercial Impormovil S.A."}
            jobTitle={"Soporte, Sistemas y Seguridad :"}
            jobDescription={
              "Administración y gestión de firewalls: Fortinet,WatchGuard, Barracuda Spam Firewall y BlueCoat. Administración y gestión de Antivirus Kaspersky y McAfee. Gestión de Incidencias del ERP, en ISeries as400. Conocimientos de SQL y MySQL Browser. Administración y gestión de Windows Server, Directorio Activo, servidor de nombres, Impresoras y copias de seguridad. Mantenimiento de las comunicaciones: VpnIP de Telefónica, CentrexIP y Macrolan. Tareas de microinformática en general. Gestión del software de la empresa: Office365 (Administrador),TecLocal, TecWeb, Libra e IBM i Series"
            }
          />
          <HR />
          <h2>Habilidades</h2>
          <Skills skill={"JavaScript"} progress={75}/>
          <Skills skill={"NodeJs"} progress={50}/>
          <Skills skill={"React"} progress={50}/>
          <Skills skill={"Vue"} progress={25}/>
          <Skills skill={"Express"} progress={50}/>
          <Skills skill={"HTML"} progress={70}/>
          <Skills skill={"CSS"} progress={70}/>
        </CellRight>
      </Grid>
    </div>
  );
};

export default Resume;
