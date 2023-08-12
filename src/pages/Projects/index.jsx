import React,{ useEffect } from 'react'
import { ProjectsContainer, Span } from './styles';
import { projectsData } from '../../assets/data/projectsData';
import  ProjectDetails  from '../../components/ProjectDetails';
import { BiArrowBack } from 'react-icons/bi';
import Helmet from 'react-helmet';

 const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Проекты</title>
        <meta name='description' content='Projects of my portfolio' />
      </Helmet>

      <ProjectsContainer>
        <header>
          <Span className='back' to='/'>
            <p>
              <BiArrowBack />
              Назад
            </p>
          </Span>
        </header>

        <section>
          {projectsData.map((project) => (
            <ProjectDetails {...project} key={project.id} />
          ))}
        </section>
      </ProjectsContainer>
    </>
  );
};
export default Projects