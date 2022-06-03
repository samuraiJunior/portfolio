import { TechsInfo } from './techsInfo';
import portfolio from '../../utils/projectsPhotos/this-portfolio.png';
import Weather from '../../utils/projectsPhotos/Weather.png';
import Sneakers from "../../utils/projectsPhotos/Sneakers.png"
import Todo from "../../utils/projectsPhotos/todo.png"

const { React, Redux, StyledComponents, ReactRouter, Sass, JavaScript, HTML, TypeScript, CSS3 } =
  TechsInfo;

export const projectsData = [ 
  {
    id: 1,
    title: 'Sneakers market',
    description:
      'Удобный магазин одежды  которому присуще все необходимые функции:  добавление/удаление из избранных и корзины, оформление и просмотр оформленного заказа, поиск нужного товара',
    image: Sneakers,
    techInfo: [React, Redux, ReactRouter, JavaScript,Sass],
    preview: 'https://samuraijunior.github.io/Sneakers/',
    repo: 'https://github.com/samuraiJunior/Sneakers',
  },
  {
    id: 2,
    title: 'Weather app',
    description:
      'Простое в использовании прилжение для того чтобы узнать погоду в любом городе планеты! Используется OPEN-Weather API .',
    image: Weather,
    techInfo: [React, Redux, Sass, JavaScript,TypeScript],
    preview: 'https://samuraijunior.github.io/Weather-app/',
    repo: 'https://github.com/samuraiJunior/Weather-app',
  },
  {
    id: 3,
    title: 'Todo app',
    description:
      'Стильное и оригинальное todo приложение. Используйте его чтобы помнить фиксировать и планировать задачи как только вы о них подумали',
    image: Todo,
    techInfo: [React, Redux, Sass,JavaScript],
    preview: 'https://samuraijunior.github.io/todo-app/',
    repo: 'https://github.com/samuraiJunior/todo-app',
  },
  {
    id: 4,
    title: 'This Portfolio',
    description:
      ' На странице моего портфолио вы можете найти следующую информацию: кто я такой, каков мой опыт работы, каковы мои навыки. Стоит отметить, крассивые цветовые комбинации в этом портфолио',
    image: portfolio,
    techInfo: [React, StyledComponents,JavaScript,ReactRouter],
    preview: 'https://samuraijunior.github.io/portfoio/',
    repo: 'https://github.com/samuraiJunior/portfolio',
  },
];
