import React from "react";
import { Header, Navigation, Drawer } from "react-mdl";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Header title="Title" scroll>
        <Navigation>
          <Link to="/resume">Resume</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </Navigation>
      </Header>
      <Drawer title="Title">
        <Navigation>
          <Link to="/resume">Resume</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </Navigation>
      </Drawer>
    </>
  );
};

export default NavBar;
