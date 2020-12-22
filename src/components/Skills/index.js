import React from "react";
import { Grid, Cell } from "react-mdl";
import {Container, Bar} from "./style";

const Skills = ({skills}) => {

  return (
    <div>
      {skills.map((skill,index) => {
        return (
          <Grid key={index}>
          <Cell col={12}>
            <Container>
              {skill.name}
              <Bar progress={Number(skill.value)}></Bar>
            </Container>
          </Cell>
        </Grid>
        )
      })}
    </div>
  );
};

export default Skills;
