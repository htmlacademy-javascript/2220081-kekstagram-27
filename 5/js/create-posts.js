import{generateRandomArrayElement} from './generate-random-element.js';
import{generateRandomIncInt} from './generate-random-int.js';
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

const createPost = (_, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: generateRandomArrayElement(DESCRIPTION),
  likes: generateRandomIncInt(15 , 200),
  comments: createComments (),
});

const postsReady = Array.from({length: READY_POSTS_COUNT}, createPost);

export {postsReady};
