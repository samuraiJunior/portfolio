import React from "react";
import {
  SiRedux,
  SiStyledcomponents,
  SiReactrouter,
  SiJavascript,
  SiMaterialui,
  SiSass,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";
import ElementPlus from '../../utils/TechIcons/ElemntPlus'
import GrpcIcon from '../../utils/TechIcons/GrpcIcon'
import TildaIcon from '../../utils/TechIcons/TildaIcon'
const SIZE = 50;

export const TechsInfo = {
  React: {
    name: "React",
    Icon: <SiReact size={SIZE} />,
    link: "https://es.reactjs.org/",
    description:
      "JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. ",
  },
  Redux: {
    name: "Redux",
    Icon: <SiRedux size={SIZE} />,
    link: "https://es.redux.js.org/",
    description:
      "библиотека для JavaScript, предназначенная для управления состоянием приложения.",
  },
  StyledComponents: {
    name: "Styled Components",
    Icon: <SiStyledcomponents size={SIZE} />,
    link: "https://styled-components.com/",
    description:
      "Styled Components — общеизвестная библиотека для стилизации приложений React. Она позволяет создавать пользовательские компоненты посредством написания самого CSS в JavaScript. ",
  },
  ReactRouter: {
    name: "React Router",
    Icon: <SiReactrouter size={SIZE} />,
    link: "https://reactrouter.com/",
    description:
      "React Router это стандартная библиотека маршрутизации (routing) в React. Он хранит интерфейс приложения синхронизированным с URL на браузере.",
  },
  Sass: {
    name: "Sass",
    Icon: <SiSass size={SIZE} />,
    link: "https://sass-lang.com/",
    description:
      "Sass — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.",
  },
  JavaScript: {
    name: "JavaScript",
    Icon: <SiJavascript size={SIZE} />,
    link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    description:
      "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.",
  },
  TypeScript: {
    name: "TypeScript",
    Icon: <SiTypescript size={SIZE} />,
    link: "https://www.typescriptlang.org/",
    description:
      "TypeScript — язык программирования расширяющий возможности JavaScript. ",
  },
  Git: {
    name: "Git",
    Icon: <FaGitAlt size={SIZE} />,
    link: "https://git-scm.com/",
    description: "Git — распределённая система управления версиями.",
  },
  Next: {
    name: "Next.js",
    Icon: <SiNextdotjs size={SIZE} />,
    link: "https://nextjs.org/",
    description:
      "Next.js — открытый JavaScript фреймворк, созданный поверх React.js. Фреймворк  предназначен для отрисовки  React.js приложения на стороне сервера - SSR",
  },
  MUI: {
    name: "Material-ui",
    Icon: <SiMaterialui size={SIZE} />,
    link: " https://mui.com/",
    description:
      "material-ui — reactJS фрэймворк, предоставляющий готовые google решения для быстрой и довольно простой web разработки",
  },
  VUE: {
    name: "Vue.js",
    Icon: <SiVuedotjs size={SIZE} />,
    link: "https://vuejs.org",
    description:
      "Vue.js — JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.",
  },
  VEE_VALIDATE: {
    name: "Vee-validate",
    Icon: <SiVuetify size={SIZE} />,
    link: "https://vee-validate.logaretm.com",
    description:
      "Библиотека для валидаций, появившаяся во времена Vue. js первой версии, имеет большое сообщество и используется в большом количестве проектов.",
  },
  VUEX: {
    name: "Vuex",
    Icon: <SiVuedotjs size={SIZE} />,
    link: "https://vuetifyjs.com",
    description:
      "Библиотека управления состоянием + библиотека для приложений Vue. js. Он служит централизованным хранилищем для всех компонентов приложения с правилами, гарантирующими, что состояние может изменяться только предсказуемым образом.",
  },
  TILDA: {
    name: "Tilda",
    Icon: <TildaIcon size={SIZE}/>,
    link: "https://tilda.cc/ru",
    description:
      "Tilda Publishing — блочный конструктор сайтов, не требующий навыков программирования. Позволяет создавать сайты, интернет-магазины, посадочные страницы, блоги и email-рассылки. Сайты на платформе собираются из готовых блоков, которые автоматически адаптируются под мобильные устройства и выделены в смысловые категории.",
  },
  ELEMENT_PLUS: {
    name: "Element-plus",
    Icon: <ElementPlus size={SIZE}/>,
    link: "https://element-plus.org/",
    description:
      "Библиотека компонентов на основе Vue 3.0 для разработчиков, дизайнеров и менеджеров по продуктам. Она предлагает классный язык дизайна, множество параметров настройки и подробную документацию",
  },
  GRPC_WEB: {
    name: "Grpc-web",
    Icon: <GrpcIcon size={SIZE}/>,
    link: "https://grpc.io/docs/platforms/web/",
    description:
      "gRPC-Web позволяет браузерным приложениям вызывать службы gRPC с помощью клиента gRPC-Web и Protobuf. Это похоже на обычный gRPC, но используется немного другой протокол, что обеспечивает совместимость с HTTP/1.1 и браузерами.",
  },
};
