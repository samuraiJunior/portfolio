import React from "react";
import {
  ItemDetailOverviewContainer,
  Img,
  ItemInfo,
  ButtonContainer,
  Description,
} from "../../styles/CommonStyledComponents";
import { Button, ProjectTitle } from "./styles";
import { GoRepo } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";

const ProjectDetailOverview = ({
  title,
  preview,
  description,
  image,
  repo,
  companyLogo: CompanyLogo,
}) => {
  const titleProject = title.split(" ");
  const SIZE = "2.5rem";
  return (
    <ItemDetailOverviewContainer>
      <Img src={image} />

      <ItemInfo>
        <ProjectTitle>
          <h1>
            <span>{titleProject[0]}</span>{" "}
            {titleProject.length > 1 && (
              <> {titleProject.slice(1).join(" ")} </>
            )}
            <sup className={`projectFlag ${!CompanyLogo ? "pet" : "real"}`}>
              {!CompanyLogo ? "PET" : <CompanyLogo size={SIZE} />}
            </sup>
          </h1>

          <ButtonContainer>
            {repo ? (
              <Button repo href={repo} target="_blank" rel="noreferrer">
                <span>Репозиторий</span> <GoRepo />
              </Button>
            ) : (
              ""
            )}
            {preview ? (
              <Button href={preview} target="_blank" rel="noreferrer">
                <span>Посетить</span>
                <AiOutlineLink />
              </Button>
            ) : (
              ""
            )}
          </ButtonContainer>
        </ProjectTitle>

        <Description>
          {typeof description === "string" ? (
            <p> {description}</p>
          ) : (
            description
          )}
        </Description>
      </ItemInfo>
    </ItemDetailOverviewContainer>
  );
};
export default ProjectDetailOverview;
