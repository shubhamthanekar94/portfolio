import React from "react";
import Projitem from "./projitem/projitem";
const proj = (props) => (
  <section class="gray-section" id={props.secid}>
    <div class="container-fluid">
      <h2 class="section-title">{props.sectiontitle}</h2>
      <Projitem
        projtitle="Project 1: Online T-shirt selling website using MERN stack"
        disc="The aim of this project is to give web access to users to order a
        variety of T-shirts online."
        tech="Technologies used: mongoDB, ExpressJS, ReactJS, NodeJS."
      />
      <Projitem
        projtitle="Project 2: Cloud Based Greenhouse Management System using IOT"
        disc=" The aim of this project is to automate entire greenhouse by monitoring
          environmental parameters such as temperature, humidity using IoT based
          sensors and cloud based web monitoring portal."
        tech=" Technologies Used: Raspberry PI, IoT Sensors, AWS, NodeJS, HTML, CSS,
          MySQL"
      />
    </div>
  </section>
);
export default proj;
