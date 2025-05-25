import styled from 'styled-components';

export const ItemDetailOverviewContainer = styled.div`
  width: 766px;
  background: #1c1e20;
  height: 100%;
  max-height: 100vh;
  min-height: 100vh;
  border-radius: 10px;
  cursor: default;
  box-shadow: 0px 0px 5px 0px rgba(4, 229, 133, 0.3);
  filter: drop-shadow(0px 0px 10px 0px rgba(0, 0, 0, 0.75));
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 2rem;
  }
`;

export const Img = styled.img`
  width: calc(100% - 2rem);
  max-width: 766px;
  border-radius: 10px;
  margin: 1rem 1rem 0 1rem;
  max-height:374px;
`;

export const ItemInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.3rem;
  }
`;

export const Description = styled.article`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1rem;
  section {
    margin-bottom: 2.5rem;
  }
  p {
    color: #ccc;
    letter-spacing: 0.02rem;
    word-spacing: 0.02rem;
    font-size: 1.1rem;
    margin: 0.8rem 0;
  }

  h2 {
    font-size: 1.5rem;
        margin: 2rem 0 1rem;
    color: #03bd9a;
  }
    h3{
    font-size: 1.3rem;
    margin: 1rem 0;
    color: #03bd9a;
    
    }

  ul {
    list-style-type: circle;
    padding-left: 1.5rem;
    li {
      margin-bottom: 0.5rem;
      color: #ccc;
      font-size: 1.1rem;
    }
  }
      strong {
    font-weight: 600;
  }
`;

export const ItemTitle = styled.div`
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  background: #1c1e20;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;

    span {
      color: #03bd9a;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const LinkButton = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 0.8rem 1.2rem;
  background: #fffff10;
  margin-left: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid #03bd9a;
  transition: 0.3s;
  display: flex;
  align-items: center;

  svg {
    margin-left: 10px;
  }

  &:hover {
    box-shadow: 0 0 0.2rem #03bd9a;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;

    span {
      display: none;
    }

    svg {
      margin: 0;
    }
  }
`;

export const ItemsListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: white;

    span {
      color: #03bd9a;
    }
  }

  @media (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }
`;

export const ItemsList = styled.div`
  display: flex;
  width: 80%;
  overflow: scroll;
  padding: 2rem 0;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 0px;
  }

  &::-webkit-scrollbar:horizontal {
    height: 5px;
  }
  a {
  text-decoration: none;
  }
  div {
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem;
    justify-content: center;
    cursor: pointer;

    span {
      font-size: 1.2rem;
      color: #c1c1c1;
      margin-top: 1rem;
      text-align: center;
    }

    svg {
      filter: drop-shadow(0 0 0.4rem #03bd9a);
    }

    &:hover {
      span {
        filter: drop-shadow(0 0 0.1rem #03bd9a);
        color: white;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;
