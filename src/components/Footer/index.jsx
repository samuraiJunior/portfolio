import { FooterContainer, FooterButtonsContainer } from './styles';
import  Contact  from '../Contact';
import React from 'react'

const Footer = () => {
  return (
    <FooterContainer>
      <Contact />
      <FooterButtonsContainer>
        <span>@2022</span>
        {/*Добавить кнопки*/}
      </FooterButtonsContainer>
    </FooterContainer>
  )
}

export default Footer
