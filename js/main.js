function generateRandomIncInt(min , max) {
  if ((typeof min !== 'number') || (typeof max !== 'number') || (min < 0 ) || (max < 0) || (min > max) || (min === max)) {
    return NaN;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}
function validateStrMaxLenght(str, maxLenght) {
  return str.lenght <= maxLenght;
}
let commentId = 0;
const getNextId = function () {
  const nextId = commentId + generateRandomIncInt(1, 100);
  commentId = nextId;
  return nextId;
};
const DESCRIPTION = [
  'котик лежит на столе',
  'Кекс ест',
  'Мурзик бежит',
  'Туристы на Сенной',
  'Листочек падает',
  'Идёт дождь',
  'Горизонт заваливается',
];
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
const READY_POSTS_COUNT = 25;

const generateRandomArrayElement = (elements) => elements[generateRandomIncInt(0, elements.length - 1)];

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
const createPost = (_, index) => ({
  id: index + 1,
  url: `photos/${ generateRandomIncInt(1 , 25) }.jpg`,
  description: generateRandomArrayElement(DESCRIPTION),
  likes: generateRandomIncInt(15 , 200),
  comments: createComments (),
});

const postsReady = Array.from({length: READY_POSTS_COUNT}, createPost);
