import React from "react";
import Auxilary from "../../../hoc/Auxilary";
const experienceitem = (props) => (
  <Auxilary>
    <h4 class="pt-3 pb-2 text-muted font-weight-bold">{props.companyname}</h4>
    <p class="font-weight-bold">{props.companyproj}</p>
    <p class="float-right font-italic">{props.duration}</p>
    <label>Role:</label>
    <ul>
      <li>{props.desc1}</li>
      <li>{props.desc2}</li>
      <li>{props.desc3}</li>
      <li>{props.desc4}</li>
    </ul>
  </Auxilary>
);

export default experienceitem;
