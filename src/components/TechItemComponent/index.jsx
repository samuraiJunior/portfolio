import React from 'react';
 const TechItemComponent = ({ TechItem, Icon, name, link, description }) => {
  const SIZE = 50;
  return (
    <TechItem>
      <Icon size={SIZE}/>
      <div>
        <h2>
          <a href={link} target='_blank' rel='noreferrer'>
            {name}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </TechItem>
  );
}; 
export default TechItemComponent