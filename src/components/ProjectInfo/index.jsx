import React from 'react';
import  ProjectMainInfo  from '../ProjectMainInfo';
import  ProjectTechInfo  from '../ProjectTechInfo';
import { StyledProjectInfo, Container } from './styles';

 const ProjectInfo = ({ techInfo, ...project }) => {
  
  return (
    <StyledProjectInfo>
      <Container>
        <ProjectTechInfo techInfo={techInfo} />
        <ProjectMainInfo
          {...project}
        />
      </Container>
    </StyledProjectInfo>
  );
};
export default ProjectInfo