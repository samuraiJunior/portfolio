import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import  Home  from '../pages/Home';
import  Layout  from '../containers/Layout';
import  Projects  from '../pages/Projects';
import  ProjectDetails  from '../components/ProjectDetails';
import Header from '../components/Header';

 const App = () => {
  return (
      <>
      <GlobalStyles /> 
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDetails info />} />
        </Routes>
      </Layout>
      </>
  );
};
export default App