import React from "react";
import Skillsitem from "../../components/skillssection/skillsitem/skillsitem";
import "../skillssection/skillsitem/skillsitem.css";
import githublogo from "../../assets/Images/tools/github.png";
import gitlablogo from "../../assets/Images/tools/gitlab.svg";
import vsclogo from "../../assets/Images/tools/vscode.png";
import postmanlogo from "../../assets/Images/tools/postman.png";
import robo3tlogo from "../../assets/Images/tools/robo3t.png";
import winlogo from "../../assets/Images/tools/windows.png";
import linuxlogo from "../../assets/Images/tools/linux.png";

const tools = (props) => (
  <section class="white-section" id={props.secid}>
    <h2 class="section-title">{props.sectiontitle}</h2>
    <Skillsitem filepath={githublogo} alttext="github-logo" />
    <Skillsitem filepath={gitlablogo} alttext="gitlab-logo" />
    <Skillsitem filepath={vsclogo} alttext="vscode-logo" />
    <Skillsitem filepath={postmanlogo} alttext="postman-logo" />
    <Skillsitem filepath={robo3tlogo} alttext="robo3t-logo" />
    <Skillsitem filepath={winlogo} alttext="win-logo" />
    <Skillsitem filepath={linuxlogo} alttext="linux-logo" />
  </section>
);

export default tools;
