import React from "react";
import { Img, MainInfoContainer, InfoContainer, Button } from "./styles";
import { Link } from "react-router-dom";

const ProjectMainInfo = ({
  colorToUse,
  title,
  description,
  preview,
  image,
  id,
  cutDescription,
}) => {
  const validLetters = 155;
  const validDescriptionProperty = cutDescription || description;
  return (
    <MainInfoContainer colorToUse={colorToUse}>
      <Img src={image} alt="Screen" />
      <InfoContainer>
        <h1>{title}</h1>
        <p>
          {validDescriptionProperty.length > validLetters
            ? validDescriptionProperty.slice(0, validLetters) + "..."
            : validDescriptionProperty}
        </p>
        <div>
          <Link to={`/projects/${id}`}>
            <Button details>Детали</Button>
          </Link>
          {preview ? (
            <a href={preview} target="_blank" rel="noreferrer">
              <Button>Посетить</Button>
            </a>
          ) : null}
        </div>
      </InfoContainer>
    </MainInfoContainer>
  );
};
export default ProjectMainInfo;
