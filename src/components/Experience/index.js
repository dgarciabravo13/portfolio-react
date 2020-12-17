import React from "react";
import { Grid, Cell } from "react-mdl";
import { H4 } from "./style";
const Experience = ({ startYear, endYear, jobName, jobDescription }) => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          {startYear} - {endYear}
        </Cell>
        <Cell col={8}>
          <H4>{jobName}</H4>
          <p>{jobDescription}</p>
        </Cell>
      </Grid>
    </div>
  );
};

export default Experience;