import React from 'react';
import {
  AsideLeft,
  StyledMainView,
  SeeProjects,
  ButtonIcons,
  ButtonsContainer,
  ButtonHH,
  Span,
  BoxSocial,
} from './styles';
import { MdArrowRightAlt } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';


 const MainView = () => {
  return (
    <StyledMainView>
      <AsideLeft>
        <Span
          as={motion.span}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}>
          Привет, я
        </Span>
        <motion.h1
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100,
          }}>
          Галабуев Олег
        </motion.h1>
        <motion.h4
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100,
          }}>
          Middle Frontend Developer
        </motion.h4>

        <ButtonsContainer>
          <SeeProjects to='projects' spy={true} smooth='true' offset={-70} duration={500}>
            <span>
             Мои проекты <MdArrowRightAlt size='32' />
            </span>
          </SeeProjects>

          <BoxSocial>
            <a href='https://hh.ru/resume/98540dc7ff09b36cbc0039ed1f613434787946' target='_blank' rel='noreferrer'>
              <ButtonHH>hh.ru</ButtonHH>
            </a>

            <a href='https://github.com/samuraiJunior' target='_blank' rel='noreferrer'>
              <ButtonIcons>
                <AiFillGithub size={'3rem'}/>
              </ButtonIcons>
            </a> 
          </BoxSocial>
        </ButtonsContainer>
      </AsideLeft>

      {/*<Me src={} alt='me' />*/}{/*Можно будет свою фотку добавить*/ }
    </StyledMainView>
  );
};
export default MainView