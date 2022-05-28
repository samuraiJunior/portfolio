import { ContactContainer, AsideContact, ContactInfo } from './styles';
import React from 'react'

const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <AsideContact>
        <ContactInfo>
          <h3>
           <span>Связаться</span> можно через
          </h3>

          <span>Email</span>
          <p>galabuevoleg@mail.ru</p>

          <span>Телефон</span>
          <p>+79188287938</p>
        </ContactInfo>
      </AsideContact>

      
    </ContactContainer>
  )
}

export default Contact
