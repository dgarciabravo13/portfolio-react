import React from "react";
import { Grid, Cell } from "react-mdl";
import { H4, Paragraph } from "./style";
const Education = ({ startYear, endYear, schoolName, schoolTitle, schoolDescription }) => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          {startYear} - {endYear}
        </Cell>
        <Cell col={8}>
          <H4>{schoolName}</H4>
          <Paragraph>{schoolTitle}</Paragraph>
          <p>{schoolDescription}</p>
        </Cell>
      </Grid>
    </div>
  );
};

export default Education;
