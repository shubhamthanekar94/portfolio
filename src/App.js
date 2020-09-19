import React, { Component } from "react";
import Layout from "./containers/Layout";
import About from "./components/aboutsection/about";
import Experience from "./components/experiencesection/experience";
import Education from "./components/educationsection/education";
import Skills from "./components/skillssection/skills";
import Project from "./components/projsection/proj";
import Tools from "./components/toolssection/tools";
import Awards from "./components/awardssection/awards";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <About
            name="Shubham Thanekar"
            designation="Software Engineer"
            years="2 Years"
            secid="about"
          />
          <Experience sectiontitle="Experience" secid="experience" />
          <Education sectiontitle="Education" secid="education" />
          <Skills sectiontitle="Skills" secid="skills" />
          <Project sectiontitle="Academic Projects" secid="projects" />
          <Tools sectiontitle="Tools" secid="tools" />
          <Awards sectiontitle="Awards" secid="awards" />
        </Layout>
      </div>
    );
  }
}

export default App;
