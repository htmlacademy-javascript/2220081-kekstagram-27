import { generateRandomIncInt, getRandomArrayElement, getIntId} from './util.js';

const MESSAGES = [
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
const AVATAR_MIN_ID = 1;
const AVATAR_MAX_ID = 6;
const COMMENTS_MIN_COUNT = 1;
const COMMENTS_MAX_COUNT = 5;
const generateCommentId = getIntId();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${ generateRandomIncInt(AVATAR_MIN_ID, AVATAR_MAX_ID) }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createComments = () => {
  const commentsCount = generateRandomIncInt(COMMENTS_MIN_COUNT, COMMENTS_MAX_COUNT);
  return Array.from({ length: commentsCount }, createComment);
};

export{createComments};
