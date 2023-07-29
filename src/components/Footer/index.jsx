import { FooterContainer, FooterButtonsContainer } from './styles';
import  Contact  from '../Contact';
import React from 'react'

const Footer = () => {
  return (
    <FooterContainer>
      <Contact />
      <FooterButtonsContainer>
        {/*Добавить кнопки*/}
      </FooterButtonsContainer>
    </FooterContainer>
  )
}

export default Footer
