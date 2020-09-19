import React from "react";
import "./about.css";
import Profilephoto from "./profilepic/profilepic";
const about = (props) => (
  <section class="profile-section" id={props.secid}>
    <div class="container-fluid">
      <Profilephoto />
      <h2 class="name font-weight-bold">{props.name}</h2>
      <h4>
        {props.designation} <br />({props.years})
      </h4>
      <p class="font-weight-normal">
        2 years of working experience as a Software Engineer with learning and
        result oriented approach. Hands-on experience in building web apps using
        various full stack technologies.
      </p>
    </div>
  </section>
);

export default about;
