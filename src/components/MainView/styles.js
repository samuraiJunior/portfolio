import styled from 'styled-components';
import { Link } from 'react-scroll';

export const StyledMainView = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 86.75px;px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Me = styled.img`
  width: 100%;
  height: calc(100vh - 86px);
  object-fit: cover;
  object-position: center;
  outline: 2px solid #6c797d;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AsideLeft = styled.div`
  width: 100%;
  height: calc(100vh - 86px);
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  color: white;
  padding-left: 100px;
  cursor: default;
  /*&>*+*{
    margin-top:7rem
  }*/
  h1 {
    font-size: 5rem;
    width: 50%;
    line-height: 4.5rem;
    font-weight: 900;
    filter: drop-shadow(0 0 0.3rem #03bd9a);
  }

  h4 {
    font-size: 1.3rem;
    font-weight: normal;
    letter-spacing: 5px;
    color: #c4c4c4;
    margin: 30px 0 20px 0;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    align-items: center;

    h1 {
      width: 80%;
      text-align: center;
      font-size: 3.5rem;
    }
  }
`;

export const Span = styled.span`
  color: #08a185;
  letter-spacing: 1px;
  font-size: 21.5px;
  margin-bottom: 10px;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(25deg);
    width: 50%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top:7rem;
  button {
    cursor: pointer;

    &:hover {
      filter: drop-shadow(0 0 0.2rem #03bd9a);
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const SeeProjects = styled(Link)`
  background: none;
  outline: none;
  text-decoration: none;
  color: white;
  border: 1px solid #117464;
  border-radius: 30px;
  padding: 10px 30px;
  font-size: 1rem;
  font-weight: 400;

  span {
    color: white;
    font-size: 18px;
    letter-spacing: 0.2px;
    margin: 0;
    display: flex;
    align-items: center;
    /* filter: drop-shadow(0 0 0.3rem #03bd9a); */

    svg {
      margin-left: 5px;
    }
  }

  &:hover {
    filter: drop-shadow(0 0 0.2rem #03bd9a);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    margin: 20px 0;
  }
`;

export const BoxSocial = styled.div`
  display: flex;
  height: 100%;
  a{
  display: flex;
  text-decoration: none;
  }
`;

export const ButtonHH = styled.button`
  background: none;
  outline: none;
  border: 1px solid #505050;
  padding: 10px 30px;
  margin: 0 10px 0 25px;
  border-radius: 30px;
  color: #08a185;
  font-weight: bold;
`;

export const ButtonIcons = styled.button`
  background: none;
  outline: none;
  border: 1px solid #505050;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #08a185;
  font-size: 1.5rem;
  font-weight: 900;
  margin-right: 10px;
  cursor: pointer;
`;
