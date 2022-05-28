import React from "react";
import { SkillsStyle, MySkills, Skill, Lang } from "./Style";
import {
  SiJavascript,
  SiSass,
  SiPhp,
  SiMysql,
  SiVisualstudiocode,
  SiPhpstorm,
  SiPostman,
  SiStyledcomponents,
} from "react-icons/si";
import Title from "../../components/Title";
import Container from "../../components/Container";
import { AiFillHtml5 } from "react-icons/ai";
import { GiCheckboxTree } from "react-icons/gi";

import { VscJson } from "react-icons/vsc";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap, FaReact, FaGithub, FaLaravel } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
  return (
    <SkillsStyle id="skills">
      <Container>
        <Title>skills</Title>
        <Fade cascade delay={300}>
          <MySkills>
            <Skill>
              <GiCheckboxTree size={50} />
              <Lang>problem solving</Lang>
            </Skill>
            <Skill>
              <FaLaravel size={50} />
              <Lang>laravel</Lang>
            </Skill>
            <Skill>
              <SiPhp size={50} />
              <Lang>php</Lang>
            </Skill>
            <Skill>
              <SiMysql size={50} />
              <Lang>mysql</Lang>
            </Skill>
            <Skill>
              <SiJavascript size={45} />
              <Lang>java script</Lang>
            </Skill>
            <Skill>
              <FaReact size={50} />
              <Lang>react</Lang>
            </Skill>
            <Skill>
              <AiFillHtml5 size={50} />
              <Lang>html</Lang>
            </Skill>
            <Skill>
              <IoLogoCss3 size={50} />
              <Lang>css</Lang>
            </Skill>
            <Skill>
              <SiStyledcomponents size={50} />
              <Lang>styled components</Lang>
            </Skill>
            <Skill>
              <FaBootstrap size={50} />
              <Lang>bootstrap</Lang>
            </Skill>
            <Skill>
              <SiSass size={50} />
              <Lang>sass</Lang>
            </Skill>
            <Skill>
              <VscJson size={50} />
              <Lang>api</Lang>
            </Skill>
            <Skill>
              <SiPostman size={50} />
              <Lang>postman</Lang>
            </Skill>
            <Skill>
              <FaGithub size={50} />
              <Lang>git & github</Lang>
            </Skill>
            <Skill>
              <SiVisualstudiocode size={45} />
              <Lang>vs code</Lang>
            </Skill>
            <Skill>
              <SiPhpstorm size={45} />
              <Lang>php storm</Lang>
            </Skill>
          </MySkills>
        </Fade>
      </Container>
    </SkillsStyle>
  );
};

export default Skills;
