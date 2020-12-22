import React,{useContext} from "react";
import {PortfolioContext} from "../../context/PortfolioContext";
import { Grid, Cell } from "react-mdl";
import { CellRight, Container, Img, H2, H4, HR } from "./style";
import Education from "../Education";
import Experience from "../Experience";
import Skills from "../Skills";

const Resume = () => {

  const {resume} = useContext(PortfolioContext);
  
  const {education, experience,skills} = resume;

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
          <Experience experience={experience}/>
          <HR />
          <h2>Habilidades</h2>
          <Skills skills={skills}/>
        </CellRight>
      </Grid>
    </div>
  );
};

export default Resume;
