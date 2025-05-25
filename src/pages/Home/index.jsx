import React from "react";
import MainView from "../../components/MainView";
import SectionContainer from "../../containers/SectionContainer";
import Skills from "../../containers/Skills";
import ProjectsContainer from "../../containers/ProjectsContainer";
import { Companies } from "../../containers/Companies";

const Home = () => {
  return (
    <>
      <MainView />
      <SectionContainer id="companies" bgColor="#212428">
        <Companies />
      </SectionContainer>
      <SectionContainer id="skills" bgColor="#212428">
        <Skills />
      </SectionContainer>
      <SectionContainer id="projects" bgColor="#212428">
        <ProjectsContainer />
      </SectionContainer>
    </>
  );
};
export default Home;
