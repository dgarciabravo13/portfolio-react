import React,{useContext} from "react";
import {PortfolioContext} from "../../context/PortfolioContext";
import { Grid, Cell } from "react-mdl";
import { CellRight, Container, Img, H2, H4, HR } from "./style";
import Education from "../Education";
import Experience from "../Experience";
import Skills from "../Skills";

const Resume = () => {
  const {resume} = useContext(PortfolioContext);
  const {education} = resume;
  console.log(education);
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <Container>
            <Img
              src={resume.avatarURL}
              alt="avatar"
            />
          </Container>
          <H2>{resume.name}</H2>
          <H4>{resume.profession}</H4>
          <HR />
          <p>{resume.aboutme}
          </p>
          <HR />
          <h5>Teléfono</h5>
          <p>{resume.mobile}</p>
          <h5>Email</h5>
          <p>{resume.email}</p>
          <HR />
        </Cell>
        <CellRight col={8}>
          <h2>Educación</h2>
          <Education education={education}/>
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
