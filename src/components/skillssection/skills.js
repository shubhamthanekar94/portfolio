import React from "react";
import Skillsitem from "../../components/skillssection/skillsitem/skillsitem";
import "./skills.css";
import Jslogo from "../../assets/Images/skills/js.png";
import htmllogo from "../../assets/Images/skills/htmlfive.png";
import csslogo from "../../assets/Images/skills/cssthree.png";
import reactlogo from "../../assets/Images/skills/react.png";
import bootstraplogo from "../../assets/Images/skills/bootstrap.png";
import nodelogo from "../../assets/Images/skills/node.png";
import powershelllogo from "../../assets/Images/skills/powershell.png";
import jsonlogo from "../../assets/Images/skills/JSON.png";
import jsxlogo from "../../assets/Images/skills/jsx.png";
import npmlogo from "../../assets/Images/skills/npm.png";
import mongologo from "../../assets/Images/skills/mongo.png";
import mysqllogo from "../../assets/Images/skills/mysql.svg";
import awslogo from "../../assets/Images/skills/aws.png";

const skills = (props) => (
  <section class="white-section" id={props.secid}>
    <h2 class="section-title">{props.sectiontitle}</h2>
    <Skillsitem filepath={Jslogo} alttext="js-logo" />
    <Skillsitem filepath={htmllogo} alttext="html-logo" />
    <Skillsitem filepath={csslogo} alttext="css-logo" />
    <Skillsitem filepath={reactlogo} alttext="react-logo" />
    <Skillsitem filepath={bootstraplogo} alttext="bootstrap-logo" />
    <Skillsitem filepath={nodelogo} alttext="node-logo" />
    <Skillsitem filepath={jsonlogo} alttext="json-logo" />
    <Skillsitem filepath={powershelllogo} alttext="ps-logo" />
    <Skillsitem filepath={jsxlogo} alttext="jsx-logo" />
    <Skillsitem filepath={npmlogo} alttext="npm-logo" />
    <Skillsitem filepath={mongologo} alttext="mongo-logo" />
    <Skillsitem filepath={mysqllogo} alttext="sql-logo" />
    <Skillsitem filepath={awslogo} alttext="aws-logo" />
  </section>
);

export default skills;
