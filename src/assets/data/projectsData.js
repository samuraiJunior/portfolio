import { TechsInfo } from './techsInfo';
import shoppingifyList from '../../utils/projectsPhotos/shoppingifyList.png';
import portfolio from '../../utils/projectsPhotos/this-portfolio2.png';
import Weather from '../../utils/projectsPhotos/Weather3.png';
import Sneakers from "../../utils/projectsPhotos/Sneakers.png"
import Todo from "../../utils/projectsPhotos/todo7.png"

const { React, Redux, StyledComponents, ReactRouter, Sass, JavaScript, HTML, TypeScript, CSS3 } =
  TechsInfo;

export const projectsData = [ 
  {
    id: 1,
    title: 'Sneakers market',
    description:
      'Удобный магазин кроссовок + футболоки в которому присуще все необходимые функции, а именно добавление/удаление из избранных и корзины, оформление и просмотр оформленного заказа',
    image: Sneakers,
    techInfo: [React, Redux, ReactRouter, JavaScript,Sass],
    preview: 'https://samuraijunior.github.io/Sneakers/',
    repo: 'https://github.com/samuraiJunior/Sneakers',
  },
  {
    id: 2,
    title: 'Weather app',
    description:
      'Простое в использовании прилжение для того чтобы узнать погоду в любом Городе планеты! Используется OPEN-Weather API .',
    image: Weather,
    techInfo: [React, Redux, Sass, JavaScript],
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
      ' На странице моего портфолио вы можете найти следующую информацию:кто я такой, мой опыт работы, каковы мои навыки. Стоит отметить, крассивые цветовые комбинации в этом портфолио',
    image: portfolio,
    techInfo: [React, StyledComponents,JavaScript,ReactRouter],
    preview: 'https://samuraijunior.github.io/portfoio/',
    repo: 'https://github.com/samuraiJunior/portfolio',
  },
  /*{
    id: 4,
    title: 'Battleship Game',
    description:
      'BattleShip is a game where you try to destroy your opponent’s fleet. You can play with the computer and see who is the best player.',
    image: battleship,
    userStories: [
      'The user can place their pieces horizontally or vertically',
      'The user can see the movements made with a super cool style',
      'The user can see which ship has been defeated with a feedback message.',
      'The user can see the winner and have the option to play again.',
    ],
    techInfo: [JavaScript, Sass, HTML],
    preview: 'https://leninner.github.io/battleship/',
    repo: 'https://github.com/Leninner/battleship',
  },
  {
    id: 5,
    title: 'Ropa Shop',
    description:
      'This site is built with the atomic design pattern that allows to have a correct organization of directories. The technologies used in this project are highly efficient with the system requirements.',
    image: ropaShop,
    userStories: [
      'The user can see an initial list of trending products',
      'The user can mouse over each card and see more photos about that product',
      'The user can add products to their shopping cart',
      'The user can see the summary of the purchase before proceeding to the payment',
      'The user can increase or decrease the number of products',
    ],
    techInfo: [React, Redux, ReactRouter, StyledComponents],
    preview: 'https://ropa-shop.vercel.app/',
    repo: 'https://github.com/Leninner/e-anime-shop',
  },
  {
    id: 6,
    title: 'Mini|Big Challenges',
    description:
      'This project consists of 3 great little projects to improve and increase my development skills with a to-do app, a music player and a Gif finder.',
    image: mini,
    userStories: [
      'The user can choose between any app',
      'The user can search for Gifs which are stored in local storage for the next visit',
      'User can add to-do´s, edit and delete them',
      'The user can search all and in the search view can edit, complete or delete the task',
      'User can search for song snippets that play automatically',
      'User can pause or mute the song',
    ],
    techInfo: [React, ReactRouter, TailwindCSS],
    preview: 'https://mini-challenges.vercel.app/',
    repo: 'https://github.com/Leninner/mini_challenges_react_platzi',
  },
  {
    id: 7,
    title: 'Advice Generator',
    description: 'This project gives you a random advice from a list of advices',
    image: advice,
    userStories: ['Tthe user can reload the page to get a new advice', 'The user can see an advice in a cool way'],
    techInfo: [React, TypeScript, TailwindCSS],
    preview: 'https://advice-generator-ts.vercel.app/',
    repo: 'https://github.com/Leninner/advice-generator-ts',
  },
  {
    id: 8,
    title: 'Cool Calculator',
    description: 'In this project you can find the result of any operation you want',
    image: calculator,
    userStories: [
      'The user can see the result of any operation',
      'The User can see the result in a cool way',
      "The user can't see the result of the operation if the input is empty",
      "The user can't see the result of the operation if the input is not a number",
      'The user can change the colors of the calculator',
    ],
    techInfo: [JavaScript, HTML, CSS3],
    preview: 'https://leninner.github.io/calculator/',
    repo: 'https://github.com/Leninner/calculator',
  },*/
];
