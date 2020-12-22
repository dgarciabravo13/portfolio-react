import React from "react";
import { Grid, Cell } from "react-mdl";
import { H4,Paragraph } from "./style";
const Experience = ({ experience }) => {
  return (
    <div>
      {experience.map((job, index) => {
        return(
          <Grid key={index}>
          <Cell col={4}>
          {job.startMonth}/{job.startYear} - {job.endMonth}/{job.endYear}
          </Cell>
          <Cell col={8}>
            <H4>{job.jobName}</H4>
            <Paragraph>{job.jobTitle}</Paragraph>
            <p>{job.jobDescription}</p>
          </Cell>
        </Grid>
        )
      })}
    </div>
  );
};

export default Experience;