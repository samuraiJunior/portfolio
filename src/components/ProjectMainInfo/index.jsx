import React from 'react';
import { Img, MainInfoContainer, InfoContainer, Button } from './styles';
import { Link } from 'react-router-dom';

 const ProjectMainInfo = ({ colorToUse, title, description, preview, image, id }) => {
  const validLetters = 200;

  return (
    <MainInfoContainer colorToUse={colorToUse}>
      <Img src={image} alt='Screen' />
      <InfoContainer>
        <h1>{title}</h1>
        <p>{description.slice(0, validLetters)}...</p>
        <div>
          <Link to={`/projects/${id}`}>
            <Button details>Детали</Button>
          </Link>

          <a href={preview} target='_blank' rel='noreferrer'>
            <Button>Посетить</Button>
          </a>
        </div>
      </InfoContainer>
    </MainInfoContainer>
  );
};
export default ProjectMainInfo
