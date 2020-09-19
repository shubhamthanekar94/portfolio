import React from "react";
import Awardsitem from "./awardsitem/awardsitem";
const awards = (props) => (
  <section class="gray-section" id={props.secid}>
    <div class="container-fluid">
      <h2 class="section-title">{props.sectiontitle}</h2>
      <ol class="font-weight-bold">
        <Awardsitem
          award=" 1st Rank (Gold Medalist) in VIT University for academic year 2016-2018
          in M.Tech. Computer Science with Cloud Computing."
          location="-VIT University, Chennai 2018"
        />
        <Awardsitem
          award=" 1st prize at 1st international conference of paper presentation and
        project competition on data engineering and communication
        technology-March 2016 held at Lavasa Pune."
          location="-ICPCDECT Lavasa, Pune 2016"
        />
      </ol>
    </div>
  </section>
);
export default awards;
