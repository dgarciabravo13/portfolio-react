import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  CardActions,
  Button,
  CardText,
} from "react-mdl";
import { Container, CardStyle, TitleStyle } from "./style";

const Projects = () => {
  const [state, setState] = useState({ activeTab: 0 });

  const toggleCategories = () => {
    if (state.activeTab === 0) {
      return (
        <Container>
          <CardStyle shadow={5}>
            <TitleStyle>React Projects #1</TitleStyle>
            <CardText>Este es el texto para el proyecto uno de React</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
          </CardStyle>

          <CardStyle shadow={5}>
            <TitleStyle>React Projects #2</TitleStyle>
            <CardText>Este es el texto para el proyecto uno de React</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
          </CardStyle>

          <CardStyle shadow={5}>
            <TitleStyle>React Projects #3</TitleStyle>
            <CardText>Este es el texto para el proyecto uno de React</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
          </CardStyle>
        </Container>
      );
    } else if (state.activeTab === 1) {
      return (
        <div>
          <h1>This is VueJS</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>This is Angular</h1>
        </div>
      );
    }
  };
  return (
    <div className="demo-tabs">
      <Tabs
        activeTab={state.activeTab}
        onChange={(tabId) => setState({ activeTab: tabId })}
        ripple
      >
        <Tab>React</Tab>
        <Tab>VueJS</Tab>
        <Tab>Angular</Tab>
      </Tabs>
      <section>
        <Grid>
          <Cell col={12}>
            <div className="content">{toggleCategories()}</div>
          </Cell>
        </Grid>
      </section>
    </div>
  );
};

export default Projects;
