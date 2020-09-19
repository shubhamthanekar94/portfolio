import React from "react";
import "./navbar.css";
import Navitems from "../navitems/navitems";
const navbar = (props) => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Portfolio
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <Navitems link="#about">About</Navitems>
          <Navitems link="#experience">Experience</Navitems>
          <Navitems link="#education">Education</Navitems>
          <Navitems link="#skills">Skills</Navitems>
          <Navitems link="#tools">Tools</Navitems>
          <Navitems link="#projects">Projects</Navitems>
          <Navitems link="#awards">Awards</Navitems>
        </ul>
      </div>
    </nav>
  </div>
);
export default navbar;
