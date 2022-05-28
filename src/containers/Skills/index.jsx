import React from 'react'
import { SkillsContainer, SkillsItems } from './styles';
import { DiJavascript1, DiReact, DiSass, DiGithubBadge } from 'react-icons/di';
import { SiRedux, SiTypescript,SiMaterialui } from 'react-icons/si';

const Skills = () => {
  const SIZE = '6rem';
  const COLOR = 'white';
  return (
    <SkillsContainer>
      <h1>
        Я использую следующие  <span>Технологии</span>
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
          <DiGithubBadge size={SIZE} color={COLOR} />
          <span>GitHub</span>
        </div>
      </SkillsItems>
    </SkillsContainer>
  )
}

export default Skills
