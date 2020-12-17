import React from "react";
import { Navigation, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import { HeaderStyle } from "./style";

const NavBar = () => {
  const toggleDrawerFn = () => {
    const layout = document.querySelector(".mdl-js-layout");
    layout.MaterialLayout.toggleDrawer();
  };

  return (
    <>
      <HeaderStyle title="Title" scroll>
        <Navigation>
          <Link to="/resume">Resume</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </Navigation>
      </HeaderStyle>
      <Drawer title="Title">
        <Navigation>
          <Link to="/resume" onClick={toggleDrawerFn}>
            Resume
          </Link>
          <Link to="/aboutme" onClick={toggleDrawerFn}>
            About Me
          </Link>
          <Link to="/projects" onClick={toggleDrawerFn}>
            Projects
          </Link>
          <Link to="/Contact" onClick={toggleDrawerFn}>
            Contact
          </Link>
        </Navigation>
      </Drawer>
    </>
  );
};

export default NavBar;
