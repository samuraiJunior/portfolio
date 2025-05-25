import React from 'react';
import { ProjectDetailTechsContainer, TechItem } from './styles';
import  TechItemComponent  from '../TechItemComponent';
import { Description, Title } from '../ProjectTechInfo/styles';


 const ProjectDetailTechs = ({ techInfo }) => {
  return (
    <ProjectDetailTechsContainer>
      <Title>Используемые технологии</Title>
      
      <Description>
        {techInfo.map((tech) => (
          <TechItemComponent key={tech.name} TechItem={TechItem} {...tech} />
        ))}
      </Description>
    </ProjectDetailTechsContainer>
  );
};
export default ProjectDetailTechs