import React from "react";
import { companiesData } from "../../assets/data/companiesData";
import {
  ItemsList,
  ItemsListContainer,
} from "../../styles/CommonStyledComponents";

export const Companies = () => {
  const SIZE = "8rem";

  return (
    <ItemsListContainer id='job'>
      <h1>
        Места <span>работы</span>
      </h1>
      <ItemsList>
        {companiesData.map((company) => (
          <a href={company.link} key={company.link} target="_blank" rel="noreferrer">
            <div>
              <company.logo size={SIZE}/>
              <span>{company.companyName}</span>
            </div>
          </a>
        ))}
      </ItemsList>
    </ItemsListContainer>
  );
};
