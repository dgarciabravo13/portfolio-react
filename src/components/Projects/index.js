import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

const Projects = (props) => {
  const [state, setState] = useState({ activeTab: 0 });

  const toggleCategories = () => {
    if (state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: "url(https://reactjs.org/logo-og.png) center / cover",
            }}
          >
            React Projects #1
          </CardTitle>
          <CardText>Este es el texto para el proyecto uno de React</CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Codepen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
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
