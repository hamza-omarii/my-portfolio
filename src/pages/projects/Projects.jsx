import React, { useState } from "react";

import {
  ProjectStyle,
  SingleProject,
  ProjectsBox,
  ImgProjact,
  Name,
  Tabs,
  Tab,
  Information,
  Tools,
  Buttons,
  Button,
} from "./Style";

import Container from "../../components/Container";
import Title from "../../components/Title";
import { BiCodeBlock, BiLinkExternal } from "react-icons/bi";
import MyProjects from "../../projects";
import { Fade, Slide } from "react-awesome-reveal";

const Projects = () => {
  const [type, setType] = useState("all");
  const [projects, setProjects] = useState(MyProjects);

  const handleProjects = (type) => {
    setType(type);
    if (type === "all") {
      setProjects(MyProjects);
    } else {
      let filtered_projects = MyProjects.filter(
        (project) => project.type === type
      );
      setProjects(filtered_projects);
    }
  };

  return (
    <ProjectStyle id="projects">
      <Container>
        <Title>projects</Title>
        <Slide>
          <Tabs>
            <Tab
              onClick={() => handleProjects("all")}
              className={type === "all" ? "active" : ""}
            >
              all
            </Tab>
            <Tab
              onClick={() => handleProjects("laravel")}
              className={type === "laravel" ? "active" : ""}
            >
              laravel
            </Tab>
            <Tab
              onClick={() => handleProjects("react")}
              className={type === "react" ? "active" : ""}
            >
              react app
            </Tab>
            <Tab
              onClick={() => handleProjects("vanilla_js")}
              className={type === "vanilla_js" ? "active" : ""}
            >
              vanilla js
            </Tab>
            <Tab
              onClick={() => handleProjects("bootstrap")}
              className={type === "bootstrap" ? "active" : ""}
            >
              bootstrap
            </Tab>
          </Tabs>
        </Slide>

        <ProjectsBox>
          {projects.map((project) => (
            <SingleProject key={project.id}>
              <Fade delay={300}>
                <ImgProjact src={project.image} />
                <Information>
                  <Name>{project.name}</Name>
                  <Tools>{project.tools.map((tool) => tool)}</Tools>
                  <Buttons>
                    <Button href={project.link_code} target="_blank">
                      <BiCodeBlock size={30} />
                      code
                    </Button>

                    <Button href={project.link_demo} target="_blank">
                      <BiLinkExternal size={30} />
                      demo
                    </Button>
                  </Buttons>
                </Information>
              </Fade>
            </SingleProject>
          ))}
        </ProjectsBox>
      </Container>
    </ProjectStyle>
  );
};

export default Projects;
