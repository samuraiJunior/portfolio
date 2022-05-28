import styled from 'styled-components';

export const ContactContainer = styled.section`
  width: 100%;
  height: 400px;
  background-color: #1d2024;
  position: relative;
  display: flex;
  align-items: center;
  justify-content:center;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    height: auto;
  }
`;

const inputSyles = `
  width: 100%;
  height: 50px;
  border: none;
  background: #363b42;
  outline: none;
  padding: 0 1rem;
  color: #ccc;

  &::placeholder {
    color: #ccc;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const AsideContact = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:space-between;
  @media (max-width: 768px) {
    width: 100%;
  }

  form {
    padding: 50px 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    @media (max-width: 768px) {
      padding: 1rem;
    }

    .error {
      border: 1px solid #f44336;

      &::placeholder {
        color: #f44336;
      }
    }

    input {
      ${inputSyles}
    }

    div {
      display: flex;
      width: 100%;
      justify-content: space-between;

      input {
        width: 49%;
      }
    }

    textarea {
      ${inputSyles}
      resize: none;
      padding-top: 1rem;
      max-height: 100px;
      min-height: 100px;
    }

    button {
      width: 100%;
      height: 50px;
      border: none;
      background: #0acf97;
      outline: none;
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: #07b382;
      }
    }
  }
`;

export const ContactInfo = styled.div`
  padding: 50px 30px;
  cursor: default;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  color: white;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;

    span {
      color: #0acf97;
      text-shadow: none;
    }

    margin-bottom: 1rem;
  }

  span {
    color: #0acf97;
    text-shadow: 0 0 10px #0acf97;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #ccc;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
  }
`;
