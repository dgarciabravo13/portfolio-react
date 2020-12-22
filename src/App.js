import React from "react";
import { Layout, Content } from "react-mdl";
import { BrowserRouter as Router } from "react-router-dom";
import PortfolioContextProvider from "./context/PortfolioContext";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <PortfolioContextProvider>
      <Router>
        <div className="demo-big-content">
          <Layout>
            <NavBar />
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </Router>
    </PortfolioContextProvider>
  );
}

export default App;
