import React from 'react';
import {
  SiRedux,
  SiStyledcomponents,
  SiReactrouter,
  SiJavascript,
  SiMaterialui,
  SiSass,
  SiReact,
  SiTypescript,
  SiNextdotjs
} from 'react-icons/si';

import {FaGitAlt} from "react-icons/fa"
const SIZE = 50;

export const TechsInfo = {
  React: {
    name: 'React',
    Icon: <SiReact size={SIZE} />,
    link: 'https://es.reactjs.org/',
    description: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. ',
  },
  Redux: {
    name: 'Redux',
    Icon: <SiRedux size={SIZE} />,
    link: 'https://es.redux.js.org/',
    description: 'библиотека для JavaScript, предназначенная для управления состоянием приложения.',
  },
  StyledComponents: {
    name: 'Styled Components',
    Icon: <SiStyledcomponents size={SIZE} />,
    link: 'https://styled-components.com/',
    description:
      'Styled Components — общеизвестная библиотека для стилизации приложений React. Она позволяет создавать пользовательские компоненты посредством написания самого CSS в JavaScript. ',
  },
  ReactRouter: {
    name: 'React Router',
    Icon: <SiReactrouter size={SIZE} />,
    link: 'https://reactrouter.com/',
    description:
      'React Router это стандартная библиотека маршрутизации (routing) в React. Он хранит интерфейс приложения синхронизированным с URL на браузере.',
  },
  Sass: {
    name: 'Sass',
    Icon: <SiSass size={SIZE} />,
    link: 'https://sass-lang.com/',
    description:
      'Sass — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.',
  },
  JavaScript: {
    name: 'JavaScript',
    Icon: <SiJavascript size={SIZE} />,
    link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
    description:
      'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.',
  },
  TypeScript: {
    name: 'TypeScript',
    Icon: <SiTypescript size={SIZE} />,
    link: 'https://www.typescriptlang.org/',
    description: 'TypeScript — язык программирования расширяющий возможности JavaScript. ',
  },
  Git:{
    name:"Git",
    Icon:<FaGitAlt size={SIZE}/>,
    link: 'https://git-scm.com/',
    description:
      'Git — распределённая система управления версиями.',
  },
  Next:{
    name:"Next.js",
    Icon:<SiNextdotjs size={SIZE}/>,
    link: 'https://nextjs.org/',
    description:
      'Next.js — открытый JavaScript фреймворк, созданный поверх React.js. Фреймворк  предназначен для отрисовки  React.js приложения на стороне сервера - SSR',
  },
  MUI:{
    name:"Material-ui",
    Icon:<SiMaterialui size={SIZE}/>,
    link: ' https://mui.com/',
    description:
      'material-ui — reactJS фрэймворк, предоставляющий готовые google решения для быстрой и довольно простой web разработки',
  },
};