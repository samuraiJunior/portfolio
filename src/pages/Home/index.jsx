import React from 'react'
import  Header  from '../../components/Header';
import  MainView  from '../../components/MainView';
import  SectionContainer  from '../../containers/SectionContainer';
import  Skills  from '../../containers/Skills';
import  ProjectsContainer  from '../../containers/ProjectsContainer';

 const Home = () => {
  return (
    <>

    {/*<Header />*/}
      <MainView /> 
      <SectionContainer id='skills' bgColor='#212428'>
        <Skills />
      </SectionContainer>

      <SectionContainer id='projects' bgColor='#212428'>
        <ProjectsContainer />
      </SectionContainer>
    </>
  );
};
export default Home