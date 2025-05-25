import {
  StyledHeader,
  StyledNavLink,
  NavigationDesktop,
  NavigationMobile,
  StyledLink,
} from "./styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { animateScroll } from "react-scroll/modules";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    animateScroll.scrollToTop({
      duration: 301,
    });
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      name: "Места работы",
      link: "job",
    },
    {
      name: "Скиллы",
      link: "skills",
    },
    {
      name: "Проекты",
      link: "projects",
    },
    {
      name: "Контакты",
      link: "contact",
    },
  ];

  return (
    <StyledHeader
      as={motion.header}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavigationDesktop>
        <StyledNavLink to="/" onClick={handleScroll}>
          ОБО МНЕ
        </StyledNavLink>
        {navItems.map(({ name, link }, index) => (
          <StyledLink
            to={link}
            spy={true}
            offset={-170}
            duration={301}
            key={index}
          >
            {name.toUpperCase()}
          </StyledLink>
        ))}
      </NavigationDesktop>
      {isOpen ? (
        <AiOutlineClose size="25" onClick={handleClick} />
      ) : (
        <AiOutlineMenu size="25" onClick={handleClick} />
      )}
      <NavigationMobile isOpen={isOpen}>
        <StyledNavLink to="/" onClick={handleScroll}>
          ОБО МНЕ
        </StyledNavLink>
        {navItems.map(({ name, link }, index) => (
          <StyledLink
            to={link}
            offset={-170}
            duration={301}
            onClick={handleClick}
            key={index}
          >
            {name.toUpperCase()}
          </StyledLink>
        ))}
      </NavigationMobile>
    </StyledHeader>
  );
};
export default Header;
