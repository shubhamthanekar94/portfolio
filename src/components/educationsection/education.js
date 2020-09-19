import React from "react";
import Educationitem from "../educationsection/educationitem/educationitem";

const education = (props) => (
  <section class="gray-section" id={props.secid}>
    <div class="container-fluid">
      <h2 class="section-title">{props.sectiontitle}</h2>
      <Educationitem
        degree="MTech in Computer Science with Specialization in Cloud Computing"
        college="VIT University, Chennai"
        duration="July 2016 - May 2018"
        cgpa="CGPA - 8.80"
      />
      <Educationitem
        degree="BE in Computer Science and Engineering"
        college="D. Y. Patil College of Engineering and Technology, Kolhapur"
        duration="July 2012 - May 2016"
        cgpa="Percentage - 60.62 %"
      />
    </div>
  </section>
);

export default education;
