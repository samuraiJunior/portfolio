import React from "react";
import {
  ItemDetailOverviewContainer,
  Img,
  ItemInfo,
  ItemTitle,
  LinkButton,
  ButtonContainer,
  Description,
} from "../../styles/CommonStyledComponents";
import { GoRepo } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";

const CompanyDetailOverview = ({
  title,
  preview,
  description,
  image,
  repo,
  isPet,
}) => {
  const titleCompany = title.split(" ");

  return (
    <ItemDetailOverviewContainer>
      <Img src={image} />

      <ItemInfo>
        <ItemTitle>
          <h1>
            <span>{titleCompany[0]}</span> {titleCompany[1]}{" "}
          </h1>

          <ButtonContainer>
            {repo ? (
              <LinkButton repo href={repo} target="_blank" rel="noreferrer">
                <span>Репозиторий</span> <GoRepo />
              </LinkButton>
            ) : (
              ""
            )}
            <LinkButton href={preview} target="_blank" rel="noreferrer">
              <span>Подробнее о компании</span>
              <AiOutlineLink />
            </LinkButton>
          </ButtonContainer>
        </ItemTitle>

        <Description>
          <p>{description}</p>
        </Description>
      </ItemInfo>
    </ItemDetailOverviewContainer>
  );
};
export default CompanyDetailOverview;
