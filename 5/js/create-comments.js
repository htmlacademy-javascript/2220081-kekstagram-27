import{generateRandomIncInt} from './generate-random-int.js';
import{generateRandomArrayElement} from './generate-random-element.js';

let commentId = 0;
const getNextId = function () {
  const nextId = commentId + generateRandomIncInt(1, 100);
  commentId = nextId;
  return nextId;
};

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Владимир',
  'Анастасия',
  'Вадим',
  'Сергей',
  'Акакий',
  'Кукуцаполь',
  'Василий',
  'Арарат',
  'Пудж'
];

const createComment = () => ({
  id: getNextId(),
  avatar: `img src= "img/avatar-${ generateRandomIncInt(1 , 6) }.svg"`,
  message: generateRandomArrayElement(MESSAGE),
  name: generateRandomArrayElement(NAMES),
});

const createComments = () => {
  const commentsCount = generateRandomIncInt(1 , 5);
  return Array.from({length: commentsCount}, createComment);
};

export{createComments};
