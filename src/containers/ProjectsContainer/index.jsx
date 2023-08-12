import React from 'react';
import {
  StyledProjectsContainer,
  Title,
  Container,
  ShowAllButton,
} from './styles';
import  ProjectInfo  from '../../components/ProjectInfo';
import { projectsData } from '../../assets/data/projectsData';
import { motion } from 'framer-motion';

 const ProjectsContainer = () => {
  const projects = [...projectsData];
  const projectsToDisplay = projects.slice(0, 2);

  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const posiblesColors = ['#00b4d8', '#51ffafc2', '#ff7d00', '#ff0054'];
  const color=()=>{
   const colors=posiblesColors.splice(Math.random() * posiblesColors.length,1,)
   //console.log(colors)
   return colors
  }
  return (
    <StyledProjectsContainer>
      <Title>
        Мои <span>Проекты</span>
      </Title>

      {/*<Description>
        Все проекты написанны с новыч течнология и никаких legacy -------Доработать</strong>
      </Description>*/}

      <Container
        as={motion.div}
        initial='offscreen'
        variants={cardVariants}
        whileInView='onscreen'
        viewport={{ once: true }}>
        {projectsToDisplay.map((project) => (
          <ProjectInfo {...project} colorToUse={color} key={project.id} />
        ))}
      </Container> 

      <ShowAllButton to='/projects'>Показать еще</ShowAllButton>
    </StyledProjectsContainer>
  );
};
export default ProjectsContainer