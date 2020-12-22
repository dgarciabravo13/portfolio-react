import React from "react";
import { Grid, Cell } from "react-mdl";
import { H4, Paragraph } from "./style";
const Education = ({ education }) => {
  return (
    <div>
        {education.map((school,index) => {
          return (
            <Grid key={index}>
              <Cell col={4}>
                {school.startYear} - {school.endYear}
              </Cell>
              <Cell col={8}>
                <H4>{school.schoolName}</H4>
                <Paragraph>{school.schoolTitle}</Paragraph>
                <p>{school.schoolDescription}</p>
              </Cell>
            </Grid>
          );
        })}
    </div>
  );
};

export default Education;
