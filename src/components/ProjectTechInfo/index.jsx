import React from 'react';
import { TechInfoContainer, Description, TechItem, Title } from './styles';
import  TechItemComponent  from '../TechItemComponent';

 const ProjectTechInfo = ({ techInfo }) => {
  console.log(techInfo);
  return (
    <TechInfoContainer>
      <Title>Используемые технологии</Title>
      <Description>
        {techInfo.map((tech, index) => (
          <TechItemComponent TechItem={TechItem} {...tech} key={index} />
        ))}
      </Description>
    </TechInfoContainer>
  );
};
export default ProjectTechInfo