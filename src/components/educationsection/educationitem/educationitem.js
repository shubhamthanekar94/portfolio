import React from "react";
import Auxilary from "../../../hoc/Auxilary";

const educationitem = (props) => (
  <Auxilary>
    <h4 class="pt-3 pb-2 text-muted font-weight-bold">{props.degree}</h4>
    <p class="font-italic font-weight-bold">{props.college}</p>
    <p class="float-right font-italic">{props.duration}</p>
    <p>{props.cgpa}</p>
  </Auxilary>
);

export default educationitem;
