import React from "react";
import { Grid, Cell } from "react-mdl";
import { H4 } from "./style";
const Education = ({ startYear, endYear, schoolName, schoolDescription }) => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          {startYear} - {endYear}
        </Cell>
        <Cell col={8}>
          <H4>{schoolName}</H4>
          <p>{schoolDescription}</p>
        </Cell>
      </Grid>
    </div>
  );
};

export default Education;
