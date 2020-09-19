import React from "react";
import Auxilary from "../../../hoc/Auxilary";

const projitem = (props) => (
  <Auxilary>
    <h4 class="pt-3 pb-2 text-muted font-weight-bold">{props.projtitle} </h4>
    <ul class="font-weight-bold">
      <li class="pb-2">{props.disc}</li>
      <li>{props.tech}</li>
    </ul>
  </Auxilary>
);
export default projitem;
