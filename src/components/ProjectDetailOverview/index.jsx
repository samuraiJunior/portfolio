import React from "react";
import {
  ProjectDetailOverviewContainer,
  Img,
  ProjectInfo,
  ProjectTitle,
  Button,
  ButtonContainer,
  Description,
} from "./styles";
import { GoRepo } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";

const ProjectDetailOverview = ({
  title,
  preview,
  description,
  image,
  repo,
  isPet
}) => {
  const titleProject = title.split(" ");

  return (
    <ProjectDetailOverviewContainer>
      <Img src={image} />

      <ProjectInfo>
        <ProjectTitle>
          <h1>
            <span>{titleProject[0]}</span> {titleProject[1]} <sup class="petProjectFlag">{isPet? 'PET' : '' }</sup>
          </h1>

          <ButtonContainer>
            {repo ? (
              <Button repo href={repo} target="_blank" rel="noreferrer">
                <span>Репозиторий</span> <GoRepo />
              </Button>
            ) : (
              ""
            )}
            <Button href={preview} target="_blank" rel="noreferrer">
              <span>Посетить </span>
              <AiOutlineLink />
            </Button>
          </ButtonContainer>
        </ProjectTitle>

        <Description>
          <p>{description}</p>
        </Description>
      </ProjectInfo>
    </ProjectDetailOverviewContainer>
  );
};
export default ProjectDetailOverview;
