import React from 'react';
import  ProjectMainInfo  from '../ProjectMainInfo';
import  ProjectTechInfo  from '../ProjectTechInfo';
import { StyledProjectInfo, Container } from './styles';

 const ProjectInfo = ({ title, description, image, techInfo, preview, id,colorToUse }) => {
  
  return (
    <StyledProjectInfo>
      <Container>
        <ProjectTechInfo techInfo={techInfo} />
        <ProjectMainInfo
          colorToUse={colorToUse}
          title={title}
          description={description}
          image={image}
          preview={preview}
          id={id}
        />
      </Container>
    </StyledProjectInfo>
  );
};
export default ProjectInfo