import React from "react";
import { Grid, Cell } from "react-mdl";
import { H4,Paragraph } from "./style";
const Experience = ({ startYear, endYear, jobName, jobTitle, jobDescription }) => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          {startYear} - {endYear}
        </Cell>
        <Cell col={8}>
          <H4>{jobName}</H4>
          <Paragraph>{jobTitle}</Paragraph>
          <p>{jobDescription}</p>
        </Cell>
      </Grid>
    </div>
  );
};

export default Experience;