import React from "react";
import { SkillsContainer, SkillsItems } from "./styles";
import { DiJavascript1, DiReact, DiSass } from "react-icons/di";
import {
  SiRedux,
  SiTypescript,
  SiMaterialui,
  SiNextdotjs,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";
import ElementPlus from "../../utils/TechIcons/ElemntPlus";
import GrpcIcon from "../../utils/TechIcons/GrpcIcon";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  const SIZE = "6rem";
  const COLOR = "white";
  return (
    <SkillsContainer>
      <h1>
        Я использую следующие <span>Технологии</span>
      </h1>

      <SkillsItems>
        <div>
          <DiJavascript1 size={SIZE} color={COLOR} />
          <span>JavaScript</span>
        </div>

        <div>
          <DiReact size={SIZE} color={COLOR} />
          <span>React</span>
        </div>
        
        <div>
          <SiVuedotjs size={SIZE} color={COLOR} />
          <span>Vue</span>
        </div>

        <div>
          <SiRedux size={SIZE} color={COLOR} />
          <span>Redux</span>
        </div>

        <div>
          <SiTypescript size={SIZE} color={COLOR} />
          <span>TypeScript</span>
        </div>
        <div>
          <SiMaterialui size={SIZE} color={COLOR} />
          <span>Material UI</span>
        </div>

        <div>
          <DiSass size={SIZE} color={COLOR} />
          <span>Sass</span>
        </div>

        <div>
          <FaGitAlt size={SIZE} color={COLOR} />
          <span>Git</span>
        </div>
        <div>
          <SiNextdotjs size={SIZE} color={COLOR} />
          <span>Next</span>
        </div>
        <div>
          <GrpcIcon size={SIZE} color={COLOR} />
          <span>GRPC-web</span>
        </div>
        <div>
          <ElementPlus size={SIZE} color={COLOR} />
          <span>Element-plus</span>
        </div>
        <div>
          <SiVuetify size={SIZE} color={COLOR} />
          <span>Vee-vulidate</span>
        </div>
      </SkillsItems>
    </SkillsContainer>
  );
};

export default Skills;
