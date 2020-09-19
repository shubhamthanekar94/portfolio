import React from "react";
import Experienceitem from "../experiencesection/experienceitem/experienceitem";
const experience = (props) => (
  <section class="white-section" id={props.secid}>
    <div class="container-fluid">
      <h2 class="section-title">{props.sectiontitle}</h2>
      <Experienceitem
        companyname="Dell Technologies Pvt Ltd (Trueblue)"
        companyproj="Project - Dell Application Development and Management"
        duration="Aug 2018 - Aug 2020"
        desc1="Web application development and management."
        desc2="Experience in working on frontend and backend tech stacks."
        desc3="Explosure on database management systems such as MongoDB and MySQL"
        desc4="Worked as an individual as well as team member for various customer bug
        fixes and feature enhancements."
      />
      <Experienceitem
        companyname="Noia Solutions and Networks Pvt Ltd (Internship)"
        companyproj="Project -Nokia Canteen Calendar and Feedback Center"
        duration="Oct 2017 - Apr 2018"
        desc1=" This project is aimed to help Nokia employees to check daily Canteen
        menu and they can submit their feedback for the same."
        desc2="Worked as a full stack developer for development and maintainince of the
        web app."
        desc3=" Used React JS as a front end and Node Js as a backend to store the
        clender details and customer feedback"
        desc4=" MongoDB is used to store the applicaion data."
      />
    </div>
  </section>
);

export default experience;
