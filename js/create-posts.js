import { generateRandomIncInt, getRandomArrayElement } from './util.js';
import {createComments} from './create-comments.js';

const DESCRIPTION = [
  'котик лежит на столе',
  'Кекс ест',
  'Мурзик бежит',
  'Туристы на Сенной',
  'Листочек падает',
  'Идёт дождь',
  'Горизонт заваливается',
];

const READY_POSTS_COUNT = 25;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;


const createPost = (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: generateRandomIncInt(LIKES_MIN_COUNT , LIKES_MAX_COUNT),
  comments: createComments (),
});
const createPosts = () => Array.from({length: READY_POSTS_COUNT}, createPost);

export {createPosts};
