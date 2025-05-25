import {
  SiRedux,
  SiStyledcomponents,
  SiJavascript,
  SiMaterialui,
  SiSass,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaGitAlt, FaLess } from "react-icons/fa";
import ElementPlus from "../../utils/TechIcons/ElemntPlus";
import GrpcIcon from "../../utils/TechIcons/GrpcIcon";
import TildaIcon from "../../utils/TechIcons/TildaIcon";
import PiniaIcon from "../../utils/TechIcons/Pinia";
import Dexieicon from "../../utils/TechIcons/Dexie";
import PrimeVueIcon from "../../utils/TechIcons/PrimeVue";

export const TechsInfo = {
  JavaScript: {
    name: "JavaScript",
    Icon: SiJavascript,
    link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    description:
      "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.",
  },
  TypeScript: {
    name: "TypeScript",
    Icon: SiTypescript,
    link: "https://www.typescriptlang.org/",
    description:
      "TypeScript — язык программирования расширяющий возможности JavaScript. ",
  },
  React: {
    name: "React",
    Icon: SiReact,
    link: "https://es.reactjs.org/",
    description:
      "JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. ",
  },
  Next: {
    name: "Next.js",
    Icon: SiNextdotjs,
    link: "https://nextjs.org/",
    description:
      "Next.js — открытый JavaScript фреймворк, созданный поверх React.js. Фреймворк  предназначен для отрисовки  React.js приложения на стороне сервера - SSR",
  },
  VUE: {
    name: "Vue.js",
    Icon: SiVuedotjs,
    link: "https://vuejs.org",
    description:
      "Vue.js — JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.",
  },
  Redux: {
    name: "Redux",
    Icon: SiRedux,
    link: "https://es.redux.js.org/",
    description:
      "библиотека для JavaScript, предназначенная для управления состоянием приложения.",
  },
  VUEX: {
    name: "Vuex",
    Icon: SiVuedotjs,
    link: "https://vuetifyjs.com",
    description:
      "Библиотека управления состоянием + библиотека для приложений Vue. js. Он служит централизованным хранилищем для всех компонентов приложения с правилами, гарантирующими, что состояние может изменяться только предсказуемым образом.",
  },
  PINIA: {
    name: "Pinia",
    Icon: PiniaIcon,
    link: "https://pinia-ru.netlify.app/introduction.html",
    description:
      "Pinia - это библиотека управления состояниями. Она поддерживается основной командой Vue и работает как с Vue 2, так и с Vue 3.",
  },
  TailWind: {
    name: "Tailwind",
    Icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
    description:
      "Tailwind CSS — CSS-фреймворк с открытым исходным кодом, созданный Адамом Уэтеном и поддерживаемый Tailwind Labs. Особенность этой библиотеки в том, что, она не предопределяет CSS-классы отдельных элементов. Вместо этого она предоставляет служебные классы, которые можно объединять для стилизации каждого элемента.",
  },
  Sass: {
    name: "Sass",
    Icon: SiSass,
    link: "https://sass-lang.com/",
    description:
      "Sass — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.",
  },
    Less: {
    name: "Less",
    Icon: FaLess,
    link: "https://lesscss.org/",
    description:
      "LESS (Leaner Style Sheets, компактная таблица стилей) — это динамический язык стилей, который разработал Alexis Sellier. Он создан под влиянием языка стилей Sass, и, в свою очередь, оказал влияние на его новый синтаксис «SCSS», в котором также использован синтаксис, являющийся расширением СSS.",
  },
  StyledComponents: {
    name: "Styled Components",
    Icon: SiStyledcomponents,
    link: "https://styled-components.com/",
    description:
      "Styled Components — общеизвестная библиотека для стилизации приложений React. Она позволяет создавать пользовательские компоненты посредством написания самого CSS в JavaScript. ",
  },
  PRIME_VUE: {
    name: "PrimeVue",
    Icon: PrimeVueIcon,
    link: "https://primevue.org/",
    description:
      "PrimeVue — это развивающаяся библиотека компонентов для Vue, которая предлагает широкий выбор компонентов и гибкие опции кастомизации, подходящие для разработки веб-приложений любого масштаба.",
  },

  ELEMENT_PLUS: {
    name: "Element-plus",
    Icon: ElementPlus,
    link: "https://element-plus.org/",
    description:
      "Библиотека компонентов на основе Vue 3.0 для разработчиков, дизайнеров и менеджеров по продуктам. Она предлагает классный язык дизайна, множество параметров настройки и подробную документацию",
  },

  MUI: {
    name: "Material-ui",
    Icon: SiMaterialui,
    link: " https://mui.com/",
    description:
      "material-ui — reactJS фрэймворк, предоставляющий готовые google решения для быстрой и довольно простой web разработки",
  },
  DEXIE: {
    name: "Dexie",
    Icon: Dexieicon,
    link: "https://dexie.org/",
    description:
      "это библиотека JavaScript, которая упрощает работу с IndexedDB, стандартной базой данных в браузере. Она предназначена для ускорения разработки приложений, предоставляя удобный синтаксис и инструменты для работы с IndexedDB, как показано на странице об обертках для IndexedDB.",
  },
  GRPC_WEB: {
    name: "Grpc-web",
    Icon: GrpcIcon,
    link: "https://grpc.io/docs/platforms/web/",
    description:
      "gRPC-Web позволяет браузерным приложениям вызывать службы gRPC с помощью клиента gRPC-Web и Protobuf. Это похоже на обычный gRPC, но используется немного другой протокол, что обеспечивает совместимость с HTTP/1.1 и браузерами.",
  },
  TILDA: {
    name: "Tilda",
    Icon: TildaIcon,
    link: "https://tilda.cc/ru",
    description:
      "Tilda Publishing — блочный конструктор сайтов, не требующий навыков программирования. Позволяет создавать сайты, интернет-магазины, посадочные страницы, блоги и email-рассылки. Сайты на платформе собираются из готовых блоков, которые автоматически адаптируются под мобильные устройства и выделены в смысловые категории.",
  },
  Git: {
    name: "Git",
    Icon: FaGitAlt,
    link: "https://git-scm.com/",
    description: "Git — распределённая система управления версиями.",
  },
};
