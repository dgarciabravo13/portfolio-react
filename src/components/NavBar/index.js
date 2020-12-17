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
      <HeaderStyle title={<Link style={{textDecoration:'none', color:'white'}} to="/">My Porfolio</Link>} scroll>
        <Navigation>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </Navigation>
      </HeaderStyle>
      <Drawer title={<Link style={{textDecoration:'none'}} to="/">My Porfolio</Link>}>
        <Navigation>
          <Link to="/resume" onClick={toggleDrawerFn}>
            Resume
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
