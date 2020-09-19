import React from "react";
import "./navitems.css";
const navitems = (props) => (
  <li className="nav-item">
    <a className="nav-link" href={props.link}>
      {props.children}
    </a>
  </li>
);

export default navitems;
