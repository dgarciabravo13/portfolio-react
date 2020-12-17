import React from "react";
import { Grid, Cell } from "react-mdl";
import {Container, Bar} from "./style";

const Skills = ({skill, progress}) => {
  return (
    <div>
      <Grid>
        <Cell col={12}>
          <Container>
            {skill}
            <Bar progress={progress}></Bar>
          </Container>
        </Cell>
      </Grid>
    </div>
  );
};

export default Skills;
