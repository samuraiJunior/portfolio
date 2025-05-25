import styled from "styled-components";

export const CompaniesContainer = styled.section`
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

export const CompaniesItem = styled.div`
  display: flex;
  .logo {
    svg {
      filter: drop-shadow(0 0 0.4rem #03bd9a);
    }
  }
  .desciption{
    color: white;
  }
`;

export const CompaniesList = styled.div`
  display: flex;
  width: 80%;
  padding: 2rem 0;
  flex-direction: column;
  gap: 3rem;
`;
