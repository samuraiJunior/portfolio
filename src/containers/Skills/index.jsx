import React from "react";
import { TechsInfo } from "../../assets/data/techsInfo";
import { ItemsList, ItemsListContainer } from "../../styles/CommonStyledComponents";

const Skills = () => {
  const SIZE = "6rem";
  const COLOR = "white";
  const techInfoArray = Object.values(TechsInfo);
  return (
    <ItemsListContainer>
      <h1>
        Я использую следующие <span>технологии</span>
      </h1>

      <ItemsList>
        {techInfoArray.map((tech) => (
          <a href={tech.link} key={tech.name} target="_blank" rel="noopener noreferrer">
            <div>
              <tech.Icon size={SIZE} color={COLOR} />
              <span>{tech.name}</span>
            </div>
          </a>
        ))}
      </ItemsList>
    </ItemsListContainer>
  );
};

export default Skills;
