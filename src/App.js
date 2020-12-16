import React from "react";
import { Layout, Content } from "react-mdl";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="demo-big-content">
        <Layout>
          <NavBar />
          <Content>
            <div className="page-content" />
            <Main></Main>
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
