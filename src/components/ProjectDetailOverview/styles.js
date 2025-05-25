
import styled from 'styled-components';
import { ItemTitle, LinkButton } from '../../styles/CommonStyledComponents';

export const ProjectTitle = styled(ItemTitle)`
  h1 {
    .projectFlag {
      font-size: 21px;
      &.pet {
        color: orange;
      }
      &.real {
        color: white;
        filter: drop-shadow(rgb(3, 189, 154) 0px 0px 0.2rem);
      }
    }
  }
`;

export const Button = styled(LinkButton)`
  ${(props) =>
    props.repo &&
    `
      background: #03bd9a;
      border: none;

      &:hover {
        background: #04b391;
      }
    `}
`;

export const ProjectDescription = styled.article`
  color: #333;

  section + section {
    margin-top: 2.5rem;
  }

  h2 {
    color: #03bd9a;
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eaeaea;
  }

  h3 {
    color: #03bd9a;
    font-size: 1.3rem;
  }

  p {
    font-size: 1.1rem;
  }

  ul {
    font-size: 1.1rem;
    padding-left: 1.5rem;
    
    li {
      color: #03bd9a;
      margin-bottom: 0.5rem;
      
      strong {
        color: #333;
      }
    }
  }

  strong {
    font-weight: 600;
  }
`;
