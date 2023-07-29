import { TechsInfo } from "./techsInfo";
import portfolio from "../../utils/projectsPhotos/this-portfolio.png";
import Weather from "../../utils/projectsPhotos/weather-app5.png";
import Sneakers from "../../utils/projectsPhotos/Sneakers.png";
import Todo from "../../utils/projectsPhotos/Todo.png";
import Disney from "../../utils/projectsPhotos/disney.png";
import LkpProject from "../../utils/projectsPhotos/st lkp.png";
import SudaSuda from "../../utils/projectsPhotos/suda-suda.png";
import LkpTilda from "../../utils/projectsPhotos/tilda lkp.png";


const {
  React,
  Redux,
  StyledComponents,
  ReactRouter,
  Sass,
  JavaScript,
  TypeScript,
  Next,
  MUI,
  VUE,
  VEE_VALIDATE,
  VUEX,
  TILDA,
  ELEMENT_PLUS,
  GRPC_WEB,
} = TechsInfo;

export const projectsData = [
  {
    id: 1,
    title: "lkp Sbertroika",
    description: `Планируй поездку. Оплачивай картой. Простой способ экономить время и деньги, оплачивая свои поездки банковской картой прямо в транспорте. Планируй поездку.
      Реальный проект, который продолжает совершенствоваться и по сей день!
      `,
    image: LkpProject,
    techInfo: [VUE, VEE_VALIDATE, VUEX, ELEMENT_PLUS, GRPC_WEB],
    preview: "https://lkp.sbertroika.ru/",
  },
  {
    id: 123,
    title: "Suda-suda Sbertroika",
    description: `Суда сюда! ⛴ Мы — маркетплейс для выгодной покупки билетов на речной транспорт Москвы! За идеями — в посты, за судами — сюда: sudasuda.ru.
      `,
    image: SudaSuda,
    techInfo: [React, Next, TypeScript, Sass, StyledComponents],
    preview: "https://sudasuda.ru/",
  },
  {
    id: 125,
    title: "Sbertroika",
    description: `СберТройка ПРО — ключевой продукт компании. Инновационное программное обеспечение для оплаты в транспорте на базе карты «Тройка»
      `,
    image: LkpTilda,
    techInfo: [TILDA],
    preview: "https://sbertroika.ru/",
  },

  {
    id: 2,
    title: "Sneakers market",
    description:
      "Удобный магазин одежды  которому присуще все необходимые функции:  добавление/удаление из избранных и корзины, оформление и просмотр оформленного заказа, поиск нужного товара.",
    image: Sneakers,
    techInfo: [React, Redux, ReactRouter, JavaScript, Sass],
    preview: "https://samuraijunior.github.io/Sneakers/",
    repo: "https://github.com/samuraiJunior/Sneakers",
  },
  {
    id: 11,
    title: "Disneyplus clone",
    description:
      "SPA приложение, представляющиее собой клон стримингового сервиса disney с небольшими изменениями/корректировками.",
    image: Disney,
    techInfo: [Next, Redux, Sass, JavaScript, MUI],
    preview: "https://disney-clone-kappa.vercel.app/",
    repo: "https://github.com/samuraiJunior/disney-clone",
  },
  {
    id: 23,
    title: "Weather app",
    description:
      "Простое в использовании прилжение для того чтобы узнать погоду в любом городе планеты! Используется OPEN-Weather API.",
    image: Weather,
    techInfo: [React, Redux, Sass, JavaScript],
    preview: "https://samuraijunior.github.io/weather/",
    repo: "https://github.com/samuraiJunior/weather",
  },
  {
    id: 32,
    title: "Todo app",
    description:
      "Стильное и оригинальное todo приложение. Используйте его чтобы помнить фиксировать и планировать задачи как только вы о них подумали.",
    image: Todo,
    techInfo: [React, Redux, Sass, TypeScript],
    preview: "https://samuraijunior.github.io/todo-app/",
    repo: "https://github.com/samuraiJunior/todo-app",
  },
  {
    id: 49,
    title: "This Portfolio",
    description:
      " На странице моего портфолио вы можете найти следующую информацию: кто я такой, каков мой опыт работы, каковы мои навыки. Стоит отметить, крассивые цветовые комбинации в этом портфолио.",
    image: portfolio,
    techInfo: [React, StyledComponents, JavaScript, ReactRouter],
    preview: "https://samuraijunior.github.io/portfolio/",
    repo: "https://github.com/samuraiJunior/portfolio",
  },
];
