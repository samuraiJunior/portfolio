import React from 'react';
import { StyledSectionContainer } from './styles';

 const SectionContainer = ({ children, id, bgColor }) => (
  <StyledSectionContainer id={id} bgColor={bgColor}>
    {children}
  </StyledSectionContainer> 
);
export default SectionContainer