import React from "react";

const awardsitem = (props) => (
  <li>
    {props.award}
    <p class="font-italic pt-1">{props.location}</p>
  </li>
);
export default awardsitem;
