import styled from 'styled-components';

export const StyledSectionContainer = styled.section`
  width: 100%;
  padding: 0 10px 150px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
`;
